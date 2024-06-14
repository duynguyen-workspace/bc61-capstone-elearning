import "./homeBanner.scss";

const HomeBanner = () => {
    return (
        <div className="banner__container">
            <div className="banner__bg"></div>
            <div className="banner__content">
                <p className="text-2xl text-gray-300 mb-3">
                    Professional & Lifelong Learning
                </p>
                <h1>
                    <span className="text-[#31D7A9]"> Online Courses</span>
                    <br />
                    <span>With Certificates & Diplomas </span>
                </h1>
                <form>
                    <input
                        type="text"
                        placeholder="What do you want to learn?"
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
        </div>
    );
};

export default HomeBanner;
