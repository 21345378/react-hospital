import React from 'react'
import {HospitalHeader} from '../Appointment'
import {AlignLeftOutlined} from '@ant-design/icons';
import './index.css'
export default function Detail() {
  return (
    <div className='detail-info'>
      <HospitalHeader title={'北京人民医院'} level={'三级甲等'}/>
      <div className='info-wrapper fx'>
        <img src="" alt="" className='hospital-image' />
        <div className="content-wrapper fx">
          <AlignLeftOutlined style={{marginRight:'12px',fontSize:'18px',marginTop:'2px'}} />
          <p>乘车路线：12、14、18、19、28、31、34、38、39、40路到中医院；
            顺2、11、15、16、17、20、21、22、23、24、25、26、27、29、32、33、36、37、41、43、45路、945到国泰下车，
            向南行300米即到。</p>
        </div>
      </div>
      <div className="hospital-introduce title">医院介绍</div>
    </div>
  )
}
