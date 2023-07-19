import React, { useEffect, useState } from 'react'
import './index.css'
import { Outlet, useNavigate } from 'react-router-dom'
import {getHospitalDetail} from '../../api/hospital/hospitalList'
export default function Hospital() {
    
    useEffect(()=>{
        // getDetail()

    },[])

  return (
    <div className='hospital-page'>
        <div className='hospital-nav fx' style={{paddingTop:'16px'}}>
            <div className="nav-left">
                <HospitalNavLeft/>
            </div>
            <div className="nav-right">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

interface navItem{
    id:string,
    label:string,
    path:string
}

const HospitalNavLeft:React.FC = () =>{
    const [navList] = useState([
        {
            id:'asdawdasd',
            label:'预约挂号',
            path:'appointment'
        },{
            id:'asdawdasdawd',
            label:'预约须知',
            path:'notice'
        },{
            id:'asdawdasdawdasd',
            label:'医院详情',
            path:'detail'
        }
    ])
    // 创建一个属于路由跳转的变量
    
    const navigate = useNavigate()
    const [navItemId,setNavItemId] = useState('asdawdasd')
    function selectItem(navObject:navItem){
        setNavItemId(navObject.id)
        navigate(`${navObject.path}`)

    }
    return(
        <div className='left-select'>
            {
                navList.map((item)=>{
                    return(
                        <div className="left-nav-item" key={item.id} onClick={()=>{selectItem(item)}}>
                            <span className={navItemId === item.id ? 'item-label label-active link':'item-label'}>{item.label}</span>
                        </div>
                    )
                })
            }
        </div>
    )
} 
