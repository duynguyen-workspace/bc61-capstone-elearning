import { useEffect, useState } from "react";
import { coursesApi } from "../../api/courses.api.js";
import { useParams } from "react-router-dom";
import "./courseItem.scss";

const CourseItem = () => {
    const { courseCategory } = useParams();
    // console.log(courseCategory);
    const [arrCourses, setArrCourses] = useState([]);
    console.log(arrCourses);
    useEffect(() => {
        coursesApi
            .getCoursesByCategory(courseCategory)
            .then((res) => {
                // console.log(res);
                setArrCourses(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [courseCategory]);
    return (
        <div className="courseItem__container">
            <div className="courseItem__banner">
                <div className="courseBanner__item">
                    <div className="courseBanner__title">{courseCategory}</div>
                    <hr className="mt-0 mb-4" />
                </div>
            </div>
            <div className="courseItem__item">
                <div className="courseItem__title">
                    <h3>{courseCategory}</h3>
                    <div className="flex items-center">
                        <div>
                            <i className="fa-solid fa-book-open"></i>
                            <span>3+ Free Courses</span>
                        </div>
                        <div>
                            <i className="fa-regular fa-user"></i>
                            <span>200+ Student</span>
                        </div>
                    </div>
                </div>
                <div className="course__show"></div>
            </div>
        </div>
    );
};

export default CourseItem;
