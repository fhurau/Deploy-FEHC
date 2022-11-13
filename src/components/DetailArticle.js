import React, { useState } from "react";
import { useQuery } from "react-query";
import { API } from "../../src/config/api";
import { useParams } from "react-router-dom";
import moment from "moment";

export default function DetailArticle() {
    const title = "Detail Article";
    document.title = "Halo Corona | " + title;

    let { id } = useParams();
    let { data: article } = useQuery("articleeeeCache", async () => {
        const response = await API.get("/article/" + id);
        // console.log(response);
        return response.data.data;
    });
    // console.log(article);

    return (
        <div>
            <div
                className="container p-5"
                style={{ marginTop: "10vh", marginRight: "180px" }}
            >
                <h2 className="">{article?.title}</h2>
                <small className="text-muted">
                    {moment(article?.createdAt).format("DD MMMM YYYY")}
                </small>
                <p className="mt-1">
                    Author:{" "}
                    <span style={{ color: "#FF6185" }}>Dr. {article?.user.name}</span>
                </p>
                <div className="col-md-12">
                    <div className="card shadow p-2 mb-4" style={{ width: "1000px" }}>
                        <img
                            src={article?.image}
                            className="card-img-top img-size-detail"
                            alt="Project image"
                        />
                        <div className="card-body mb-5 p-5">
                            <span>{article?.desc}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
