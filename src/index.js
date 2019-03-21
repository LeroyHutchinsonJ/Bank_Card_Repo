import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var CreditCard = ({ cardInfo }) => {
  var { name, expDate, cardNumber, bankName } = cardInfo;

  return (
    <div className="Card">
      <div className="bankName">
        <b>{bankName}</b>
      </div>

      <div className="cardNumber">{cardNumber}</div>

      <div className="validThru">
        <div>VALID</div>
        <div>THRU</div>
      </div>

      <div className="expDate">{expDate}</div>
      <div className="personName">{name}</div>
    </div>
  );
};

var Jonah = {
  name: "Jonah Banks",
  expDate: "21/22",
  cardNumber: "1235 2324 5321 6342",
  bankName: "Trust Me United"
};

const rootElement = document.getElementById("root");
ReactDOM.render(<CreditCard cardInfo={Jonah} />, rootElement);
