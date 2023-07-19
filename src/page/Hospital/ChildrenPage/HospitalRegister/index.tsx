import React from 'react'
import { Card, Form, Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import './index.css'
export default function HospitalRegister() {
  return (
    <div className='hospital-register'>
      <div className='title'>确认挂号信息</div>
      <div className="sub-title">选择就诊人：</div>
      <div className="patient-wrapper">
        <AddClientPerson/>
      </div>
      <div className="sub-title">挂号信息</div>
      <div className="content-wrapper">
        <FormPersonInfo/>
      </div>
      HospitalRegister
      
    </div>
  )
}




const AddClientPerson:React.FC = () =>{
  return(
    <Card style={{ width: 184,margin:'18px 0 0 36px',color:'#4990f1' }} className='fx fa jb user-card'>
      <div className='card-content fx fa'>
        <PlusOutlined style={{marginRight:'4px'}} />
        <span>添加就诊人</span>
      </div>
    </Card>
  )
}


const FormPersonInfo:React.FC = () =>{
  return(
    <> 
      <div className="el-form">
        <div className="el-form-item fx fa">
          <label className='label'>就诊日期:</label>
          <div className='el-form-content'>2023-07-18 周二 上午</div>
        </div>
        <div className="el-form-item fx fa">
          <label className='label'>就诊医院:</label>
          <div className='el-form-content'>北京人民医院</div>
        </div>
        <div className="el-form-item fx fa">
          <label  className='label'>就诊科室</label>
          <div className='el-form-content'>多发性硬化专科门诊</div>
        </div>
        <div className="el-form-item fx fa">
          <label  className='label'>医生姓名</label>
          <div className='el-form-content'></div>
        </div>
        <div className="el-form-item fx fa">
         <label  className='label'>医生专长</label>
          <div className='el-form-content'>内分泌科常见病。</div>
        </div>
        <div className="el-form-item">
        <label  className='label'>医院服务费</label>
          <div className='el-form-content'>100</div>
        </div>
      </div>
    </>
  )
}