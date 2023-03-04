import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import { TOKENCYBER, URL_API } from '../../util/setting';
import { useEffect } from 'react';
import { LAY_DS_PHIM } from '../../redux/type/phimType';
import { laydanhSachPhimAction } from '../../redux/action/phimAction';

function ApiMiddleWare() {

  /**
   * 1. Khai báo reducer cho nghiệp vụ Phim
   * 2. Kết nối API => Mảng phim
   *    hàm getAPI
   *    lifecycle didmount => useEffect(, [])
   * 3. dispatch mảng phim => phimReducer
   */

  let { mangPhim } = useSelector(state => state.phimReducer);
  // console.log(mangPhim);

  let dispatch = useDispatch();

  useEffect(() => {
    getAPI()
  }, []) // Didmount

  let renderPhim = () => {
    return mangPhim.map((phim) => {
      return <div className="col-md-3" key={phim.maPhim}>
        <div className="card">
          <img src={phim.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phim.tenPhim}</h5>
            <p className="card-text">{phim.moTa}</p>
          </div>
        </div>

      </div>
    })
  }

  let getAPI = () => {

    /**
     * Tổ chức action creator => Tạo action loại function
     * Nếu action có call API thì sẽ đem toàn bộ code API sang file action => Bị bất đồng bộ
     * 
     *? Middleware => Xử lý bất đồng bộ giữa API và dispatch data lên redux + tổ chức theo action creator 
     * 
     * Middleware (redux-thunk, redux saga)
     * => Sinh ra 2 hàm dispatch cho redux
     * => dispatch1 gọi call API => Chờ cho đến khi lấy được data
     * => dispatch2 đẩy data lên redux
     */

    //? Hàm call API
    // let action = laydanhSachPhimAction("maPhim"); // Gọi hàm mà không thông qua dispatch
    
    // Nhận kết quả trả về là hàm chưa gọi
    let action = laydanhSachPhimAction("GP04");

    dispatch(action); //Gọi hàm call API
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Demo API Redux</h2>
      <div className="row">
        {renderPhim()}
      </div>
    </div>
  )
}

export default ApiMiddleWare