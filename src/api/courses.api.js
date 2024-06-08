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
        console.log("response: ", response)
        return response.data;
    } catch (exception) {
        throw new Error(exception);
    }
};
