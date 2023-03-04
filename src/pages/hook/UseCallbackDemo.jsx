import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Post from './Post'

function UseCallbackDemo() {

    let [like, setLike] = useState(0);
    let [num, setNum] = useState(0);

    let renderLike = () => {
        console.log("like");
    } // Tạo lại => Đổi địa chỉ => memo tưởng đổi

    // useCallback: Giúp lưu lại hàm, tránh thay đổi khi render lại UI
    // let renderCallback = useCallback(renderLike, []);
    let renderCallback = useCallback(renderLike, [like]);

    return (
        <div className='container'>
            <div className="card w-75 mx-auto my-5">
                <div className="card-body">
                    {/* <Post like={like} /> */}
                    {/* <Post renderLike={renderLike} /> */}
                    <Post renderLike={renderCallback} />
                    {/* <Post /> */}
                    <div>
                        Like: <span>{like}</span> <span onClick={() => {
                            setLike(like + 1);
                        }} style={{ cursor: "pointer" }}>❤️</span>
                    </div>
                    <div className="my-5">
                        <h3>Number: {num}</h3>
                        <button onClick={() => {
                            setNum(num + 1);
                        }} className='btn btn-info'>Tăng Num</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseCallbackDemo