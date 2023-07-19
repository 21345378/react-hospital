import React from 'react'
import './index.css'
export default function Fotter(props:any) {
  return (
    <div className='footer-container'>
        <div className='wrapper fx jb'>
            <div className="footer-left fx fa">
                <span className='record'>京ICP备13018369号</span>
                <span className='phone'>电话挂号010-56253825</span>
            </div>
            <div className="footer-right fx">
                <ul className='fotter-right-main fx'>
                    <li className='fotter-right-item link-to'>联系我们</li>
                    <li className='fotter-right-item link-to'>合作伙伴</li>
                    <li className='fotter-right-item link-to'>用户协议</li>
                    <li className='fotter-right-item link-to'>隐私协议</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
