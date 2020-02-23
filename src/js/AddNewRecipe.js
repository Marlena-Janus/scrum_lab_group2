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
  // componentDidMount() {
  //   fetch("http://localhost:3000/recipes")
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({
  //         name: data.name,
  //         description: data.description,
  //         steps: data.steps,
  //         ingredients: data.ingredients
  //       })
  //     );
  // }

  handleClick = () => {
    const data = {
      name: this.state.name,
      description: this.state.description,
      steps: this.state.steps,
      ingredients: this.state.ingredients
    };

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          name: this.state.name,
          description: this.state.description,
          steps: this.state.steps,
          ingredients: this.state.ingredients
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  handleChangeName = e => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    });
  };
  handleChangeDescription = e => {
    console.log(e.target.value);
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
    console.log(e.target.value);
    this.setState({
      ingredients: e.target.value
    });
  };

  render() {
    let pushInstruction = () => {
      let list = document.createElement("li");
      let paragraph = document.createElement("p");
      let buttonEdit = document.createElement("button");
      let buttonDelete = document.createElement("button");
      let iconDelete = document.createElement("i");
      let iconEdit = document.createElement("i");

      iconEdit.classList.add("far", "fa-edit");
      iconDelete.classList.add("far", "fa-trash-alt");

      buttonDelete.appendChild(iconDelete);
      buttonEdit.appendChild(iconEdit);

      list.appendChild(paragraph);
      list.appendChild(buttonEdit);
      list.appendChild(buttonDelete);
      paragraph.innerText = this.state.steps;

      let ol = document.querySelector(
        ".newRecipe-window__left__descriptionList"
      );
      ol.appendChild(list);
    };
    let pushIngredients = () => {
      let list = document.createElement("li");
      let paragraph = document.createElement("p");
      let buttonEdit = document.createElement("button");
      let buttonDelete = document.createElement("button");
      let iconDelete = document.createElement("i");
      let iconEdit = document.createElement("i");

      iconEdit.classList.add("far", "fa-edit");
      iconDelete.classList.add("far", "fa-trash-alt");

      buttonDelete.appendChild(iconDelete);
      buttonEdit.appendChild(iconEdit);
      
      list.appendChild(paragraph);
      list.appendChild(buttonEdit);
      list.appendChild(buttonDelete);
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
            Zapisz i zamknij
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

            <ol className="newRecipe-window__left__descriptionList">
              {/* <li className="newRecipe-window__left__descriptionList__item">
                <p className="newRecipe-window__left__descriptionList__item-paragraph">
                  {this.state.steps}
                </p>
                <button className="newRecipe-window__left__descriptionList__item-buttonWrite">
                  <i className="far fa-edit"></i>
                </button>
                <button className="newRecipe-window__left__descriptionList__item-buttonDelete">
                  <i className="far fa-trash-alt"></i>
                </button>
              </li> */}
            </ol>
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
                <button className="newRecipe-window__right__boxWrapper-buttonIngredients" onClick={pushIngredients}>
                  <i className="fas fa-plus-square"></i>
                </button>
              </div>
            </div>

            <ul className="newRecipe-window__right__ingredientsList">
              {/* <li className="newRecipe-window__right__ingredientsList__item">
                <p className="newRecipe-window__right__ingredientsList__item-paragraph">
                  jajko
                </p>
                <button className="newRecipe-window__right__ingredientsList__item-buttonWrite">
                  <i className="far fa-edit"></i>
                </button>
                <button className="newRecipe-window__right__ingredientsList__item-buttonDelete">
                  <i className="far fa-trash-alt"></i>
                </button>
              </li>
              <li className="newRecipe-window__right__ingredientsList__item">
                <p className="newRecipe-window__right__ingredientsList__item-paragraph">
                  jajko
                </p>
                <button className="newRecipe-window__right__ingredientsList__item-buttonWrite">
                  <i className="far fa-edit"></i>
                </button>
                <button className="newRecipe-window__right__ingredientsList__item-buttonDelete">
                  <i className="far fa-trash-alt"></i>
                </button>
              </li>
              <li className="newRecipe-window__right__ingredientsList__item">
                <p className="newRecipe-window__right__ingredientsList__item-paragraph">
                  jajko
                </p>
                <button className="newRecipe-window__right__ingredientsList__item-buttonWrite">
                  <i className="far fa-edit"></i>
                </button>
                <button className="newRecipe-window__right__ingredientsList__item-buttonDelete">
                  <i className="far fa-trash-alt"></i>
                </button>
              </li>
              <li className="newRecipe-window__right__ingredientsList__item">
                <p className="newRecipe-window__right__ingredientsList__item-paragraph">
                  jajko
                </p>
                <button className="newRecipe-window__right__ingredientsList__item-buttonWrite">
                  <i className="far fa-edit"></i>
                </button>
                <button className="newRecipe-window__right__ingredientsList__item-buttonDelete">
                  <i className="far fa-trash-alt"></i>
                </button>
              </li>
              <li className="newRecipe-window__right__ingredientsList__item">
                <p className="newRecipe-window__right__ingredientsList__item-paragraph">
                  jajko
                </p>
                <button className="newRecipe-window__right__ingredientsList__item-buttonWrite">
                  <i className="far fa-edit"></i>
                </button>
                <button className="newRecipe-window__right__ingredientsList__item-buttonDelete">
                  <i className="far fa-trash-alt"></i>
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewRecipe;
