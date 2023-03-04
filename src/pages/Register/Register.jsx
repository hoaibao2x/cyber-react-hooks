import React from 'react';
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GP_ID } from '../../util/setting';
import { dangKyAction } from '../../redux/action/QLNDAction';

export default function Register() {

  const dispatch = useDispatch();

  const formik = useFormik({
    // Giá trị khởi tạo (data cần lưu trữ)
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',  
      soDt: '',
      hoTen: '',
      maNhom: GP_ID
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản không được để trống !"),
      matKhau: Yup.string().required("Mật khẩu không được để trống !"),
      email: Yup.string().required("Email không được để trống !").email("Email chưa đúng định dạng !"),
      hoTen: Yup.string().required("Họ tên không được để trống !").matches(/^[A-Z a-z]+$/, "Họ tên không đúng định dạng !")
    }),
    onSubmit: values => {
      console.log(values);

      // Gọi dispatch đưa dữ liệu cho dangKyAction
      let action = dangKyAction(values);

      // dispatch1: Giúp gọi hàm API
      dispatch(action);
    },
  });

  return (
    <div className='container my-5'>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.taiKhoan}
            type="text"
            className="form-control"
            name="taiKhoan"
            placeholder="Tài khoản" />
          {/* Thông báo lỗi */}
          {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
            <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.matKhau}
            type="password"
            className="form-control"
            name="matKhau"
            placeholder="Mật khẩu" />
          {formik.touched.matKhau && formik.errors.matKhau ? (
            <div className='alert alert-danger'>{formik.errors.matKhau}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.hoTen}
            type="text"
            className="form-control"
            name="hoTen"
            placeholder="Họ tên" />
          {formik.touched.hoTen && formik.errors.hoTen ? (
            <div className='alert alert-danger'>{formik.errors.hoTen}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.soDt}
            type="text"
            className="form-control"
            name="soDt"
            placeholder="Số điện thoại" />
        </div>
        <div className="form-group">
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
            className="form-control"
            name="email"
            placeholder="Email" />
          {formik.errors.email ? (
            <div className='alert alert-danger'>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <button className='btn btn-success'>Đăng ký</button>
        </div>
      </form>
    </div>
  )
}
