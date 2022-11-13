import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo.png";
import Signup from "../../src/components/modal/Sigup";
import Signin from "../../src/components/modal/Signin";
import DetailArticle from "../../src/components/DetailArticle";

export default function DetailArticleAuth() {
    const title = "Detail Article";
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
            <DetailArticle />
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
