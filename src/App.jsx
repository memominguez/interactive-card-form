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

  const [focusStatus, setFocusStatus] = useState({
    numField: false,
    nameField: false,
    monthField: false,
    yearField: false,
    cvcField: false,
  });

  const [touched, setTouched] = useState({
    numField: false,
    nameField: false,
    monthField: false,
    yearField: false,
    cvcField: false,
  });

  return (
    <div className="container">
      <aside className="frame-side">
        <div className="card-front">
          <img src={cardLogo} alt="card logo" className="front-card-logo" />

          <h1 className="card-number">
            {touched.numField ? enteredValues.cardNum : "0000 0000 0000 0000"}
          </h1>

          <div className="footer-data">
            <p>
              {touched.nameField ? enteredValues.cardName : "JANE APPLESEED"}
            </p>
            <p>
              <span>{touched.monthField ? enteredValues.month : "00"}</span>
              <span>/</span>
              <span>{touched.yearField ? enteredValues.year : "00"}</span>
            </p>
          </div>
        </div>

        <div className="card-back">
          <p className="cv-code">
            {touched.cvcField ? enteredValues.cvc : "000"}
          </p>
        </div>
      </aside>

      <main className="form-side">
        {formPass ? (
          <Success
            setFormPass={setFormPass}
            setEnteredValues={setEnteredValues}
            setFocusStatus={setFocusStatus}
            setTouched={setTouched}
          />
        ) : (
          <CardForm
            enteredValues={enteredValues}
            setEnteredValues={setEnteredValues}
            formPass={formPass}
            setFormPass={setFormPass}
            focusStatus={focusStatus}
            setFocusStatus={setFocusStatus}
            touched={touched}
            setTouched={setTouched}
          />
        )}
      </main>
    </div>
  );
}

export default App;
