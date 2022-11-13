import React, { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../src/assets/logo.png";
import Doctor from "../../src/assets/dropdown/doctor.png";
import Profile from "../../src/assets/dropdown/profile.png";
import Article from "../../src/assets/dropdown/article.png";
import LogoutIcon from "../../src/assets/dropdown/logout.png";
import { UserContext } from "../../src/context/userContex";
import ListArticle from "../../src/assets/article.png";

export default function NavbarDoctor() {
    const [state, dispatch] = useContext(UserContext);
    // console.log("aaaaa",state);

    let navigate = useNavigate();

    const logout = () => {
        dispatch({
            type: "LOGOUT",
        });
        navigate("/");
    };
    return (
        <div>
            <Navbar bg="white" expand="lg" fixed="top" style={{ height: "10vh" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/doctor">
                        <img src={Logo} alt="Halo corona" style={{ width: "150px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav style={{ marginRight: "5%" }}>
                            <NavDropdown
                                title={
                                    <img
                                        className="rounded-circle"
                                        src={`http://localhost:5000/uploads/${state?.user?.image}`}
                                        alt="User"
                                        style={{ width: "50px", height:"50px", objectFit:"cover" }}
                                    />
                                }
                                id="nav-dropdown"
                            >
                                <NavDropdown.Item
                                    bg="dark"
                                    variant="dark"
                                    as={Link}
                                    to="/doctor/profile"
                                >
                                    <img
                                        src={Profile}
                                        alt="icon"
                                        style={{ width: "25px", marginRight: "5px" }}
                                    />
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    bg="dark"
                                    variant="dark"
                                    as={Link}
                                    to="/doctor/list-article"
                                >
                                    <img
                                        src={ListArticle}
                                        alt="icon"
                                        style={{ width: "25px", marginRight: "5px" }}
                                    />
                                    List Article
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/doctor/add-article">
                                    <img
                                        src={Article}
                                        alt="icon"
                                        style={{ width: "25px", marginRight: "5px" }}
                                    />
                                    Add Article
                                </NavDropdown.Item>
                                <NavDropdown.Divider
                                    style={{ backgroundColor: "grey", color: "white" }}
                                />
                                <NavDropdown.Item onClick={logout}>
                                    <img
                                        src={LogoutIcon}
                                        alt="icon"
                                        style={{ width: "25px", marginRight: "5px" }}
                                    />
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
