import React from 'react'
import { useState } from 'react'
import { Prompt } from 'react-router-dom';

// router => props history, match

export default function Login(props) {

  // Nếu log thành công => chuyển sang trang home
  // Ngược lại ko chuyển đi và thông báo lỗi

  // Lấy dữ liệu từ form
  let [userAccount, setUserAccount] = useState({
    username: "",
    password: "",
    isLeaveForm: true
  });

  let handleInput = (e) => {
    let { id, value } = e.target;
    // console.log(id, value);
    setUserAccount({
      ...userAccount,
      [id]: value
    });
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(userAccount);

    if (userAccount.username === "user01") {
      
      // Đăng nhập thành công
      // Thư viện router tự thêm vào props
      // push(): Chuyển về component khác theo url

      // API => Login => Home
      return props.history.push("/home");

      // API => Login(Home) (Ghi đè lịch sử duyệt web)
      // return props.history.replace("/home");
    }

    alert("Tài khoản hoặc mật khẩu không đúng !");
  }

  return (
    <div className='loginForm'>
      <form onSubmit={handleSubmit} className='my-5'>
        <div className="form-group">
          <input onChange={handleInput} type="text" className="form-control" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <input onChange={handleInput} type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <button className='btn btn-success'>Login</button>
          <button onClick={() => {
            props.history.goBack();
          }} type='button' className='btn btn-secondary ml-3'>Go Back</button>
        </div>
      </form>
      <Prompt when={userAccount.isLeaveForm} message={(location) => {
        return "Bạn có chắc muốn rời khỏi trang"
      }} />
    </div>
  )
}
