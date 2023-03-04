import React from 'react'

function Detail(props) {
  return (
    <div className='container'>
        <h1 className="alert alert-danger text-center">
            Tham số (param): {props.match.params.maPhim}
        </h1>
    </div>
  )
}

export default Detail