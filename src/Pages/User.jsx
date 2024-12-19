import React, { useState, useEffect } from "react";
import "../Css/main.css";
import Layout from "../components/Layout";
import UpdateUsernameForm from "../Components/Update/updateUserForm";
import { useSelector, useDispatch } from "react-redux";
import { getUser, editUser } from "../Redux/userAction";
import { logoutAction } from "../Redux/authAction";

function User() {
  // Gestion de l'etat de l'edition du nom
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  const token = useSelector((state) => state.auth.token);

  // Recuperes les donnée de l utilisateur ( firstName et lastName )
  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        await dispatch(getUser({ token }));
      }
    };

    fetchUserData();
  }, [dispatch, token]);

  // Surveille les chagements de firstName et lastName
  useEffect(() => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  }, [firstName, lastName]);

  // Fonction pour afficher le formulaire
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Fonction pour fermer le formulaire
  const handleCloseForm = () => {
    setIsEditing(false);
  };

  // Fonction pour soumettre les nouvelles données
  const handleSave = (newFirstName, newLastName) => {
    dispatch(
      editUser({ token, firstName: newFirstName, lastName: newLastName })
    );
    setIsEditing(false);
  };

  // Fonction pour déconnecter l'utilisateur
  const handleSignOut = () => {
    dispatch(logoutAction());
  };

  return (
    <Layout>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
          {isEditing && (
            <UpdateUsernameForm
              currentUsername={firstName}
              onClose={handleCloseForm}
              handleSave={handleSave}
            />
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default User;
