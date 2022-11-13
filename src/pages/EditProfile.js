import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { API } from "../../src/config/api";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";

export default function EditProfile() {
    const title = "Edit Profile";
    document.title = "Hallo Corona | " + title;

    let navigate = useNavigate();
    const { id } = useParams();

    const regGender = [
        {
            value: "",
            text: "-- Choose an option --",
        },
        {
            value: "male",
            text: "Male",
        },
        {
            value: "female",
            text: "Female",
        },
    ];

    const [preview, setPreview] = useState(null);
    const [profile, setProfile] = useState({});

    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        address: "",
    });

    let { data: profileRefetch } = useQuery("profileeeeeeeCache", async () => {
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.token,
            },
        };
        const response = await API.get("/user/" + profileRefetch.id, config);
        setForm({
            name: response.data.data.name,
            username: response.data.data.username,
            email: response.data.data.email,
            gender: response.data.data.gender,
            phone: response.data.data.phone,
            image: response.data.data.image,
            address: response.data.data.address,
        });
        setProfile(response.data.data);
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value,
        });
        if (e.target.type === "file") {
            setPreview(e.target.files);
        }
    };


    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const formDataa = new FormData();
            formDataa.set("name", form.name);
            if (preview) {
                formDataa.set("image", preview[0], preview[0]?.name);
            }
            formDataa.set("username", form.username);
            formDataa.set("email", form.email);
            formDataa.set("phone", form.phone);
            formDataa.set("address", form.address);
            formDataa.set("gender", form.gender);

            const response = await API.patch(`/user/${id}`,formDataa,config);
            // console.log(response);
            navigate("/patient/profile");
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <div>
            <div
                className="container p-5"
                style={{ marginTop: "10vh", marginRight: "300px" }}
            >
                <h2 style={{ color: "#FF6185", fontWeight: "700" }}>Edit Profile</h2>
            </div>
            <div className="container" style={{ marginRight: "300px" }}>
                <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                <Form.Group className="mb-3">
                        <Form.Label className="label">Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                <Form.Group className="mb-3">
                        <Form.Label className="label">User Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        {!preview ? (
                            <div>
                                <img
                                    src={form.image}
                                    alt={preview}
                                    // style={{
                                    //     width: "500px",
                                    //     height: "500px",
                                    //     objectFit: "cover",
                                    // }}
                                />
                            </div>
                        ) : (
                            <div>
                                <img
                                    src={URL.createObjectURL(preview[0])}
                                    alt=""
                                    style={{
                                        width: "500px",
                                        height: "500px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        )}
                        <Form.Label for="image" className="label">
                            Upload Image
                        </Form.Label>
                        <Form.Control
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleChange}
                        />
                        <Form.Text>Max size: 2MB</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="label">Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="label">Phone</Form.Label>
                        <Form.Control
                            type="number"
                            name="phone"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="label">Gender</Form.Label>
                        <Form.Select  onChange={handleChange} name="gender">
                            {regGender.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.text}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="label">Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-center align-items-center mb-5 mt-4">
                        <Button
                            style={{
                                background: "#ff6185",
                                border: "1px solid #ff6185",
                                height: "35px",
                                width: "15rem",
                                fontWeight: "700",
                            }}
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
