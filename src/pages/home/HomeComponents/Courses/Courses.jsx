import { useEffect, useState } from "react";
import "./courses.scss";
import { coursesApi } from "../../../../api/courses.api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";

// Thiết kế lại mũi tên trong react slick
const PrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div className={className} style={style} onClick={onClick}>
            <i className="fa-solid fa-angle-left"></i>
        </div>
    );
};

// Thiết kế lại mũi tên trong react slick
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={style} onClick={onClick}>
            <i className="fa-solid fa-angle-right"></i>
        </div>
    );
};

// Setting React Slick List Courses
const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const Courses = () => {
    const [courseBE, setCourseBE] = useState([]);
    console.log(courseBE);
    useEffect(() => {
        getCoursesCate("BackEnd", setCourseBE);
    }, []);

    // Hàm lấy dữ liệu Khóa học qua Danh mục
    const getCoursesCate = (cate, setState) => {
        return coursesApi
            .getCoursesByCategory(cate)
            .then((res) => {
                // console.log(res.data);
                setState(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="courses__container">
            <div className="courses__backEnd">
                <div className=" courses__title">
                    <h2 className="text-white text-5xl font-bold leading-10">
                        BackEnd
                    </h2>
                    <Link className="courses__viewAll text-[#31d7a9] font-bold text-3xl">
                        View All
                    </Link>
                </div>
                <div className="courses__item mt-14">
                    <Slider {...settings}>
                        {courseBE?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="h-56">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item.hinhAnh}
                                            alt="course"
                                        />
                                    </div>
                                    <div className="text-2xl font-bold my-4">
                                        <h3 className="line-clamp-2">
                                            {item.tenKhoaHoc}
                                        </h3>
                                    </div>
                                    <div className="flex">
                                        <div>
                                            <i className="fa-regular fa-user"></i>
                                            <span>
                                                {item.soLuongHocVien} Students
                                            </span>
                                        </div>
                                        <span className="mx-6">|</span>
                                        <div>
                                            <i className="fa-regular fa-clock"></i>
                                            <span>{item.ngayTao}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
            <div className="courses__design"></div>
            <div className="courses__didong"></div>
            <div className="courses__frontEnd"></div>
            <div className="courses__fullStack"></div>
            <div className="courses__tuDuy"></div>
        </div>
    );
};

export default Courses;
