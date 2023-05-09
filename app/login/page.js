"use client";

import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL, logInLocalHandler } from "@/utils";
import s from "./login.module.scss";
import { BeatLoader } from "react-spinners";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { authActions } from "@/redux/authSlice";

export default function login() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    if (!email || !password) return;

    try {
      const res = await axios({
        method: "post",
        url: `${API_BASE_URL}/login`,
        withCredentials: true,
        data: {
          email,
          password,
        },
      });

      console.log("Res:", { res });
      setLoading(false);
      logInLocalHandler(res.data);
      dispatch(authActions.logIn({ data: res.data }));
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={s["login-page"]}>
      <div className={`${s["login-wrapper"]} row`}>
        <h2>Login</h2>
        <form onSubmit={submitHandler} className={s["form"]}>
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
          <button type="submit">
            {loading ? <BeatLoader color="#fff" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
