import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo.png";
import Signup from "../components/modal/Sigup";
import Signin from "../components/modal/Signin";
import bgImg from "../../src/assets/Hero.png";
import iconbtn from "../../src/assets/iconbtn.png";
import Article from "../components/Article";

export default function Landing() {
    const title = "Home";
    document.title = "Halo Corona | " + title;

    const [signUpShow, setSignUpShow] = useState(false);
    const [signInShow, setSignInShow] = useState(false);

    const signInHere = (e) => {
        e.preventDefault();
        setSignInShow(false);
        setSignUpShow(true);
    };

    const signUpHere = (e) => {
        e.preventDefault();
        setSignUpShow(false);
        setSignInShow(true);
    };
    return (
        <div>
            <Navbar bg="white" expand="lg" fixed="top" style={{ height: "10vh" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={Logo} alt="Halo corona" style={{ width: "150px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <button
                            className="btnlogin me-2"
                            onClick={() => setSignUpShow(true)}
                        >
                            Sign Up
                        </button>
                        <button className="btnregist" onClick={() => setSignInShow(true)}>
                            Sign In
                        </button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div
                style={{
                    marginTop: "10vh",
                    backgroundImage: `url(${bgImg})`,
                    height: "58vh",
                    width: "auto",
                    backgroundPosition: "center top",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    padding:"100px"

                }}>
                <button
                    onClick={() => setSignInShow(true)}
                    style={{
                        margin: "20rem",
                        padding:"5px",
                        border: "0px",
                        borderRadius:"10px",
                        backgroundColor: "white",
                        height: "80px",
                        width:"500px",
                        marginTop: "15.5rem",
                        marginLeft: "11.5rem",
                        backgroundImage: `url(${iconbtn})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "15%",
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
                        Konsultasi Dengan Dokter
                    </span>
                </button>
            </div>
            <Article/>
            <Signup
                signUpHere={signUpHere}
                signUpShow={signUpShow}
                setSignUpShow={setSignUpShow}
            />
            <Signin
                signInHere={signInHere}
                signInShow={signInShow}
                setSignInShow={setSignInShow}
            />
        </div>
    );
}
