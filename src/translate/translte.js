import React from "react";
import "./translate.css";
import axios from "axios";
function Translate() {
  const translate = () => {
    const text = document.getElementById("textarea").value;
    const lang = document.getElementById("lang").value;
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200548T064000Z.f8f8f8f8f8f8f8f8.f8f8f8f8f8f8f8f8&text=${text}&lang=${lang}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.text);
        document.getElementById("result").innerHTML = res.data.text;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="translate">
      <h1>Translate</h1>
      <div className="translate-container">
        <div className="translate-input text-center">
          <select id="lang">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
          </select>
          <textarea
            className="textarea"
            placeholder="Type here"
            id="textarea"
          ></textarea>
          <button className="button" onClick={translate}>
            Translate
          </button>
        </div>
      </div>
      <h1>Results</h1>
      <div className="results">
        <div></div>
      </div>
    </div>
  );
}

export default Translate;
