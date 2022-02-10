import React from "react";
import img from "../../images/profile1.png";

const ProfilePhoto = () => {
  return (
    <>
      <div className="profilePhotoContainer">
        <div className="background"></div>
        <div className="center">
          <div className="img-container">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePhoto;
