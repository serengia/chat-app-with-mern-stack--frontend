"use client";

import React from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function Header() {
  const pathname = usePathname();
  const res = useSelector((state) => state.auth);
  console.log("USER,,", res);

  return (
    <header className={s["header"]}>
      <div className={`${s["header-container"]} row`}>
        <h2>Chat app</h2>
        <ul className={s["nav-list"]}>
          <li>
            <Link
              href={"/"}
              className={`${pathname === "/" ? s["active"] : ""}`}
            >
              Home
            </Link>{" "}
          </li>
          <li>
            <Link
              href={"/login"}
              className={`${pathname === "/login" ? s["active"] : ""}`}
            >
              Login
            </Link>{" "}
          </li>
          <li>
            <Link
              href={"/signup"}
              className={`${pathname === "/signup" ? s["active"] : ""}`}
            >
              Signup
            </Link>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
}
