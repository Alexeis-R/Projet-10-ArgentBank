import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../Redux/userAction";

const UpdateUsernameForm = ({ currentUsername, onClose }) => {
  // État du nom d'utilisateur
  const [username, setUsername] = useState(currentUsername);
  const dispatch = useDispatch();
  // Recupere le token
  const token = useSelector((state) => state.auth.token);

  // Gestion du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi les modicication avec le token
    dispatch(editUser({ token, userName: username }));
    // Ferme le formulaire
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
