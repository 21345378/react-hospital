import Mock from 'mockjs';

import {hospitalLevel,hospitalLocation} from '../api/hospital/hospitalData'
import {hospitalDetail,hospitalInfomation} from '../api/hospital/hospitalData'

//获取对应的首页详情页面
Mock.mock('/api/getHomeData','get',
    (body)=>{
        console.log(body)
        return {
            hospitalLevel,
            hospitalLocation,
        };
    }
)


//获取对应的医院详情页面
Mock.mock('/api/getHospital','get',
    (body)=>{
        console.log(body)
        return {
            hospitalDetail,
            hospitalInfomation,
        };
    }
)



