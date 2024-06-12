import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        router.push('/dashboard');
      }
    };
    checkSession();
  }, [router]);

  const onFinish = async (values: any) => {
    const result = await signIn('credentials', {
      redirect: false,
      username: values.username,
      password: values.password,
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      router.push('/dashboard'); // Redirect to dashboard after successful login
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <div style={styles.logoContainer}>
          <h2 style={styles.title}>LOGIN</h2>
        </div>
        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={styles.form}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>จดจำบันชี</Checkbox>
          </Form.Item>
          <a href="" style={styles.forgotPassword}>ลืมรหัสผ่าน</a>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={styles.submitButton}>
              เข้าสู่ระบบ
            </Button>
          </Form.Item>
        </Form>
        <Link href="/auth/register" passHref>
            <Button type="dashed" className="css-19iuou" style={styles.registerButton}>สมัครสามาชิก</Button>
          </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f0f2f5',
    overflow: 'hidden',
    margin: 0,
  },
  formContainer: {
    width: 400,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
  },
  logoContainer: {
    marginBottom: 24,
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 0,
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.45)',
  },
  form: {
    width: '100%',
  },
  forgotPassword: {
    float: 'right' as const,
  },
  registerButton:{
    width: '100%',
  },
  submitButton: {
    width: '100%',
  },
  otherLoginMethods: {
    marginTop: 24,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    margin: '0 8px',
  },
};

export default LoginPage;
