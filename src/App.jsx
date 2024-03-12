/* eslint-disable no-unused-vars */
import { useState } from "react";
import CardForm from "./components/CardForm";
import Success from "./components/Success";
import cardLogo from "./assets/images/card-logo.svg";
import "./app.css";

function App() {
  const [enteredValues, setEnteredValues] = useState({
    cardName: "",
    cardNum: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [formPass, setFormPass] = useState(false);

  return (
    <div className="container">
      <aside className="frame-side">
        <div className="card-front">
          <img src={cardLogo} alt="card logo" className="front-card-logo" />
          <h1 className="card-number">{enteredValues.cardNum}</h1>
          <div className="footer-data">
            <p>{enteredValues.cardName}</p>
            <p>
              <span>{enteredValues.month}</span>/
              <span>{enteredValues.year}</span>
            </p>
          </div>
        </div>
        <div className="card-back">
          <p className="cv-code">{enteredValues.cvc}</p>
        </div>
      </aside>

      <main className="form-side">
        {formPass ? (
          <Success
            setFormPass={setFormPass}
            setEnteredValues={setEnteredValues}
          />
        ) : (
          <CardForm
            enteredValues={enteredValues}
            setEnteredValues={setEnteredValues}
            formPass={formPass}
            setFormPass={setFormPass}
          />
        )}
      </main>
    </div>
  );
}

export default App;
