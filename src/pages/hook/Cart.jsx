import React, { memo } from 'react'

function Cart(props) {
    // Dữ liệu props không đổi => không cần render lại
    console.log("cart");
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default memo(Cart) // Không nhận diện function, object, array có đổi hay không
// Dữ liệu props không đổi => không cần render lại
// Khi like thay đổi thì không render lại