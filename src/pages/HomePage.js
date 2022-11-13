import React from "react";
import Hero from "../../src/components/Hero";
import Article from "../../src/components/Article";

function HomePage() {
    const title = "Home";
    document.title = "Halo Corona | " + title;
    return (
        <div>
            <Hero/>
            <Article />
        </div>
    );
}

export default HomePage;
