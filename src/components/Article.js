import React, { useContext } from "react";
import { Link } from "react-router-dom";
import noData from "../../src/assets/No-data.png";
import { useQuery} from "react-query";
import { API } from "../../src/config/api";
import { UserContext } from "../../src/context/userContex";

export default function Article() {
    const [state] = useContext(UserContext);

    let { data: articles} = useQuery("articlessCache", async () => {
        const response = await API.get("/articles");
        return response.data.data;
    });
    

    return (
        <>
            {articles?.length != 0 ? (
                <div>
                    <h1
                        className="text-center mt-3"
                        style={{ height: "15vh", color: "#FF6185" }}
                    >
                        Today's Article
                    </h1>
                    <div className="row d-flex justify-content-start align-items-center m-2 p-2">
                        {articles?.map((item, index) => (
                            <div className="col-md-3" key={index}>
                                <div className="card shadow p-2 mb-4" style={{ width: "auto" }}>
                                    <img
                                        src={item.image}
                                        className="card-img-top img-size"
                                        alt="Project image"
                                    />
                                    <div className="card-body">
                                        <Link
                                            to={
                                                state.user.listAs == "patient"
                                                    ? `/patient/detailarticle/${item.id}`
                                                    : state.user.listAs == "doctor"
                                                        ? `/doctor/detailarticle/${item.id}`
                                                        : `/detailarticle/${item.id}`
                                            }
                                        >
                                            <h5 className="title-article card-title">{item.title}</h5>
                                            <span className="desc card-text text-muted mb-3">
                                                {item.desc}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <h1
                        className="text-center mt-3"
                        style={{ height: "15vh", color: "#FF6185" }}
                    >
                        Today's Article
                    </h1>
                    <div className="text-center">
                        <img
                            src={noData}
                            alt=""
                            className="img-fluid"
                            style={{ width: "30%" }}
                        />
                        <div className="mb-5">No data article</div>
                    </div>
                </div>
            )}
        </>
    );
}
