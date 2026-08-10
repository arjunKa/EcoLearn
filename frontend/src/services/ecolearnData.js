import AxiosInstance from "../components/Axios";
import {
  API_BASE_URL,
  DATASET_URL,
  DATA_SOURCE_MODE,
  hasApiBaseUrl,
  isApiMode,
  isRepoMode,
} from "../config/appConfig";

const WATER_CO2_PER_LITRE = 0.298;

let datasetPromise;

const normalize = (value) => String(value ?? "").trim().toLowerCase();
const toNumber = (value) => Number.parseFloat(value);

const clone = (value) => JSON.parse(JSON.stringify(value));

const getDataset = async () => {
  if (!datasetPromise) {
    datasetPromise = fetch(DATASET_URL).then(async (response) => {
      if (!response.ok) {
        throw new Error(`Failed to load dataset from ${DATASET_URL}`);
      }

      return response.json();
    });
  }

  return datasetPromise;
};

const findByValue = (collection, key, value) =>
  collection.find((item) => normalize(item[key]) === normalize(value));

const resolveApi = async (request) => {
  if (isRepoMode || !hasApiBaseUrl) {
    return null;
  }

  if (isApiMode) {
    return request();
  }

  try {
    return await request();
  } catch (error) {
    console.warn(
      `Falling back to repo data because ${DATA_SOURCE_MODE} mode could not reach the API.`,
      error
    );
    return null;
  }
};

const normalizeMetrics = (metrics) =>
  metrics.map((item) => ({
    ...item,
    amount: toNumber(item.amount),
  }));

const normalizeTreesPayload = (payload) => ({
  ...payload,
  list: payload.list.map((item) => ({
    ...item,
    amount_carbon: toNumber(item.amount_carbon),
    total: toNumber(item.total),
    quantity: toNumber(item.quantity),
  })),
  total: toNumber(payload.total),
});

const normalizeVehiclePayload = (payload) => ({
  ...payload,
  amount_carbon: toNumber(payload.amount_carbon),
  carbon_reduction_driving: toNumber(payload.carbon_reduction_driving),
  carbon_reduction_idling: toNumber(payload.carbon_reduction_idling),
  total_carbon_reduction: toNumber(payload.total_carbon_reduction),
  distance: toNumber(payload.distance),
  idling: toNumber(payload.idling),
});

const normalizeFoodPayload = (payload) => ({
  ...payload,
  list: payload.list.map((item) => ({
    ...item,
    total: toNumber(item.total),
    quantity: toNumber(item.quantity),
  })),
  total: toNumber(payload.total),
});

const normalizeGardenPayload = (payload) => ({
  ...payload,
  amount_carbon: toNumber(payload.amount_carbon),
  carbon_reduction: toNumber(payload.carbon_reduction),
});

const normalizeWaterPayload = (payload) => ({
  ...payload,
  amount: toNumber(payload.amount),
  amount_carbon: payload.amount_carbon ? toNumber(payload.amount_carbon) : undefined,
  power: toNumber(payload.power),
  carbon_reduction: toNumber(payload.carbon_reduction),
});

const aggregateEntries = (items) => {
  const total = items.reduce((sum, item) => sum + item.total, 0);
  return { list: items, total };
};

export const getMetricsData = async () => {
  const apiMetrics = await resolveApi(async () => {
    const response = await AxiosInstance.get("/api/metric/");
    return normalizeMetrics(response.data);
  });

  if (apiMetrics) {
    return apiMetrics;
  }

  const dataset = await getDataset();
  return normalizeMetrics(clone(dataset.metrics));
};

export const calculateTrees = async (treeData) => {
  const apiResult = await resolveApi(async () => {
    const response = await AxiosInstance.post("/api/ecolearning/trees/", {
      treeData: treeData.map((item) => ({
        selectedOption: item.selectedOption,
        age: item.quantity,
      })),
    });

    return normalizeTreesPayload(response.data);
  });

  if (apiResult) {
    return apiResult;
  }

  const dataset = await getDataset();
  const grouped = new Map();

  treeData.forEach((item) => {
    const match = findByValue(dataset.trees, "type", item.selectedOption);
    if (!match) {
      return;
    }

    const quantity = toNumber(item.quantity);
    const amountCarbon = toNumber(match.amount_carbon);
    const key = normalize(match.type);
    const current = grouped.get(key);

    if (current) {
      current.quantity += quantity;
      current.total += amountCarbon * quantity;
      return;
    }

    grouped.set(key, {
      type: match.type,
      quantity,
      amount_carbon: amountCarbon,
      total: amountCarbon * quantity,
    });
  });

  return aggregateEntries([...grouped.values()]);
};

export const calculateGarden = async ({ selectedOption, quantity }) => {
  const apiResult = await resolveApi(async () => {
    const response = await AxiosInstance.get("/api/ecolearning/gardens", {
      params: {
        type: selectedOption,
        quantity,
      },
    });

    return normalizeGardenPayload(response.data);
  });

  if (apiResult) {
    return apiResult;
  }

  const dataset = await getDataset();
  const match = findByValue(dataset.gardens, "type", selectedOption);

  if (!match) {
    throw new Error(`No garden data found for "${selectedOption}".`);
  }

  const amountCarbon = toNumber(match.amount_carbon);
  const parsedQuantity = toNumber(quantity);

  return {
    ...clone(match),
    amount_carbon: amountCarbon,
    carbon_reduction: amountCarbon * parsedQuantity,
  };
};

export const calculateVehicle = async ({ selectedOption, amount, idling }) => {
  const apiResult = await resolveApi(async () => {
    const response = await AxiosInstance.get("/api/ecolearning/vehicles", {
      params: {
        type: selectedOption,
        distance: amount,
        idling,
      },
    });

    return normalizeVehiclePayload(response.data);
  });

  if (apiResult) {
    return apiResult;
  }

  const dataset = await getDataset();
  const match = findByValue(dataset.vehicles, "type", selectedOption);

  if (!match) {
    throw new Error(`No vehicle data found for "${selectedOption}".`);
  }

  const distance = toNumber(amount);
  const idlingMinutes = toNumber(idling);
  const amountCarbon = toNumber(match.amount_carbon);
  const carbonReductionDriving = Number((distance * amountCarbon).toFixed(2));
  const carbonReductionIdling = Number((0.03 * idlingMinutes).toFixed(2));

  return {
    ...clone(match),
    amount_carbon: amountCarbon,
    distance,
    idling: idlingMinutes,
    carbon_reduction_driving: carbonReductionDriving,
    carbon_reduction_idling: carbonReductionIdling,
    total_carbon_reduction: Number(
      (carbonReductionDriving + carbonReductionIdling).toFixed(2)
    ),
  };
};

export const calculateFoodWaste = async (foodData) => {
  const apiResult = await resolveApi(async () => {
    const response = await AxiosInstance.post("/api/ecolearning/food/", {
      foodData,
    });

    return normalizeFoodPayload(response.data);
  });

  if (apiResult) {
    return apiResult;
  }

  const dataset = await getDataset();
  const grouped = new Map();

  foodData.forEach((item) => {
    const match = findByValue(dataset.food, "type", item.selectedOption);
    if (!match) {
      return;
    }

    const quantity = toNumber(item.quantity);
    const amountCarbon = toNumber(match.amount_carbon);
    const key = normalize(match.type);
    const current = grouped.get(key);

    if (current) {
      current.quantity += quantity;
      current.total += amountCarbon * quantity;
      return;
    }

    grouped.set(key, {
      type: normalize(match.type),
      quantity,
      total: amountCarbon * quantity,
    });
  });

  return aggregateEntries([...grouped.values()]);
};

export const calculateRecycle = async ({ selectedOption, value }) => {
  const apiResult = await resolveApi(async () => {
    const response = await AxiosInstance.get("/api/recycle", {
      params: {
        type: selectedOption,
      },
    });

    return response.data.map((item) => ({
      ...item,
      amount_carbon: toNumber(item.amount_carbon),
      quantity: toNumber(value),
    }));
  });

  if (apiResult) {
    return apiResult;
  }

  const dataset = await getDataset();
  const match = findByValue(dataset.recycle, "type", selectedOption);

  if (!match) {
    throw new Error(`No recycling data found for "${selectedOption}".`);
  }

  return [
    {
      ...clone(match),
      amount_carbon: toNumber(match.amount_carbon),
      quantity: toNumber(value),
    },
  ];
};

export const calculateWaterSaved = async ({ selectedOption, value }) => {
  const carbonReduction = WATER_CO2_PER_LITRE * toNumber(value);

  const apiProvince = await resolveApi(async () => {
    const response = await AxiosInstance.get("/api/province", {
      params: {
        name: selectedOption,
      },
    });

    return response.data?.[0];
  });

  if (apiProvince) {
    return normalizeWaterPayload({
      ...apiProvince,
      amount: WATER_CO2_PER_LITRE,
      province: apiProvince.name,
      power: apiProvince.amount_carbon,
      carbon_reduction: carbonReduction,
    });
  }

  const dataset = await getDataset();
  const match = findByValue(dataset.provinces, "name", selectedOption);

  if (!match) {
    throw new Error(`No province data found for "${selectedOption}".`);
  }

  return normalizeWaterPayload({
    ...clone(match),
    amount: WATER_CO2_PER_LITRE,
    province: match.name,
    power: match.amount_carbon,
    carbon_reduction: carbonReduction,
  });
};

export const getCollectionLink = (collectionName) => {
  if (!isRepoMode && hasApiBaseUrl) {
    const routeMap = {
      trees: "trees",
      gardens: "gardens",
      food: "food",
      recycle: "recycle",
      vehicles: "vehicles",
      metrics: "metric",
      provinces: "province",
    };

    return `${API_BASE_URL}/api/${routeMap[collectionName]}/`;
  }

  return DATASET_URL;
};
