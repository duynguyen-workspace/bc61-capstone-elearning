import { GROUP_CODE } from "../constants";
import fetcher from "./fetcher";

/**
 * @description
 * get all course data
 * @method
 * GET
 * @returns
 * []: courses' objects
 */
export const getCoursesApi = async () => {
  try {
    const response = await fetcher.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_CODE}`
    );
    // console.log("response: ", response)
    return response.data;
  } catch (exception) {
    throw new Error(exception);
  }
};

export const deleteCoursesAPI = async (maKH) => {
  try {
    const response = await fetcher.delete(
      `/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKH}`
    );
    return response.data;
  } catch (exception) {
    throw new Error(exception);
  }
};

// export const addCourseAPI = async (data) => {
//   try {
//     const response = await fetcher.post(`/QuanLyKhoaHoc/ThemKhoaHoc`, data);
//     return response;
//   } catch (exception) {
//     throw new Error(exception);
//     alert(exception.response.data);
//     // return exception;
//   }
// };

export const addCourseAPI = {
  addCourseAPI: (data) => {
    return fetcher.post(`/QuanLyKhoaHoc/ThemKhoaHoc`, data);
  },
  updateCourseAPI: (data) => {
    return fetcher.put(`/QuanLyKhoaHoc/CapNhatKhoaHoc`, data);
  },
};
