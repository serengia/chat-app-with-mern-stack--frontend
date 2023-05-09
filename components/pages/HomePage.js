import React from "react";
import s from "./Home.module.scss";

export default function HomePage() {
  return (
    <div className={`${s["home"]}`}>
      <div className={`${s["chats-container"]} row`}>
        <div className={s["left"]}>Left</div>
        <div className={s["center"]}>center</div>
      </div>
    </div>
  );
}
