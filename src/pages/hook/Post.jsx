import React from 'react'
import { memo } from 'react';

function Post(props) {
    console.log("post");
    return (
        <>
            <h5 className="card-title">Random title</h5>
            <img className='w-25' src="https://i.pravatar.cc/?u=66" alt="" />
            {/* <h3>
                Like: <span>{props.like}</span>
            </h3> */}
        </>
    )
}

export default memo(Post)
// memo: tự nhận biết state có truyền xuống cho component ? render lại giao diện : ko render lại giao diện    