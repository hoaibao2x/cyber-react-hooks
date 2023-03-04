import { LAY_DS_PHIM } from "../type/phimType";

const initialState = {
    mangPhim: [
        // Test
        // {
        //     maPhim: 4416,
        //     tenPhim: "cuộc sống muôn màu",
        //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-song-muon-mau_gp05.jpg",
        //     moTa: "Bộ phim nói về cuộc sống thường ngày với muôn ngàn sắc thái khác cảm xúc khác nhau của con người"
        // }
    ]
}


export const phimReducer = (state = initialState, action) => {
    switch (action.type) {

        case LAY_DS_PHIM:
            // console.log(action.mangPhim);
            state.mangPhim = action.mangPhim;
            return { ...state }

        default:
            return state
    }
}
