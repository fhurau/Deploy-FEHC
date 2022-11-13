import React from "react";
import hero from "../../src/assets/Hero.png";
import iconbtn from "../../src/assets/iconbtn.png";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div>
            <div
                style={{
                    marginTop: "10vh",
                    backgroundImage: `url(${hero})`,
                    height: "58vh",
                    width: "auto",
                    backgroundPosition: "center top",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    padding:"100px"
                }}
            >
                <Link to="/patient/consultation">
                    <button
                        style={{
                            margin: "20rem",
                            padding:"5px",
                            border: "0px",
                            backgroundColor: "white",
                            height: "80px",
                            width:"500px",
                            marginTop: "15.5rem",
                            marginLeft: "11.5rem",
                            backgroundImage: `url(${iconbtn})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "15%",
                            backgroundPosition: "left center ",
                            backgroundPositionX: "10px",
                            backgroundPositionY: "center",
                        }}
                    >
                        <span
                            style={{
                                fontWeight: "700",
                                color: "#ff6185",
                                fontSize: "20px",
                                marginLeft: "4rem",
                            }}
                            className="py-5"
                        >
                            Konsultasi dengan Dokter
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
