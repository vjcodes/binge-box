import { useEffect } from "react";
import Header from "../../SharedComponents/Header/Header";
import SideNavbar from "../../SharedComponents/side-navbar/SideNavbar";
import ProfileCard from "../../components/profilePage/ProfileCard";
import "./profilePage.scss";

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="profile-page-parent-container">
      <Header />
      <div>
        <SideNavbar activeTab="profile" />
        <ProfileCard />
      </div>
    </div>
  );
};

export default ProfilePage;
