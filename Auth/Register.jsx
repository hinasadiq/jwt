import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
import registerImage from "../assets/Screenshot 2024-06-08 125851.png";
import useSignup from "../Hooks/useSignup";
 
const Register = () => {
  const { loading, error, registerUser } = useSignup();
  const handleRegister = (values) => {
    registerUser(values);
  };
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* { from } */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an Account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for Exclusive Access
          </Typography.Text>

          <Form layout="vertical" onFinish={handleRegister} a>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input  your full name",
                },
              ]}
            >
              <Input size="large" placeholder="Enter Your Full Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input  your Email",
                },
                {
                  type: "email",
                  message: "The input is not a valid Email!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter Your Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input  your Password",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter Your Password" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please input  your Confirm Password",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-enter Your Password"
              />
            </Form.Item>

            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}

            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin /> : "Create Account"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign in
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
        {/* {image} */}
        <Flex flex={1}>
          <img src={registerImage} alt="" className="auth-image" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
