import React, { useState } from 'react'
import {AlignRightOutlined} from '@ant-design/icons';
import './index.css'
import { useNavigate, useParams } from 'react-router-dom';
import {AdministrativeSelect,AdministrativeData} from '../../../../api/hospital/hospitalData'
export default function Appointment(props:any) {
  const [hospital] = useState({
      cycle: 10,
      releaseTime: "08:30",
      stopTime: "11:30",
      quitDay: -1,
      quitTime: "15:30",
      rule: [
          "西院区预约号取号地点：西院区门诊楼一层大厅挂号窗口取号",
          "东院区预约号取号地点：东院区老门诊楼一层大厅挂号窗口或新门诊楼各楼层挂号/收费窗口取号"
      ],
      title:"北京人民医院",
      level:"三级甲等"
  })
  const {id} = useParams()
  console.log(id)
  return (
    <div className='hospital-detail'>
      <HospitalHeader title={hospital.title} level={hospital.level} />
      <div className='info-wrapper fx'>
        <img src="" alt="" className='hospital-image' />
        <div className="content-wrapper">
          <div>挂号规则</div>
          <div className="line fx">
            <div>
              <span className='label'>预约周期:&nbsp;天</span>
              <span >{hospital.cycle}</span>
            </div>
            <div className='space'>
              <span className='label'>放号时间:&nbsp;</span>
              <span >{hospital.releaseTime}</span>
            </div>
            <div className='space'>
              <span className='label'>停挂时间:&nbsp;</span>
              <span >{hospital.stopTime}</span>
            </div>
          </div>
          <div className="line">
            <span className='label'>退号时间:&nbsp;</span>
            <span>就诊前一工作日{hospital.quitTime}前取消</span>
          </div>

          <div className='hospital-rule'>
            <div style={{marginTop:'20px'}}>医院预约规则</div>
            <div className='rule-list'>
              {
                hospital.rule.map((item,index)=>{
                  return(
                    <div className='label' key={index}>{`${index+1}.` + item}</div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Administrative/>
    </div>
  )
}
//页面中的科室的相关组件
function Administrative() {
  const [activeItem,setActiveItem] = useState(0)
  //如果是动态绑定类型的话就不要用户执行，因此我们不需要高阶函数，让react默认帮我们执行一次
  const selectItem = (index: number) =>{
    setActiveItem(index)
    if(index === activeItem){
      return "list-wrapper-item fx fa jc item-select"
    }
    else{
      return "list-wrapper-item fx fa jc" 
    } 
  }
  // 默认初始化类名
  const initClassName = (index:number):string =>{
    if(index === activeItem) return "list-wrapper-item fx fa jc item-select" 
    else return "list-wrapper-item fx fa jc" 
  }
  // 使用路由跳转函数
  const navigate = useNavigate()


  //点击跳转到对应的路由中
  const gotoPage = () =>{
    navigate('/hospital/schedule')
  }

  return (
    <div className="detail-buttom">
      <div className='title select-title'>选择科室</div>
      <div className="select-mian fx">
        <div className="select-left">
          <div className="select-left-wrapper">
            {
              AdministrativeSelect.map((item,index)=>{
                return (
                  <div className={initClassName(index)} onClick={()=>{return selectItem(index)}} key={index}>
                    <a href={'#' + item.href}>{item.depname}</a>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="select-right">
          {
            AdministrativeData.map((item)=>{
              return(
                <div className="sub-dept-container" id={item.depcode} key={item.depcode}>
                  <div className='sub-title fx'>{item.depname}</div>
                  <div className="sub-item-wrapper fx">
                    {
                      item.children.map((item)=>{
                        return(
                          <div className="sub-item" key={item.depcode}>
                            <span className='bolck link-to' onClick={gotoPage}>{item.depname}</span>
                          </div>
                        )
                      })
                    }
                </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

//页面顶部的头部的公共组件
export interface headerType{
  title:string,
  level:string,
}


export function HospitalHeader(props:headerType){
  return(
    <div className="commen-header fx fa">
      <div className='title-wrapper fx fa'>
        <span className='hospital-title'>{props.title}</span>
        <div className='hospital-level fx fa'>
          <AlignRightOutlined style={{fontSize:'14px'}} />
          <span className='icon-wrapper' style={{marginLeft:'6px'}}>{props.level}</span>
        </div>
      </div>
    </div>
  )
}
