import React from "react";

class AddNewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      steps: [],
      ingredients: []
    };
  }

  handleClick = () => {
    const data = {
      name: this.state.name,
      description: this.state.description,
      steps: this.state.steps,
      ingredients: this.state.ingredients
    };

    const asyncFoo = async () => {
      const url = " http://localhost:3000/recipes";
      const rawResponse = await fetch(url);
      const content = await rawResponse.json();
      const combine = JSON.stringify(data);
      const update = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset= utf-8"
        },
        body: combine
      });
      const contentUpdate = await update.json();
      console.log(contentUpdate);
    };
    asyncFoo();
    alert("Super, nowy przepis został dodany ! ");};

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleChangeSteps = e => {
    this.setState({
      steps: e.target.value
    });
  };
  handleChangeIngredients = e => {
    this.setState({
      ingredients: e.target.value
    });
  };

  render() {
    let list = document.createElement("li");
    let paragraph = document.createElement("p");
    let buttonEdit = document.createElement("button");
    let buttonDelete = document.createElement("button");
    let iconDelete = document.createElement("i");
    let iconEdit = document.createElement("i");
    list.appendChild(paragraph);
    list.appendChild(buttonEdit);
    list.appendChild(buttonDelete);
    iconEdit.classList.add("far", "fa-edit");
    iconDelete.classList.add("far", "fa-trash-alt");
    buttonDelete.appendChild(iconDelete);
    buttonEdit.appendChild(iconEdit);

    let pushInstruction = () => {
      paragraph.classList.add(
        "newRecipe-window__left__descriptionList__item-paragraph"
      );
      list.classList.add("newRecipe-window__left__descriptionList__item");
      buttonEdit.classList.add(
        "newRecipe-window__left__descriptionList__item-buttonWrite"
      );
      buttonDelete.classList.add(
        "newRecipe-window__left__descriptionList__item-buttonDelete"
      );
      paragraph.innerText = this.state.steps;

      let ol = document.querySelector(
        ".newRecipe-window__left__descriptionList"
      );
      ol.appendChild(list);
    };

    let pushIngredients = () => {
      paragraph.classList.add(
        "newRecipe-window__right__ingredientsList__item-paragraph"
      );
      list.classList.add("newRecipe-window__right__ingredientsList__item");
      buttonEdit.classList.add(
        "newRecipe-window__right__ingredientsList__item-buttonWrite"
      );
      buttonDelete.classList.add(
        "newRecipe-window__right__ingredientsList__item-buttonDelete"
      );
      paragraph.innerText = this.state.ingredients;

      let ul = document.querySelector(
        ".newRecipe-window__right__ingredientsList"
      );
      ul.appendChild(list);
    };
    return (
      <div className="newRecipe-window">
        <div className="newRecipe-window__box">
          <h3 className="newRecipe-window__box-title">Nowy przepis</h3>
          <button
            className="newRecipe-window__box-button"
            onClick={this.handleClick}
          >
            Zapisz 
          </button>
        </div>

        <div className="newRecipe-window__mainInfo">
          <div className="newRecipe-window__mainInfo__boxName">
            <h3 className="newRecipe-window__mainInfo__boxName-title">
              Nazwa przepisu
            </h3>
            <input
              className="newRecipe-window__mainInfo__boxName-input"
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChangeName}
            ></input>
          </div>
          <div className="newRecipe-window__mainInfo__boxDescription">
            <h3 className="newRecipe-window__mainInfo__boxDescription-title">
              Opis przepisu
            </h3>
            <textarea
              className="newRecipe-window__mainInfo__boxDescription-input"
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleChangeDescription}
            ></textarea>
          </div>
        </div>
        <div className="distributor">
          <div className="newRecipe-window__left">
            <div className="newRecipe-window__left__box">
              <h3 className="newRecipe-window__left__box-instruction">
                Instrukcje
              </h3>
              <div className="newRecipe-window__left__boxWrapper">
                <textarea
                  className="newRecipe-window__left__boxWrapper-inputInstruction"
                  type="text"
                  name="steps"
                  id="steps"
                  value={this.state.steps}
                  onChange={this.handleChangeSteps}
                ></textarea>
                <button
                  className="newRecipe-window__left__boxWrapper-buttonInstruction"
                  onClick={pushInstruction}
                >
                  <i className="fas fa-plus-square"></i>
                </button>
              </div>
            </div>

            <ol className="newRecipe-window__left__descriptionList"></ol>
          </div>

          <div className="newRecipe-window__right">
            <div className="newRecipe-window__right__box">
              <h3 className="newRecipe-window__right__box-ingredients">
                Składniki
              </h3>
              <div className="newRecipe-window__right__boxWrapper">
                <input
                  className="newRecipe-window__right__boxWrapper-inputIngredients"
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  value={this.state.ingredients}
                  onChange={this.handleChangeIngredients}
                ></input>
                <button
                  className="newRecipe-window__right__boxWrapper-buttonIngredients"
                  onClick={pushIngredients}
                >
                  <i className="fas fa-plus-square"></i>
                </button>
              </div>
            </div>

            <ul className="newRecipe-window__right__ingredientsList"></ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewRecipe;