import React from "react";

class AddNewRecipe extends React.Component {
  render() {
    return (
      <div className="newRecipe-window">
        <div className="newRecipe-window__box">
          <h3 className="newRecipe-window__box-title">Nowy przepis</h3>
          <button className="newRecipe-window__box-button">
            Zapisz i zamknij
          </button>
        </div>

        <div className="newRecipe-window__mainInfo">
          <div className="newRecipe-window__mainInfo__boxName">
            <h3 className="newRecipe-window__mainInfo__boxName-title">
              Nazwa przepisu
            </h3>
            <input className="newRecipe-window__mainInfo__boxName-input"></input>
          </div>
          <div className="newRecipe-window__mainInfo__boxDescription">
            <h3 className="newRecipe-window__mainInfo__boxDescription-title">
              Opis przepisu
            </h3>
            <textarea className="newRecipe-window__mainInfo__boxDescription-input"></textarea>
          </div>
        </div>
        <div className="distributor">
          <div className="newRecipe-window__left">
            <div className="newRecipe-window__left__box">
              <h3 className="newRecipe-window__left__box-instruction">
                Instrukcje
              </h3>
              <div className="newRecipe-window__left__boxWrapper">
                <textarea className="newRecipe-window__left__boxWrapper-inputInstruction"></textarea>
                <button className="newRecipe-window__left__boxWrapper-buttonInstruction">
                  <i class="fas fa-plus-square"></i>
                </button>
              </div>
            </div>

            <ol className="newRecipe-window__left__descriptionList">
              <li className="newRecipe-window__left__descriptionList__item">
                <p className="newRecipe-window__left__descriptionList__item-paragraph"></p>
                <button className="newRecipe-window__left__descriptionList__item-buttonWrite"></button>
                <button className="newRecipe-window__left__descriptionList__item-buttonDelete"></button>
              </li>
              <li className="newRecipe-window__left__descriptionList__item">
                <p className="newRecipe-window__left__descriptionList__item-paragraph"></p>
                <button className="newRecipe-window__left__descriptionList__item-buttonWrite"></button>
                <button className="newRecipe-window__left__descriptionList__item-buttonDelete"></button>
              </li>
              <li className="newRecipe-window__left__descriptionList__item">
                <p className="newRecipe-window__left__descriptionList__item-paragraph"></p>
                <button className="newRecipe-window__left__descriptionList__item-buttonWrite"></button>
                <button className="newRecipe-window__left__descriptionList__item-buttonDelete"></button>
              </li>
              <li className="newRecipe-window__left__descriptionList__item">
                <p className="newRecipe-window__left__descriptionList__item-paragraph"></p>
                <button className="newRecipe-window__left__descriptionList__item-buttonWrite"></button>
                <button className="newRecipe-window__left__descriptionList__item-buttonDelete"></button>
              </li>
              <li className="newRecipe-window__left__descriptionList__item">
                <p className="newRecipe-window__left__descriptionList__item-paragraph"></p>
                <button className="newRecipe-window__left__descriptionList__item-buttonWrite"></button>
                <button className="newRecipe-window__left__descriptionList__item-buttonDelete"></button>
              </li>
            </ol>
          </div>

          <div className="newRecipe-window__right">
            <div className="newRecipe-window__right__box">
              <h3 className="newRecipe-window__right__box-ingredients">
                Składniki
              </h3>
              <div className="newRecipe-window__right__boxWrapper">
                <input className="newRecipe-window__right__boxWrapper-inputIngredients"></input>
                <button className="newRecipe-window__right__boxWrapper-buttonIngredients">
                  <i class="fas fa-plus-square"></i>
                </button>
              </div>
            </div>

            <ul className="newRecipe-window__left__ingredientsList">
              <li className="newRecipe-window__left__ingredientsList__item">
                <p className="newRecipe-window__left__ingredientsList__item-paragraph"></p>
                <button className="newRecipe-window__left__ingredientsList__item-buttonWrite"></button>
                <button className="newRecipe-window__left__ingredientsList__item-buttonDelete"></button>
              </li>
              <li className="newRecipe-window__left__ingredientsList__item">
                <p className="newRecipe-window__left__ingredientsList__item-paragraph"></p>
                <button className="newRecipe-window__left__ingredientsList__item-buttonWrite"></button>
                <button className="newRecipe-window__left__ingredientsList__item-buttonDelete"></button>
              </li>
              <li className="newRecipe-window__left__ingredientsList__item">
                <p className="newRecipe-window__left__ingredientsList__item-paragraph"></p>
                <button className="newRecipe-window__left__ingredientsList__item-buttonWrite"></button>
                <button className="newRecipe-window__left__ingredientsList__item-buttonDelete"></button>
              </li>
              <li className="newRecipe-window__left__ingredientsList__item">
                <p className="newRecipe-window__left__ingredientsList__item-paragraph"></p>
                <button className="newRecipe-window__left__ingredientsList__item-buttonWrite"></button>
                <button className="newRecipe-window__left__ingredientsList__item-buttonDelete"></button>
              </li>
              <li className="newRecipe-window__left__ingredientsList__item">
                <p className="newRecipe-window__left__ingredientsList__item-paragraph"></p>
                <button className="newRecipe-window__left__ingredientsList__item-buttonWrite"></button>
                <button className="newRecipe-window__left__ingredientsList__item-buttonDelete"></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewRecipe;
