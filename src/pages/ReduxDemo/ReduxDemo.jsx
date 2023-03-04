import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addCommentAction } from '../../redux/action/fakeBookAction';

function ReduxDemo() {

  // const { mangComment } = useSelector((state) => {
  //   // state.fakeBookReducer.mangComment;
  //   return state.fakeBookReducer;
  // });

  const { mangComment } = useSelector(state => state.fakeBookReducer);

  let dispatch = useDispatch();

  let renderComment = () => {
    return mangComment.map((comment) => {
      return <div className='row' key={comment.username} >
        <div className="col-md-2">
          <img className='img-fluid' src={comment.avatar} alt="" />
        </div>
        <div className="col-md-10">
          <p>{comment.username}</p>
          <p>{comment.comment}</p>
        </div>
      </div>
    })
  }

  // Lưu các giá trị lấy từ form
  let [userComment, setUserComment] = useState({
    username: "",
    comment: ""
  });

  let handleInput = (e) => {
    let { id, value } = e.target;
    // console.log(id, value);
    setUserComment({
      ...userComment,
      [id]: value
    });
  };

  // console.log(userComment);

  let handleSubmit = (e) => {
    e.preventDefault();

    // Tạo action

    /**
     * action có 2 loại
     * 1: action là obj
     * 2: action là fnc (Tách action ở 1 file riêng => Dễ quản lý code - action creator)
     */

    let action = addCommentAction(userComment);

    dispatch(action);
  }


  return (
    <div className='container'>
      <div className="w-50 mx-auto my-5">
        {renderComment()}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input onChange={handleInput} type="text" className="form-control" id="username" placeholder="Enter username" />
          </div>
          <div className="form-group">
            <input onChange={handleInput} type="text" className="form-control" id="comment" placeholder="Write comment" />
          </div>
          <button className='btn btn-info'>Sent</button>
        </form>
      </div>
    </div>
  )
}

export default ReduxDemo