import React, { useEffect, useState, useRef } from 'react';
import { Input, Button, Form, Layout, Space, Spin } from 'antd';
import './front.css';
import Template1 from '../template1/Template1';
import Template2 from '../template2/Template2';
import Template3 from '../template3/Template3';
import Template4 from '../template4/Template4';
import Template5 from '../template5/Template5';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';


const { Sider } = Layout;
const { TextArea } = Input;


function Front() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [templateIndex, setTemplateIndex] = useState(0);
  const [data, setData] = useState();
  const [formData, setFormData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mainLoading, setMainLoading] = useState(false)
  const [latestPrompt, setLatestPrompt] = useState()

  const textareaRef = useRef(null);
  const [error, setError] = useState(null);

  const [form] = Form.useForm();


  // const url = "";
  const url = "https://f1ca-103-206-136-108.ngrok-free.app/email-gpt/template";

  const templates = [
    <Template1 data={data} />,
    <Template2 data={data} />,
    <Template3 data={data} />,
    <Template5 data={data} />,
    <Template4 data={data} />
  ];


  const validateMessages = {
    required: '${label} is required!',
  };

  const handleSubmit = async (values) => {
    setMainLoading(true);
    setFormData(values)
    setError(null)
    setLatestPrompt(values)

    const requestData = {
      id: templateIndex,
      prompt: values.prompt,
    }


    await axios
      .post(url, requestData).then((res) => {
        setData(res.data);
        setIsSubmitted(true);
        setMainLoading(false);
      }).catch((error) => {
        setError(error)
        setMainLoading(false)
      });
  };

  const handleRegenerateContent = async () => {
    setLoading(true)
    setError(null)
    const updatedTemplateIndex = (templateIndex + 1) % templates.length;
    setTemplateIndex(updatedTemplateIndex);

    const formValues = await form.validateFields(); // Get the form values
    const { prompt } = formValues;

    
      const requestData = {
        id: updatedTemplateIndex,
        prompt: prompt,
      };
    
  
      await axios
        .post(url, requestData)
        .then((res) => {
          setData(res.data);
          setIsSubmitted(true);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    
  };


  return (
    <div className="container">

      <div className={`formContainer ${isSubmitted ? 'formContainer2' : 'formContainer1'}`}>
        <Spin tip="Loading" size="large" spinning={mainLoading}>
          <Form
            name="prompt"
            labelCol={{
              span: 8,
            }}
            style={{
              margin: '20px',
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmit}
            autoComplete="off"
            validateMessages={validateMessages}
            form={form}
          >
            <Form.Item
              required
              rules={[
                {
                  required: true,
                  message: 'Please enter prompt',
                  validator: (_, value) =>
                    value.trim() !== '' ? Promise.resolve() : Promise.reject('Please enter prompt'),
                },
              ]}
              name="prompt"
            >
              <TextArea
                placeholder="Enter your prompt here..."
                rows={4}
                autoSize={{ minRows: 10, maxRows: 15 }}
                style={{ maxHeight: 'calc(100vh - 170px)' }}
                ref={textareaRef}
              />
            </Form.Item>

            {!isSubmitted && (
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            )}
          </Form>

          {isSubmitted && (

            <div className="regenerate">
              <Space>
                <Button type="primary" size="small" onClick={handleRegenerateContent} >Regenerate Template</Button>
              </Space>
            </div>

          )}
        </Spin>
      </div>

      {/* Show response side by side */}

      {isSubmitted && (
        <>

          <Spin tip="Loading" size="large" spinning={loading}>
            <div className="responseContainer">
              {/* Place your response content here */}
              {templates[templateIndex]}
            </div>
          </Spin>

          <div className='errorhandle'>
            {error && (
              <div>Error: {error.message}</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Front;
