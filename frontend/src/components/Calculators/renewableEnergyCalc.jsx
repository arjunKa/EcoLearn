import energyImage from "../../images/energyImage.jpg";

const RenewableEnergyCalc = () => {
  return (
    <section className="calc-panel">
      <div className="calc-panel__heading">
        <span className="calc-panel__eyebrow">Preview</span>
        <h2 className="calc-panel__title">Renewable Energy</h2>
        <p className="calc-panel__subtitle">
          This calculator is still a concept, but the interface now matches the
          rest of the tools and is ready for the next logic pass.
        </p>
      </div>

      <div className="calc-placeholder">
        <div className="calc-placeholder__info">
          <img
            alt="Renewable energy"
            className="calc-placeholder__image"
            src={energyImage}
          />
          <div className="calc-placeholder__body">
            <span className="calc-placeholder__badge">Coming soon</span>
            <h3>Estimate cleaner electricity choices</h3>
            <p>
              The planned version will translate reduced electricity use or
              cleaner energy choices into emissions impact using regional grid
              mixes.
            </p>
          </div>
        </div>

        <div className="calc-placeholder__form">
          <div className="calc-placeholder__form-body">
            <h3>Planned inputs</h3>
            <div className="calc-placeholder__grid">
              <div className="calc-placeholder__field">
                <label htmlFor="province">Province or territory</label>
                <select id="province" name="province">
                  <option value="ab">Alberta</option>
                  <option value="bc">British Columbia</option>
                  <option value="mb">Manitoba</option>
                  <option value="nb">New Brunswick</option>
                  <option value="nl">Newfoundland and Labrador</option>
                  <option value="nt">Northwest Territories</option>
                  <option value="ns">Nova Scotia</option>
                  <option value="nu">Nunavut</option>
                  <option value="on">Ontario</option>
                  <option value="pe">Prince Edward Island</option>
                  <option value="qc">Quebec</option>
                  <option value="sk">Saskatchewan</option>
                  <option value="yt">Yukon</option>
                </select>
              </div>
              <div className="calc-placeholder__field">
                <label htmlFor="energySaved">Energy saved (kWh)</label>
                <input id="energySaved" min="0" name="energySaved" step=".01" type="number" />
              </div>
            </div>
            <div className="calc-placeholder__note">
              This tool is not calculating results yet, but the UI now stays
              visually consistent with the active calculators.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenewableEnergyCalc;
