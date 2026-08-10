import potatoImage from "../../images/potato.jpg";

const ItemsDonatedCalc = () => {
  return (
    <section className="calc-panel">
      <div className="calc-panel__heading">
        <span className="calc-panel__eyebrow">Preview</span>
        <h2 className="calc-panel__title">Items Donated</h2>
        <p className="calc-panel__subtitle">
          This tool is also still a concept, and the updated interface now fits
          the rest of the calculator experience.
        </p>
      </div>

      <div className="calc-placeholder">
        <div className="calc-placeholder__info">
          <img
            alt="Donated items"
            className="calc-placeholder__image"
            src={potatoImage}
          />
          <div className="calc-placeholder__body">
            <span className="calc-placeholder__badge">Coming soon</span>
            <h3>Track the climate value of reuse</h3>
            <p>
              The future version can estimate avoided emissions from donating
              usable items instead of sending them to landfill.
            </p>
          </div>
        </div>

        <div className="calc-placeholder__form">
          <div className="calc-placeholder__form-body">
            <h3>Planned inputs</h3>
            <div className="calc-placeholder__grid">
              <div className="calc-placeholder__field">
                <label htmlFor="itemDonated">Item type</label>
                <select id="itemDonated" name="itemDonated">
                  <option value="clothing">Clothing</option>
                  <option value="food">Food</option>
                  <option value="toys">Toys</option>
                </select>
              </div>
              <div className="calc-placeholder__field">
                <label htmlFor="itemWeight">Weight (kg)</label>
                <input id="itemWeight" min="0" name="itemWeight" step=".01" type="number" />
              </div>
            </div>
            <div className="calc-placeholder__note">
              This tool is not calculating results yet, but the structure is now
              ready for data and interaction work.
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default ItemsDonatedCalc;
