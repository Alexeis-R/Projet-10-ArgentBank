import React, { useState, useEffect } from "react";
import "../Css/main.css";
import Layout from "../components/Layout";
import UpdateUsernameForm from "../components/Update/updateUserForm";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../Redux/userAction";

function User() {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user?.firstName);
  const lastName = useSelector((state) => state.user?.lastName);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(getUser({ token }));
    }
  }, [dispatch, token]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseForm = () => {
    setIsEditing(false);
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
              currentUsername={`${firstName} ${lastName}`}
              onClose={handleCloseForm}
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
