import React, { useState } from 'react'
import { useMemo } from 'react';
import Cart from './Cart';

function UseMemoDemo() {

    let [like, setLike] = useState(0);

    let cart = [
        {
            id: 1,
            name: 'iphone',
            price: 1000
        },
        {
            id: 2,
            name: 'htc phone',
            price: 2000
        },
        {
            id: 3,
            name: 'lg phone',
            price: 3000
        }
    ];

    // useMemo: Lưu lại cái biến kiểu arr và obj
    let cartMemo = useMemo(() => {
        return cart;
    }, []);

    return (
        <div className='container'>
            <div className="card w-75 mx-auto my-5">
                <div className="card-body">
                    <div>
                        Like: <span>{like}</span> <span onClick={() => {
                            setLike(like + 1);
                        }} style={{ cursor: "pointer" }}>❤️</span>
                    </div>
                    <Cart cart={cartMemo} />
                </div>
            </div>
        </div>
    )
}

export default UseMemoDemo