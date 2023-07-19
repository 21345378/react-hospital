import React, { forwardRef, useEffect, useImperativeHandle, useRef,useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd';
import {postJob} from '../../utils/http'
// import { httpsGet } from '../../utils/https';
//用来定义限制父子组件传递参数的Ref的type类型
// interface childrenFnModel {
//   showModal: () => void,
// }


const WebHeader = () => {
  const navigate = useNavigate()
  // const ModelRef = useRef<childrenFnModel>(null)
  // const ChildrenFn = ModelRef.current!
  function userLogin(){
    // console.log(ChildrenFn)
    // ChildrenFn.showModal()
  //  console.log(ChildrenFn.showModal)    
    navigate('/login')
  }
  function show(){
    const item = {
      id:'1'
    }
    postJob(`/detail`,item).then((res:any)=>{
      console.log(res)
    })
    // httpsGet('/api/login/account')
    // console.log( httpsGet('/api/login/account'))
  }
  return (
    <div className="header-container fx fa">
        <div className="wrapper fx jb fa">
            <div className="left-wrapper fx fa">
                <img src="http://syt.atguigu.cn/_nuxt/img/logo.7086376.png" alt="网站loge"  style={{width:'50px'}}/>
                <span className='text link'>尚医通 预约挂号统一平台</span>
            </div>
            <div  className="right-wrapper fx jb">
                <span className='link-to' onClick={show}>帮助中心</span>
                <span className='link-to' onClick={userLogin}>登录注册</span>
            </div>
            
        </div>
    </div>
  )
}
export default WebHeader


//总结在TS中我们给父子组件赋值的时候需要遵循以下条件。
//首先我们需要使用useRef来创建对应的ref的值，但是我们需要给对应的值定义接口。其中接口的信息就是我们想往外暴露的值
//然后再对应的组件上使用ref来进行获取对应的标签
//然后在子组件中我们需要使用forwardRef向外暴露一个可操作的ref。其中的值为props和ref，分别与之对父组件传递值时的接口
//useImperativeHandle(ref,()=>{({})},[])的形式只是暴露我们所需要的方法或者参数，其他的就不用暴露给父组件，这样方便于我们操作
//然后就完成了操作子组件的相关方法。


// const Child = forwardRef<childrenFnModel>((props,ref) => { 
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   useImperativeHandle(ref, () => ({
//     showModal, //（实际等于： resetSharePopup：resetSharePopup）
//   }));
//   function showModal(){
//     console.log(123)
//     setIsModalOpen(true);
//   };
// return(
//   <Modal  title="Basic Modal" forceRender={true}  open={isModalOpen} footer={null}>

//   </Modal>
// )
// })
