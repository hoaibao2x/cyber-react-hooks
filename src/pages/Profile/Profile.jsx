import React from 'react'
import { Redirect } from 'react-router-dom'

function Profile() {

    // Nếu người dùng đã đăng nhập (có access_token) thì cho phép vào trang profile
    // Ngược lại thông báo và chuyển về trang login

    // if (!localStorage.getItem('accessToken')) {
    //     // Chưa đăng nhập 
    //     alert("Bạn phải đăng nhập !");
    //     return <Redirect to="/login" />
    // }

    return (
        <div className='container'>
            <div className="card w-50 mx-auto">
                <img className="card-img-top" src="https://i.pravatar.cc/?u=38" alt="" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        </div>
    )
}

export default Profile