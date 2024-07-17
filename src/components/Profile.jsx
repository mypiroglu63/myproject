import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProfileData } from "../redux/actions";
import "../css/Profile.css";

const fetchProfile = async () => {
  const { data } = await axios.get(
    "https://662d5eb7a7dda1fa378a7b67.mockapi.io/Profil/1"
  );
  return data;
};

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const language = useSelector((state) => state.language);

  const { data, error, isLoading } = useQuery("profile", fetchProfile);

  React.useEffect(() => {
    if (data) {
      dispatch(setProfileData(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="profile">
      <h2>{language === "en" ? "Profile" : "Profil"}</h2>
      <div className="profile-content">
        <div className="profile-left">
          <h3 className="profile-item">
            {language === "en" ? "Profile" : "Profil"}
          </h3>
          <p>
            {language === "en" ? "Date of Birth:" : "Doğum Tarihi:"}{" "}
            {profile.tarih}
          </p>
          <p>
            {language === "en" ? "City:" : "Şehir:"} {profile.city}
          </p>
          <p>
            {language === "en" ? "Education:" : "Eğitim:"} {profile.egitim}
          </p>
          <p>
            {language === "en" ? "Preferred Role:" : "Tercih Edilen Rol:"}{" "}
            {profile.role}
          </p>
        </div>
        <div className="profile-right">
          <h3 className="profile-item">
            {language === "en" ? "About Me" : "Hakkımda"}
          </h3>
          <p>
            {profile.yazi ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat vitae arcu tincidunt vehicula."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
