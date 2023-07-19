import React from 'react'
import { Card,Tabs,Button, Form, Input } from 'antd';
import type { TabsProps } from 'antd';
import { GithubOutlined,WechatOutlined,WeiboOutlined,QqOutlined } from '@ant-design/icons';
import './index.css'



export default function Login() {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className="login-container">
       <Card className='login-card' title="欢迎来到登录页面" bordered={false}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} centered={true} >
          </Tabs>
      </Card>
    </div>
  )
}


const UserNameLogin:React.FC =() =>{
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return(
    <div className='username-login'>
      <Form
        // name=""
        // labelCol={{ span: 8 }}
        style={{ maxWidth: 600,height:280 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
    <Form.Item
      label="账号"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input className='input-item' />
    </Form.Item>

    <Form.Item
      label="密码"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password className='input-item'/>
    </Form.Item>

    <Form.Item className='submit-wrapper fx jc'>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
      </Form>
      <LoginButton/>
    </div>
  )
}


const LoginButton:React.FC = () =>{
  return(
    <div className='login-bottom fx'>
      <div className='Github-icon fx fa jc'>
      <GithubOutlined className='login-bottom-icon' />
      </div>
      <div className='Weixin-icon fx fa jc'>
        <WechatOutlined className='login-bottom-icon' style={{color:'#ffffff',fontSize:'20px'}} />
        </div>
      <div className='Xinlan-icon fx fa jc'> 
       <WeiboOutlined className='login-bottom-icon' style={{color:'#ffffff',fontSize:'20px'}} /></div>
      <div className='QQ-icon fx fa jc'>      
        <QqOutlined  className='login-bottom-icon' style={{color:'#ffffff'}}/>
      </div>
    </div>
  )
}


const items: TabsProps['items'] = [
  {
    key: '1',
    label: `账号登录`,
    children: <UserNameLogin/>
  },
  {
    key: '2',
    label: `手机号登录`,
    children:'123123123'
}]
