import React, { useState } from "react";
import "./addAccountModal.scss";
import InputField from "../../../SharedComponents/inputField/InputField";
import uploadAvatar from "../../../assets/profile/uploadAvatar.svg";
import { useDispatch } from "react-redux";
import { addAccount, editAccount } from "../../../store/slices/UserSlice";
import { preferences } from "../../preferenceCardParent/constants";
import { v4 as uuidv4 } from "uuid";

const AddAccountModal = ({ setShowModal, setShowEditModal, type, account }) => {
  console.log(type);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    id: uuidv4(),
    name: "",
    language: "",
    genres: "",
  });

  const [editValues, setEditValues] = useState({
    id: account?.id,
    name: account?.name,
    language: account?.language,
    genres: account?.genres,
  });

  console.log(editValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "add") {
      dispatch(addAccount(values));
    } else if (type === "edit") {
      dispatch(editAccount(editValues));
    }

    setShowModal(false);
    setShowEditModal(false);
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setEditValues({
      ...editValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="add-modal-container flex-column flex--align-center">
        <h4>{`${type === "add" ? "Add" : "Edit"} Account`}</h4>
        <div className="form-container flex-row flex--space-between">
          <div className="avatar-container flex-row flex--justify-center">
            <img src={uploadAvatar} alt="upload-avatar" />
          </div>
          <div className="vertical-divider" />
          <form onSubmit={handleSubmit} className="input-field-container">
            <InputField
              type="text"
              name="name"
              placeholder="Name"
              errorMessage="name should be 3-16 characters and shouldn't include any special character!"
              pattern="^[A-Za-z0-9]{3,16}$"
              required={true}
              onChange={onChange}
              defaultValue={type === "edit" ? editValues?.name : null}
            />

            <select
              name="language"
              onChange={onChange}
              required
              defaultValue={type === "edit" && editValues?.language}
            >
              <option value="">Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>

            <select
              name="genres"
              onChange={onChange}
              required
              defaultValue={type === "edit" && editValues?.genres}
            >
              <option>Genre</option>
              {preferences.map((item) => (
                <option value={item.label}>{item.label}</option>
              ))}
            </select>

            <div className="btn-container flex-row flex--justify-end">
              <button>{type === "add" ? "Add Account" : "Save"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAccountModal;
