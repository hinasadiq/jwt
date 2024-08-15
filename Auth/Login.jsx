import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
import registerImage from "../assets/Screenshot 2024-06-08 125851.png";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const { error, loading, loginUser } = useLogin();

  const handleLogin = async (values) => {
    await loginUser(values);
  };
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        <Flex flex={1}>
          <img src={registerImage} alt="" className="auth-image" />
        </Flex>
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Sign in
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Unlock Your World!{" "}
          </Typography.Text>

          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
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
                {loading ? <Spin /> : "Sign in"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/">
                <Button size="large" className="btn">
                  Create an Account{" "}
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Login;
