import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

// biến toàn cục
const arrDiaChi = [
    {
        id: 'HCM',
        name: 'Hồ Chí Minh',
        arrQuan: [
            {
                id: 1,
                name: 'Quận 1'
            },
            {
                id: 2,
                name: 'Quận 2'
            },
            {
                id: 3,
                name: 'Quận 3'
            }
        ]
    },
    {
        id: 'DN',
        name: 'Đà Nẵng',
        arrQuan: [
            {
                id: 4,
                name: 'Quận Hải Châu'
            },
            {
                id: 5,
                name: 'Quận Liên Chiểu'
            },
            {
                id: 6,
                name: 'Quận Sơn Trà'
            }
        ]
    }
]

let timeOut = ''; // chỉ tạo 1 lần, khi render lại UI sẽ ko tạo lại

function UseEffectDemo() {

    // mounting (chạy 1 lần khi load ứng dụng), updating (state, props thay đổi), unmounting (chạy khi component biến mất khỏi UI)



    //? Demo 1
    let [number, setNumber] = useState(0); // [pt1 - state, pt2 - hàm setState]
    let [like, setLike] = useState(0);

    //? useEffect(hàm callback, []);

    // useEffect(() => {
    //     console.log('componentdidmount');
    //     console.log('componentdidupdate');
    // })

    useEffect(() => {
        console.log('componentdidmount');
    }, []); // tham số thứ 2 là mảng rỗng thì chạy theo componentdidmount

    // truyền giá trị state và tham số [], chạy khi number thay đổi
    useEffect(() => {
        // vẫn chạy khi load ứng dụng
        // nhưng ở lần 2 tức là khi updating thì chỉ chạy khi number thay đổi
        setLike(like + 1);
    }, [number]); // shallow compare (number, string, boolean)



    //? Demo 2
    let [idTP, setTP] = useState('');
    let [arrQuan, setQuan] = useState([]);

    let renderQuan = () => {
        if (arrQuan.length === 0) {
            return <option>
                Hãy chọn thành phố trước
            </option>
        } else {
            return arrQuan.map((quan) => {
                return <option value={quan.id}>
                    {quan.name}
                </option>
            })
        }
    }

    useEffect(() => {
        // Xét xong tp => render UI => useEffect => setQuan
        if (idTP !== '') {
            let thanhPho = arrDiaChi.find((tp) => {
                return tp.id === idTP
            });
            console.log('Thành phố',thanhPho);
            let arrQuanNew = thanhPho.arrQuan;
            setQuan(arrQuanNew);
        }
    }, [idTP]);



    // Demo 3
    useEffect(() => {
        timeOut = setInterval(() => {
            console.log("Interval")
        }, 1000);

        return () => {
            // Code trong hàm sẽ được thực thi khi component biến mất khỏi UI
            // Dùng để tắt các service chạy ngầm (willUnmount)
            console.log('willUnmount');
            clearInterval(timeOut);
        }
    }, []);

    return (
        <>
            {console.log('render')};
            <div className="container">
                <div className="w-50 mx-auto">
                    {/* Demo 1 */}
                    <p>{number}</p>
                    <p>{like}</p>
                    <button onClick={() => {
                        setNumber(number + 1)
                    }} className='btn btn-success'>+</button>

                    {/* Demo 2 */}
                    <div className="form-group my-3">
                        <label>Thành phố</label>
                        <select value={idTP} onChange={(event) => {
                            let idTPChon = event.target.value;
                            setTP(idTPChon);
                            // console.log(idTPChon);
                        }} className="form-control">
                            <option>Hãy chọn thành phố</option>
                            <option value={"HCM"}>Hồ Chí Minh</option>
                            <option value={"DN"}>Đà Nẵng</option>
                        </select>
                    </div>
                    <div className="form-group my-3">
                        <label>Quận</label>
                        <select className="form-control">
                            {renderQuan()}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseEffectDemo