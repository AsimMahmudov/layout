import React from "react";
import scss from "./Carusel.module.scss";

const Carusel = () => {
  return (
    <section className={scss.Carusel}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </section>
  );
};

export default Carusel;
