/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./success.css";

export default function Success({
  setFormPass,
  setEnteredValues,
  setFocusStatus,
  setTouched,
}) {
  function resetForm() {
    setEnteredValues({
      cardName: "",
      cardNum: "",
      month: "",
      year: "",
      cvc: "",
    });

    setFormPass(false);

    setFocusStatus({
      numField: false,
      nameField: false,
      monthField: false,
      yearField: false,
      cvcField: false,
    });

    setTouched({
      numField: false,
      nameField: false,
      monthField: false,
      yearField: false,
      cvcField: false,
    });
  }

  return (
    <section className="message-container">
      <div className="check-mark">
        <h1>&#10003;</h1>
      </div>

      <h1 className="thank-you">THANK YOU!</h1>
      <p className="advise-note">We&#39;ve added your card details</p>
      <button className="button-continue" onClick={resetForm}>
        Continue
      </button>
    </section>
  );
}
