import React, { useEffect, useState } from "react";
import "./profileCard.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../store/slices/UserSlice";
import AddAccountModal from "./addAccountModal/AddAccountModal";
import AccountsSection from "../../SharedComponents/accounts-container/AccountsSection";
import { EditOutlined } from "@ant-design/icons";

const ProfileCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [account, setAccount] = useState(null);
  const [editAccount, setEditAccount] = useState(false);

  const data = useSelector((state) => {
    return state?.users;
  });

  const user = data[0];

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const getModalType = () => {
    if (showAddModal) {
      return "add";
    } else if (showEditModal) {
      return "edit";
    }
  };

  return (
    <div className="profile-card-parent-container flex-row flex--justify-center flex--align-center">
      <div className="profile-card">
        <h2>Profile</h2>
        <div>{`Email - ${user?.email}`}</div>
        <div>{`Phone number - ${user?.mobileno}`}</div>

        <div className="divider"></div>

        <div className="profile-section-headers flex-row flex--space-between flex--align-center">
          <h3>Interested Genres</h3>
          <EditOutlined
            onClick={() =>
              navigate("/user-preference", {
                state: {
                  from: "profile",
                },
              })
            }
          />
        </div>

        <div className="banner-tags flex--row">
          {user?.userPreferences?.map((pref) => (
            <button className="tags">{pref.label}</button>
          ))}
        </div>

        <div className="divider"></div>

        <div className="profile-section-headers flex-row flex--space-between flex--align-center">
          <h3>Manage Acount</h3>
          <EditOutlined onClick={() => setEditAccount(!editAccount)} />
        </div>

        <AccountsSection
          setShowAddModal={setShowAddModal}
          setShowEditModal={setShowEditModal}
          setAccount={setAccount}
          editAccount={editAccount}
        />

        <div className="divider"></div>

        <button className="logout-btn" onClick={() => dispatch(removeUser())}>
          Logout
        </button>
      </div>

      {(showAddModal || showEditModal) && (
        <AddAccountModal
          setShowModal={setShowAddModal}
          setShowEditModal={setShowEditModal}
          type={getModalType()}
          account={account}
        />
      )}
    </div>
  );
};

export default ProfileCard;
