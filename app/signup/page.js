"use client";

import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/utils";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import s from "./signup.module.scss";

export default function login() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPassCon, setShowPassCon] = useState(false);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    console.log(email, password, passwordConfirm);
    if (!email || !password || !passwordConfirm) return;

    try {
      const res = await axios({
        method: "post",
        url: `${API_BASE_URL}/signup`,
        withCredentials: true,
        data: {
          name,
          email,
          password,
          passwordConfirm,
        },
      });

      console.log("Res:", res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={s["signup-page"]}>
      <div className={`${s["signup-wrapper"]} row`}>
        <h2>Sign up</h2>
        <form onSubmit={submitHandler} className={s["form"]}>
          <input type="name" name="name" placeholder="Your Full Name" />
          <input type="email" name="email" placeholder="Enter your email" />
          <div className={s["input-group--pass"]}>
            <input
              type={showPass ? "password" : "text"}
              name="password"
              placeholder="Password"
              className={s["password"]}
            />
            <span
              className={s["pass-toggle"]}
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass && <BsEyeSlash className={s["icon"]} />}
              {!showPass && <BsEye className={s["icon"]} />}
            </span>
          </div>
          <div className={s["input-group--pass"]}>
            <input
              type={showPass ? "password" : "text"}
              name="passwordConfirm"
              placeholder="Confirm password"
            />
            <span
              className={s["pass-toggle"]}
              onClick={() => setShowPassCon((prev) => !prev)}
            >
              {showPassCon && <BsEyeSlash className={s["icon"]} />}
              {!showPassCon && <BsEye className={s["icon"]} />}
            </span>
          </div>
          <button type="submit">
            {loading ? <BeatLoader color="#fff" /> : "Signup Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
