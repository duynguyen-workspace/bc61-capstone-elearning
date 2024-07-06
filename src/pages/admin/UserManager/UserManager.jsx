import { Col, Divider, Input, Row } from 'antd'
import React from 'react'

const UserManager = () => {
    return (
        <section className="user-manager px-10">
            <div className="flex gap-x-3 items-center">
                <h2 className="text-5xl font-semibold">Edit User</h2>
            </div>
            <Divider></Divider>
            <div className='w-full p-5 bg-[#172554] mb-5'>
                <div className="flex justify-start items-stretch gap-x-3">
                    <div className='text-center bg-white py-2 px-3 rounded-lg'>
                        <i className="fa-regular fa-user text-4xl"></i>
                    </div>
                    <div>
                        <h1 className="text-2xl font-medium text-white">Username</h1>
                        <p className='text-slate-200 text-base'>ID: 24301</p>
                    </div>
                </div>
            </div>
            <Row className="p-3 bg-[#849ef2]">
                <Col span={12}>
                    <div className='bg-[#172554] p-5'>
                        <h1 className='text-white text-xl font-semibold mb-5'>Profile Detail</h1>
                        <div className='flex gap-3 items-center'>
                            <div>
                                <h5 className='text-slate-300 text-lg'>Username</h5>
                                <Input placeholder='username123' variant='outlined' size='large' className=''></Input>
                            </div>
                            <div>
                                <h5 className='text-slate-300 text-lg'>Username</h5>
                                <Input placeholder='username123' className=''></Input>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    
                </Col>
            </Row>
            
            
        </section>
    )
}

export default UserManager
