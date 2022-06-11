import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth';
import { Form, Input, Button, Layout, Menu, Divider } from 'antd';

const { Header, Content, Footer } = Layout;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: MouseEvent<HTMLElement>) => {
    if (!email.trim() || !password.trim()) return;

    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  }

  return (
    <>
      <Layout className="layout" style={{ height: '100vh', justifyContent: 'space-between' }}>
        <Header style={{ display: 'flex', justifyContent: 'end', background: '#7C7B7B'}}>
          <div style={{ display: 'flex', width: '120px', background: '#40a9ff', height: 'inherit', justifyContent: 'center', boxShadow: '0px 0px 61px 0px rgba(0,0,0,0.45)' }}>
            <div style={{ background: '#40a9ff', color: '#fff', fontSize: '24px' }}>^Sign In</div>
          </div>
        </Header>
        <Content style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '7% 19%', background: '#FEFEFE' }}>
          {/* <div className="site-layout-content" style={{ background: '#F6F6F6' }}> */}
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ padding: '100px 75px', borderRadius: '14px', boxShadow: '0px 0px 61px 0px rgba(0,0,0,0.25)'}}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input onChange={handleEmailChange} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password onChange={handlePasswordChange} />
              </Form.Item>

              <Form.Item style={{ margin: '0px'}} wrapperCol={{ offset: 4, span: 4 }}>
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
        </Content>
        <Divider type='horizontal' style={{ margin: '0px'}}></Divider>
        <Footer style={{ height: '64px', background: '#FEFEFE' }}></Footer>
      </Layout>
    </>
  );
}

export default LoginForm;
