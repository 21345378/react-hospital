import React, { ReactNode, useState } from 'react'
import { Pagination } from 'antd';
import './index.css'
import {scheduleData,reserveDateNumber} from '../../../../api/hospital/hospitalData'
import type {reserveDateItem} from '../../../../api/hospital/model'
import {getFormatTime} from '../../../../utils'
import { useNavigate } from 'react-router-dom';
export default function Schedule() {
    const {baseMap,bookingScheduleList} = scheduleData
    const [nowDate,setDate] = useState(()=>{return getFormatTime()})

    //初始化默认的class名
    const initClassName = (workDate:string):string =>{
      if(nowDate === workDate)  return 'calendar-item small-space active'
      else return 'calendar-item small-space'
    }
    const changeSelect = (workDate:string) =>{
      setDate(workDate)
      if(nowDate === workDate)  return 'calendar-item small-space active'
      else return 'calendar-item small-space'
    }

  return (
    <div className='schedule-info'>
      <div className="hospital-source-list">
        <div className="header-wrapper fx fa">
          <span className='link-to'>{baseMap.hosname}</span>
          <div className='keshi'>{baseMap.bigname}</div>
        </div>
        <div className="schedule-title" style={{marginTop:'20px'}}>{baseMap.depname}</div>
        <div className='date-select' style={{marginTop:'30px'}}>
          <div className="date-title">{baseMap.workDateString}</div>
          <div className="date-wrapper fx">
            {
              bookingScheduleList.map((item)=>{
                return(
                  <div className={initClassName(item.workDate)} onClick={()=>{return changeSelect(item.workDate) }}  style={{width:'224px'}} key={item.workDate}>
                    <div className='calendar-item-header fx fa jc'>
                      <span>{item.workDate}</span>
                      <span className='week'>{item.dayOfWeek}</span>
                    </div>
                    <div className='calendar-item-bottom'>
                      {item.status === -1 ? '停止挂号' : '有号'}
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="date-page fx jc fa">
              <PageItem/>
          </div>
          <div className='reserve-list'>
            <div className="list-title fa fx">本日号源</div>
            {
              reserveDateNumber.map((item)=>{
                return(
                  <HospitalReserve reserveItem={item} key={item.id}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

//分页器相关的组件
const PageItem: React.FC = () => <Pagination defaultCurrent={1} total={50} />;

//这里我们定义的是一个关于接收对应的组件传递的props是所定义的接口。由于传递的属性值时被包裹在对应的reserveItem中，因此需要再定义一层接口
interface reserveProps{
  reserveItem:reserveDateItem
}
//预定号源的相关组件
function HospitalReserve(props:reserveProps){
  const {reserveItem} =  props
  const navigate = useNavigate()
  const gotoeRegister = () =>{
    navigate('/hospital/hospitalregister')
  }

  return(
    <div className='reserve-item' style={{marginTop:'36px'}}>
      <div>
        <div className='reserve-list-item fx jb'>
          <div className="item-wrapepr">
            <div className="title-wrapper fx">
              <div className=''>{reserveItem.title}</div>
              <div className='split'>|</div>
              <div className='name'></div>    
            </div>
            <div className="special-wrapper">{reserveItem.skill}</div>
          </div>
          <div className="right-wrapper fx fa">
            <div className="reserve-price">{'￥'+reserveItem.amount}</div>
            <div className="button-wrapper fx fa jb" onClick={gotoeRegister}>
              <div style={{textAlign:'center',width:'100%'}}>{'剩余'+reserveItem.availableNumber}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





