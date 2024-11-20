import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../actions/userActions";

const UpdateUsernameForm = ({ currentUsername, onClose }) => {
  const [username, setUsername] = useState(currentUsername);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ token, userName: username }));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Nouveau nom d'utilisateur :</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Mettre à jour</button>
      <button type="button" onClick={onClose}>
        Annuler
      </button>
    </form>
  );
};

export default UpdateUsernameForm;
