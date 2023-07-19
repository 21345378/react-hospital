import {Navigate} from 'react-router-dom'
import {lazy } from 'react'
const Home = lazy(()=>import('../page/Home'))
const Login = lazy(()=> import('../page/Login'))
const Hospital = lazy(()=>import('../page/Hospital'))
const Appointment = lazy(()=>import('../page/Hospital/ChildrenPage/Appointment'))
const Detail = lazy(()=>import('../page/Hospital/ChildrenPage/Detail'))
const Notice = lazy(()=>import('../page/Hospital/ChildrenPage/Notice'))
const Schedule = lazy(()=>import('../page/Hospital/ChildrenPage/Schedule'))
const HospitalRegister = lazy(()=>import('../page/Hospital/ChildrenPage/HospitalRegister'))
const routes = [
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },    
    {
        path:'/hospital',
        element:<Hospital/>,
        children:[
            {
                path:'appointment',
                element:<Appointment/>
            },{
                path:'detail',
                element:<Detail/>
            },{
                path:'notice',
                element:<Notice/>
            }
            ,{
                path:'schedule',
                element:<Schedule/>
            }
            ,{
                path:'hospitalregister',
                element:<HospitalRegister/>
            }
        ]
    },
    {
        path:'/',
        element:<Navigate to='/home'/>
    },
    
]


export default routes
