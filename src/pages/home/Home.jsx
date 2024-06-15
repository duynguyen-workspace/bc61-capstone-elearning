import React, { useEffect } from "react";
import { getCoursesApi } from "../../api/courses.api";
import HomeBanner from "./HomeComponents/Banner/HomeBanner";
import Category from "./HomeComponents/Category/Category";
import "./home.scss";
const Home = () => {
    // useEffect(() => {
    //     getCoursesApi()
    //         .then((res) => console.log("courses data: ", res))
    //         .catch((err) => console.log("error: ", err));
    // }, []);

    return (
        <section className="home">
            <HomeBanner />
            <Category />
        </section>
    );
};

export default Home;
