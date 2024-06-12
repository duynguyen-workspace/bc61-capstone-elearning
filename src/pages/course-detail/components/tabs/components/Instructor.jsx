import React from "react";
import ImgAvt from "../../../../../../public/image/avt.jpg";

function Instructor() {
  return (
    <div>
      {/* avatar */}
      <div className="flex flex-col items-center mb-5">
        <div>
          <img
            src={ImgAvt}
            alt=""
            className="h-[110px] w-[110px] rounded-[50%]"
          />
        </div>
        <div className="text-white text-[20px]">
          <p>Robert Ngô Ngọc</p>
        </div>
        <div className="text-[#8E88A8] text-[14px]">
          <p>Teacher</p>
        </div>
      </div>
      {/* Review */}
      <div className="border-2 border-solid border-[#1F3064] p-7">
        {/* Lĩnh vực */}
        <div className="flex gap-3 items-center mb-5">
          <div>
            <i className="fa-solid fa-graduation-cap text-[50px] text-[#40B293]"></i>
          </div>
          <div>
            <div className="text-white text-[14px]">
              <p>Lập trình di động</p>
            </div>
            <div className="text-[#8E88A8] text-[12px]">
              <p>Lĩnh vực</p>
            </div>
          </div>
        </div>
        {/* đánh giá */}
        <div>
          <div className="flex gap-2">
            <div className="text-white text-[60px]">5</div>
            {/* Sao  */}
            <div className="flex flex-col justify-center">
              <div className="text-[#FFB60C] text-[16px] flex gap-1">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="text-white text-[14px]">
                <p>100 đánh giá</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
