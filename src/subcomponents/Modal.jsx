import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Modal() {
  return (
    <>
      <div
        className="modal__bg"
        onClick={() => document.body.classList.remove("menu--open")}
      ></div>
      <div className="modal__wrapper">
        <div className="modal__container">
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
                className="user__input"
                spellCheck="false"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="form__username">
            <FontAwesomeIcon icon="fa-solid fa-lock" />
              <input
                className="user__input"
                spellCheck="false"
                type="password"
                placeholder="Password"
              />
            
            </div>
            <p className="login__reset">Forgot Password?</p>
            <div className="action__container">

            <button className="login__btn">
              Log In
            </button>
            </div>
            <div className="create__user--container">

          <p className="create__user">Don't have an account? <span className="green">Create one</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
