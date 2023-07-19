import React, { useState } from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '350px',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  background: '#364d79',
};
const CarouselMoudel: React.FC = (props:object) => {
  const [carouseList] = useState([
    {
        id:'001',
        imageUrl:'http://syt.atguigu.cn/_nuxt/img/web-banner1.b91d1a1.png'
    },
    {
        id:'002',
        imageUrl:'http://syt.atguigu.cn/_nuxt/img/web-banner1.b91d1a1.png'
    },
    {
        id:'003',
        imageUrl:'http://syt.atguigu.cn/_nuxt/img/web-banner1.b91d1a1.png'
    },
])
  console.log(props)
  return(
  <div className='wrapper page-main'>
      <Carousel autoplay>
      {
        carouseList.map((item)=>{
          return (
            <div style={contentStyle} key={item.id}>
              <img src={item.imageUrl} alt="轮播图片" />
            </div>
          )
        })
      }
  </Carousel>
  </div>
  );
  }

export default CarouselMoudel;