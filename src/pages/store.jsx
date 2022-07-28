import React, { useEffect, useState } from "react";
import { auth } from "../firebase/init.js";
import { onAuthStateChanged } from "firebase/auth";
import Storepara from "../components/ui/storepara";
import { dogfoods } from "../data.js";

const Store = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
        }
        if (!user) {
          setUser();
        }
      },
      []
    );
  });

  function openLogIn() {
    document.body.classList.toggle("menu--open");
  }
  return (
    <>
      {user ? (
        <>
          <Storepara dogfood={dogfoods} />
        </>
      ) : (
        <>
          <div id="no__user">
            <button className="alert" onClick={openLogIn}>
              Please create an account to access our store
            </button>
          </div>
          <Storepara dogfood={dogfoods} />
        </>
      )}
    </>
  );
};

export default Store;
