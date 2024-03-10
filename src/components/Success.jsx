/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./success.css";

export default function Success({ setFormPass, setEnteredValues }) {
  function resetForm() {
    setEnteredValues({
      cardName: "",
      cardNum: "",
      month: "",
      year: "",
      cvc: "",
    });

    setFormPass(false);
  }

  return (
    <div className="message-container">
      <div className="check-mark">
        <h1>&#10003;</h1>
      </div>

      <h1 className="thank-you">THANK YOU!</h1>
      <p className="advise-note">We&#39;ve added your card details</p>
      <button className="button-continue" onClick={resetForm}>
        Continue
      </button>
    </div>
  );
}
