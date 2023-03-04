import axios from 'axios'
import { history } from '../../App';
import { ACCESS_TOKEN, TOKENCYBER, URL_API, USERLOGIN } from '../../util/setting'


// Action loại 2: function
// Cần truyền tham số => Trả về 1 hàm chưa được gọi
// dispatch cần truyền vào hàm chưa được gọi
export const dangKyAction = (userInfo) => {
    // dispatch2: hàm thư viện thunk hỗ trợ để đưa data từ API lên redux
    return (dispatch2) => {
        // Xử lý call API đăng ký
        // input: userInfo (dữ liệu người dùng) => dữ liệu cần truyền từ form UI

        let promise = axios({
            url: `${URL_API}/QuanLyNguoiDung/DangKy`,
            method: "post",
            data: userInfo,
            headers: {
                "TokenCybersoft": TOKENCYBER
            }
        });

        promise.then((result) => {
            console.log(result.data);
            // Nếu cần đưa data từ API lên redux thì gọi dispatch2

            //TODO: Nếu thành công thì thông báo và chuyển hướng người dùng sang Login
            alert("Đăng ký thành công !");

            // Cài thêm thư viện history để hỗ trợ các file không phải component
            history.push("/login");
        });
        promise.catch((errors) => {
            console.log(errors.response?.data);
        })
    }
}

 // action liên quan về người dùng
export const dangNhapAction = (userInfo) => {
    // dispatch2: hàm thư viện thunk hỗ trợ để đưa data từ API lên redux
    return (dispatch2) => {
        // Xử lý call API đăng ký
        // input: userInfo (dữ liệu người dùng) => dữ liệu cần truyền từ form UI

        let promise = axios({
            url: `${URL_API}/QuanLyNguoiDung/DangNhap`,
            method: "post",
            data: userInfo,
            headers: {
                "TokenCybersoft": TOKENCYBER
            }
        });

        promise.then((result) => {
            console.log(result);
            // Lưu xuống localStorage
            localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);

            let userInfo = JSON.stringify(result.data.content);

            localStorage.setItem(USERLOGIN, userInfo);

            let action = {
                type: 'LOGIN',
                uLogin: userInfo
            }
            dispatch2(action);
        });
        promise.catch((errors) => {
            console.log(errors.response?.data);
        })
    }
}