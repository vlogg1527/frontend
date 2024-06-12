import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';

const RegisterPage: React.FC = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log('Success:', values);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success('สมัครสมาชิกสำเร็จ!');
        router.push('/auth/login'); // Redirect to login after successful registration
      } else {
        const errorData = await response.json();
        message.error(errorData.message || 'เกิดข้อผิดพลาดในการสมัครสมาชิก!');
      }
    } catch (error) {
      message.error('เกิดข้อผิดพลาดในการสมัครสมาชิก!');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <div style={styles.logoContainer}>
          <h2 style={styles.title}>REGISTER</h2>
        </div>
        <Form
          name="register_form"
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
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={styles.submitButton}>
              สมัครสมาชิก
            </Button>
          </Form.Item>
        </Form>
        <div style={styles.otherLoginMethods}>
          <Link href="/auth/login">เข้าสู่ระบบ</Link>
        </div>
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
    backgroundColor: '#f0f2f5',
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

export default RegisterPage;
