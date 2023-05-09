import React from "react";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s["footer"]}>
      <div className={`${s["footer-container"]} row`}>
        <h4>Footer</h4>
      </div>
    </footer>
  );
}
