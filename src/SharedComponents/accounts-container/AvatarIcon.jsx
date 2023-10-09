import { Avatar } from "antd";
import { getRandomColor } from "../../utilities";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import "./accountsSection.scss";

const AvatarIcon = ({ account, setAccount, setShowEditModal, editAccount }) => {
  return (
    <div className="accounts flex-column flex--align-center">
      <div className="parent-box">
        {editAccount && (
          <div
            onClick={() => {
              setAccount && setAccount(account);
              setShowEditModal && setShowEditModal(true);
            }}
            className="avatar-wrapper flex-row flex--justify-center flex--align-center"
            data-testid="avatar-box"
          >
            <EditOutlined />
          </div>
        )}
        <Avatar
          style={{
            backgroundColor: getRandomColor(),
            margin: "1%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<UserOutlined />}
        />
      </div>

      <div>{account?.name}</div>
    </div>
  );
};

export default AvatarIcon;
