import React, { useState } from "react";
import "./Secimler.css";

function Secimler() {
  let secimler = ["das", "kagiz", "qayci"];
  const [adam, setAdam] = useState("qayci");

  let index = Math.floor(Math.random() * 3);
  let robotunSecimi = secimler[index];

  let netice;
  if (adam === robotunSecimi) {
    netice = "Beraberlik!!";
  } else if (
    (adam == "qayci" && robotunSecimi == "kagiz") ||
    (adam == "das" && robotunSecimi == "qayci") ||
    (adam == "kagiz" && robotunSecimi == "das")
  ) {
    netice = "Siz Qalib Geldiniz!!";
  } else {
    netice = "Robot Qalib Geldi!!";
  }

  return (
    <div>
      <h1>Oyun Xos Gelmisiz</h1>
      <div className="das btn" onClick={() => setAdam("das")}>
        Das
      </div>
      <div className="qayci btn" onClick={() => setAdam("qayci")}>
        Qayci
      </div>
      <div className="kagiz btn" onClick={() => setAdam("kagiz")}>
        Kagiz
      </div>
      <div>Sizin Seciminiz: {adam}</div>
      <div className="vs">Vs</div>
      <div className="robotunSecimi">Robotun Secimi: {robotunSecimi}</div>
      <h1 className="qazanan">{netice} </h1>
    </div>
  );
}

export default Secimler;
