import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function UseRefDemo() {

    // let [userAccount, setUser] = useState({
    //     username: "",
    //     password: ""
    // }); => render lại UI

    let user = {}; // => Dữ liệu không đổi ở các hàm khác

    let userAccRef = useRef({
        username: "",
        password: ""
    });

    let handleInput = (event) => {
        // destructuring
        let { id, value } = event.target;

        // userAccRef.current.username = id;
        userAccRef.current[id] = value;

        // user = {
        //     ...user,
        //     [id]: value
        // }
        // console.log(user);

        // console.log(id, value);
        // let newState = {
        //     ...userAccount,
        //     [id]: value
        // }
        // console.log(newState);
        // setUser(newState);
    }

    console.log("Login");
    console.log(userAccRef); // Lưu đươc dữ liệu mà không render lại UI
    // console.log(user); //! Không có dữ liêu mới do không render UI
    return (
        <div className='container'>
            <form className="w-50 mx-auto my-5">
                <div className="form-group">
                    <input onChange={handleInput} type="text" id="username" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <input onChange={handleInput} type="password" id="password" className="form-control" placeholder="Enter password" />
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}

export default UseRefDemo