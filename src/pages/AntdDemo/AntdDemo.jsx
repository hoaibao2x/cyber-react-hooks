import React from 'react'
import { Card, Col, Row } from 'antd'

const { Meta } = Card;

function AntdDemo() {
    return (
        <>
            <div className='container'>
                <Row>
                    {/* 
                span: Tối đa 24, chỉ số cho Col => 24/ số lượng cột cần tạo 
                Col: Tự thư viện chia kích thước cho mỗi cột
                */}
                    <Col className='cardCol' span={6}>
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=-77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=-77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=-77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=-77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default AntdDemo