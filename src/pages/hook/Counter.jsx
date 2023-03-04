import React from 'react'
import { useState } from 'react'

function Counter() {

    //? RCC
    // this.setState({
    //     count: 0
    // })

    // Để sử dụng được state thì dùng hook useState
    // trả về 1 mảng 2 phần tử [giá trị state, setState]
    //! Luôn luôn khai báo biến ở đầu
    const [count, setCount] = useState(0);

    // console.log('count', count);
    //? giá trị khởi tạo = 0, nếu không có giá trị khởi tạo thì undefine
    //? count sẽ nhận giá trị khởi tạo của useState


    // khai báo state chứa đối tượng user
    const [user, setUser] = useState({
        id: 77,
        avatar: "https://i.pravatar.cc/?u=17"
    })

    return (
        <div className='container'>
            count: {count}
            <hr />
            <button className='btn btn-success' onClick={() => {
                // đổi giá trị của state (count) và render lại UI
                // this.setState({
                //     count: this.state.count + 1
                // })
                setCount(count + 1);
            }}>Increase</button>

            <div className='w-25 mx-auto'>
                <div className="card my-3">
                    <img className="card-img-top" src={user.avatar} alt="" />
                    <div className="card-body">
                        <button onClick={() => {
                            let num = Math.floor(Math.random() * 100);
                            let newUser = { ...user, avatar: `https://i.pravatar.cc/?u=${num}`}
                            setUser(newUser);
                        }} className='btn btn-info'>Random</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter