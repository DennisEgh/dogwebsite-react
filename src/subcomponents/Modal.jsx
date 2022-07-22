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
          <div className="modal__header">
            <h1 className="modal__title">LOGIN</h1>
            <FontAwesomeIcon
              onClick={() => document.body.classList.remove("menu--open")}
              icon="fa-solid fa-xmark"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
