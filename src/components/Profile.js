import React, { useContext, useState } from "react";
import patient from "../../src/assets/dropdown/patient.png";
import doctor from "../../src/assets/dropdown/doctor.png";
import name from "../../src/assets/profile/name.png";
import address from "../../src/assets/profile/address.png";
import email from "../../src/assets/profile/email.png";
import gender from "../../src/assets/profile/gender.png";
import phone from "../../src/assets/profile/phone.png";
import status from "../../src/assets/profile/status.png";
import { UserContext } from "../../src/context/userContex";
import {Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
    const title = "Profile";
    document.title = "Halo Corona | " + title;

    const [state] = useContext(UserContext);
    let navigate = useNavigate();


    return (
        <div className="profile-container">
            <div className="profile-card shadow">
                <div className="profile-desc">
                    <div className="profile-data">
                        <h2>Personal Info</h2>
                    </div>
                    <div className="profile-data">
                        <div className="profile-icon">
                            <img src={name} alt="" />
                        </div>
                        <div className="profile-details">
                            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                {state?.user?.username}
                            </span>
                            <span>Username</span>
                        </div>
                    </div>
                    <div className="profile-data">
                        <div className="profile-icon">
                            <img src={email} alt="" />
                        </div>
                        <div className="profile-details">
                            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                {state?.user?.email}
                            </span>
                            <span>Email</span>
                        </div>
                    </div>
                    <div className="profile-data">
                        <div className="profile-icon">
                            <img src={status} alt="" />
                        </div>
                        <div className="profile-details">
                            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                {state?.user?.listAs}
                            </span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className="profile-data">
                        <div className="profile-icon">
                            <img src={gender} alt="" />
                        </div>
                        <div className="profile-details">
                            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{state?.user?.gender}</span>
                            <span>Gender</span>
                        </div>
                    </div>
                    <div className="profile-data">
                        <div className="profile-icon">
                            <img src={phone} alt="" />
                        </div>
                        <div className="profile-details">
                            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                {state?.user?.phone}
                            </span>
                            <span>Mobile Phone</span>
                        </div>
                    </div>
                    <div className="profile-data">
                        <div className="profile-icon">
                            <img src={address} alt="" />
                        </div>
                        <div className="profile-details">
                            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                {state?.user?.address}
                            </span>
                            <span>Address</span>
                        </div>
                    </div>
                </div>
                <div className="profile-img">
                    {state.user.listAs == "patient" ? (
                        <img src={`http://localhost:5000/uploads/${state?.user?.image}`} alt="avatar" className="profile-avatar" />
                    ) : (
                        <img src={`http://localhost:5000/uploads/${state?.user?.image}`} alt="avatar" className="profile-avatar" />
                    )}
                    <button className="profile-button" onClick={() => navigate(`/patient/edit-profile/${state.user.id}`)}>Edit Profile</button>
                </div>
            </div>
        </div>
    );
}
