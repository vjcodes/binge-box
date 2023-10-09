import { useSelector } from "react-redux";
import "./accountsSection.scss";
import AvatarIcon from "./AvatarIcon";

const AccountsSection = ({
  setShowAddModal,
  setShowEditModal,
  setAccount,
  editAccount,
}) => {
  const data = useSelector((state) => {
    return state?.users;
  });

  const user = data[0];
  return (
    <div className="accounts-container flex-row flex--align-center flex--wrap">
      {user?.accounts?.map((account) => (
        <AvatarIcon
          account={account}
          setAccount={setAccount}
          setShowEditModal={setShowEditModal}
          editAccount={editAccount}
        />
      ))}

      {setShowAddModal && (
        <button className="add-btn" onClick={() => setShowAddModal(true)}>
          +
        </button>
      )}
    </div>
  );
};

export default AccountsSection;
