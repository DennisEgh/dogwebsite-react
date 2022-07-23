import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { auth } from "../firebase/init.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Modal() {
  const openRegister = () => {
    document.body.classList.toggle("register--open");
    document.body.classList.toggle("menu--open");
  };
  const changeToLogin = () => {
    setTimeout(() => {
      document.body.classList.remove("register--open");
      document.body.classList.add("menu--open");
    }, 7000);
  };
  const showSuccess = () => {
    let elementSuccess = document.querySelector(".success");
    elementSuccess.classList.add("success__active");
  };
  const showFail = () => {
    let elementFail = document.querySelector(".fail");
    elementFail.classList.add("fail__active");
  };
  const hideFail = () => {
    let elementFail = document.querySelector(".fail");
    elementFail.classList.remove("fail__active");
  };

  const register = () => {
    let emailValue = document.querySelector(".input__email").value;
    let passwordValue = document.querySelector(".input__password").value;

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((user) => {
        console.log(user);
      })

      .catch((error) => {
        console.log(error);
        
      });

    if (passwordValue.length >= 6) {
    
      hideFail();
      showSuccess();
      changeToLogin();
    } else {
      showFail();
    }
  };

  const login = () => {
    let emailValue = document.querySelector(".input__email-login").value;
    let passwordValue = document.querySelector(".input__password-login").value;
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className="modal__bg"
        onClick={() =>
          document.body.classList.remove("menu--open", "register--open")
        }
      ></div>

      <div className="modal__wrapper login">
        <div className="modal__container login">
          <div className="modal__log-in">
            <div className="modal__content">
              <h1 className="modal__title">LOG IN</h1>
              <FontAwesomeIcon
                onClick={() => document.body.classList.remove("menu--open")}
                icon="fa-solid fa-xmark"
              />
            </div>

            <div className="modal__forms">
              <div className="form__username">
                <FontAwesomeIcon icon="fa-solid fa-user" />
                <input
                  className="user__input input__email-login"
                  spellCheck="false"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="form__username">
                <FontAwesomeIcon icon="fa-solid fa-lock" />
                <input
                  className="user__input input__password-login"
                  spellCheck="false"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <p className="login__reset">Forgot Password?</p>
              <div className="action__container">
                <button onClick={login} className="login__btn">
                  Log In
                </button>
              </div>
              <div className="create__user--container">
                <p className="create__user">
                  Don't have an account?{" "}
                  <span onClick={openRegister} className="green">
                    Create one
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal__wrapper register">
        <div className="modal__container register">
          <div className="modal__content">
            <h1 className="modal__title">REGISTER</h1>
            <FontAwesomeIcon
              className="register--xmark"
              onClick={() => document.body.classList.remove("register--open")}
              icon="fa-solid fa-xmark"
            />
          </div>

          <div className="modal__forms">
            <div className="form__username">
              <FontAwesomeIcon icon="fa-solid fa-user" />
              <input
                className="user__input input__email"
                spellCheck="false"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="form__username">
              <FontAwesomeIcon icon="fa-solid fa-lock" />
              <input
                className="user__input input__password"
                spellCheck="false"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="action__container">
              <button onClick={register} className="login__btn">
                Register
              </button>
            </div>
            <p className="success">
              Success! Your account has been created. Switching to Log in.
            </p>
            <p className="fail">
              Your password must be at least 6 characters long. Your account has
              not been created.
            </p>
            <div className="create__user--container">
              <p className="create__user">
                Have an account?{" "}
                <span onClick={openRegister} className="green">
                  Log In
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
