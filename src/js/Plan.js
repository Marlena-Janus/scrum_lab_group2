import React from "react";

const Plan = () => {
  return (
    <div className="meal-plan-wrapper">
      <div className="meal-plan-header">
        <h3>NOWY PLAN</h3>
        <button>Zapisz i zamknij</button>
      </div>
      <div className="meal-plan-desription">
        <p>Nazwa planu</p>
        <input type="text" id="plan-name"/>
      </div>
      <div className="meal-plan-desription">
        <p>Opis planu</p>
        <input type="text" id="plan-description"/>
      </div>
      <div className="meal-plan-desription">
        <p>Numer tygodnia</p>
        <input type="number" id="week-number"/>
      </div>
      <div className="meal-plan-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>ŚNIADANIE</th>
              <th>DRUGIE ŚNIADANIE</th>
              <th>ZUPA</th>
              <th>DRUGIE DANIE</th>
              <th>KOLACJA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="weekday">PONIEDZIAŁEK</td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="weekday">WTOREK</td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="weekday">ŚRODA</td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="weekday">CZWARTEK</td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="weekday">PIĄTEK</td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="weekday">SOBOTA</td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="weekday">NIEDZIELA</td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
              <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
              <td>
                <select name="choose-meal">
                  <option value="zapiekanka">Zapiekanka z ziemniakami</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Plan;