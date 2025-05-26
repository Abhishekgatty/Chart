import React, { useState } from 'react';
import { loginUser } from '../../api/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/AuthContext';
import {
  Button,
  Card,
  Row,
  Col,
  Form,
  Container,
  Alert,
} from 'react-bootstrap';
import LogoLink from '../../components/Logo/LogoLink';

const Login = () => {
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: '', message: '' });

    try {
        console.log('Sending login request with:', formData);
        const loginResponse = await loginUser(formData.username, formData.password);
        console.log('Login response:', loginResponse);
        
        console.log('Saving sessionId:', loginResponse.sessionId);
        localStorage.setItem('sessionId', loginResponse.sessionId);

        login(loginResponse.sessionId);
        setSubmitStatus({
            type: 'success',
            message: 'Login successful',
        });
        setTimeout(() => navigate('/chatbot'), 2000);
    } catch (error) {
        console.error('Login error:', error);
        if (error.response?.status === 401) {
            setSubmitStatus({
                type: 'error',
                message: error.response?.data || 'Invalid username or password.',
            });
        } else {
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Login failed. Please try again.',
            });
        }
    } finally {
        setIsLoading(false);
    }
};
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl="4" lg="5" md="7" sm="9">
          <div className="my-3 text-center">
            <LogoLink size="sm" full />
          </div>
          <Card className="border-0">
            <div className="p-4">
              <h3>Login</h3>
              {submitStatus.message && (
                <Alert variant={submitStatus.type === 'success' ? 'success' : 'danger'}>
                  {submitStatus.message}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                  <Form.Label htmlFor="username">Username</Form.Label>
                  <div className="form-control-wrap">
                    <Form.Control
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Enter username"
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label className="d-flex" htmlFor="password">
                    Password{' '}
                    <a as="a" href="/forgot" className="link link-primary ms-auto p-0">
                      Forgot?
                    </a>
                  </Form.Label>
                  <div className="form-control-wrap">
                    <Form.Control
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="password"
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-3"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Account Login'}
                </Button>
              </Form>
            </div>
          </Card>
          <div className="text-center mt-4">
            <p className="small">
              Don't have an account?{' '}
              <Button as="a" href="/register" variant="link">
                Register
              </Button>
              <Button as="a" href="/" variant="link">
                Home
              </Button>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;