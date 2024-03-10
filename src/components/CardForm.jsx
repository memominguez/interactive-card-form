/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Cleave from "cleave.js/react";
import "./cardform.css";

export default function CardForm({
  enteredValues,
  setEnteredValues,
  formPass,
  setFormPass,
}) {
  const [errors, setErrors] = useState({});

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const validationErrors = {};

    // Validate name
    if (enteredValues.cardName.trim().length < 4) {
      validationErrors.cardName = "User name required > 3 chars";
    }

    // Validate card number
    let trimNum = enteredValues.cardNum.trim()
    let numNospaces = enteredValues.cardNum.replace(/\s+/g, "");
    let numValid = isStringAllNumbers(numNospaces);
    if (trimNum.length < 16 || numValid === false) {
        validationErrors.cardNum = "Please enter a valid card number";
    }   

    // Validate month
    if (!enteredValues.month.trim()) {
      validationErrors.month = "Can't be blank";
    }

    // Validate year
    if (!enteredValues.year.trim()) {
      validationErrors.year = "Can't be blank";
    }

    // Validate CVC
    if (!enteredValues.cvc.trim()) {
      validationErrors.cvc = "Can't be blank";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setFormPass(true);
    } else {
      setFormPass(false);
      return;
    }
  };

  // To validate card number. Check that all are numbers
  function isStringAllNumbers(str) {
    for (let i = 0; i < str.length; i++) {
      if (isNaN(parseInt(str[i]))) {
        return false;
      }
    }
    return true;
  }

  return (
    <main className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-group1">
          <label htmlFor="card-name">CARD HOLDER NAME</label>
          <input
            type="text"
            name="cardName"
            id="card-name"
            className={errors.cardName ? "input error" : "input"}
            placeholder="e.g. Jane Appleseed"
            onChange={(event) =>
              handleInputChange("cardName", event.target.value)
            }
            value={enteredValues.cardName}
          />
          {errors.cardName && (
            <span className="err-msg">{errors.cardName}</span>
          )}
        </div>

        <div className="input-group1">
          <label htmlFor="card-num">CARD NUMBER</label>
          <Cleave
            name="cardNum"
            id="card-num"
            className={errors.cardNum ? "input error" : "input"}
            placeholder="e.g. 1234 5678 9123 0000"
            options={{ blocks: [4, 4, 4, 4] }}
            onChange={(event) =>
              handleInputChange("cardNum", event.target.value)
            }
            value={enteredValues.cardNum}
          />
          {errors.cardNum && <span className="err-msg">{errors.cardNum}</span>}
        </div>

          
        <div className="input-group2">
          <div>
            <label htmlFor="month">Exp Month</label>
            <input
              type="text"
              name="month"
              id="month"
              className={errors.month ? "input error" : "input"}
              placeholder="MM"
              onChange={(event) =>
                handleInputChange("month", event.target.value)
              }
              value={enteredValues.month}
            />
            {errors.month && <span className="err-msg">{errors.month}</span>}
          </div>
          <div>
          <label htmlFor="year">Exp Year</label>
            <input
              type="text"
              name="year"
              id="year"
              className={errors.year ? "input error" : "input"}
              placeholder="YY"
              onChange={(event) =>
                handleInputChange("year", event.target.value)
              }
              value={enteredValues.year}
            />
            {errors.year && <span className="err-msg">{errors.year}</span>}
          </div>
          <div>
            <label htmlFor="cvc">CVC</label>

            <input
              type="text"
              name="cvc"
              id="cvc"
              className={errors.cvc ? "input error" : "input"}
              placeholder="e.g. 123"
              onChange={(event) => handleInputChange("cvc", event.target.value)}
              value={enteredValues.cvc}
            />
            {errors.cvc && <span className="err-msg">{errors.cvc}</span>}
          </div>
        </div>

        <button type="submit" className="button-confirm">
          Confirm
        </button>
      </form>
    </main>
  );
}
