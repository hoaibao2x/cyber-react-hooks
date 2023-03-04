import axios from "axios";
import { URL_API } from "../../util/setting";
import { TOKENCYBER } from "../../util/setting";
import { LAY_DS_PHIM } from "../type/phimType";

export const laydanhSachPhimAction = (maNhom = "GP01") => {
    // Trả về hàm chưa gọi
    return (dispatch2) => {
        let promise = axios({
            method: 'get',
            url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
            headers: {
                "TokenCybersoft": TOKENCYBER
            }
        });

        promise.then((result) => {
            // console.log(result.data);
            let action2 = {
                type: LAY_DS_PHIM,
                mangPhim: result.data.content
            }

            dispatch2(action2); // Đẩy dữ liệu lên redux
        });

        promise.catch((error) => {
            console.log(error);
        });
    }
}