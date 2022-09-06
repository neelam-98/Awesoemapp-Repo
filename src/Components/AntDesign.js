import React from 'react';
import {Form ,Button, Checkbox, DatePicker, Input, Select } from  "antd";
import "antd/dist/antd.css";
function AntDesign() {
  return (
    <>
    <Form
        autoComplete="off"
        labelCol={{span: 10}} 
        wrapperCol={{span: 6}}
    >
        <Form.Item 
        name="Full Name "
         label="Full Name "
         rules={[
            {
                required: true,
                message: "Enter name"
            },
            {whitespace: true},
            {min:3},{max:15},
            {validator: (_, value) => {
                  if (/^[a-zA-Z]+$/.test(value)) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject('Please enter correct name');
                  }
                 }
            }
         ]}
         hasFeedback
         >
            <Input placeholder="Type Your name" />
        </Form.Item>

        <Form.Item
            name="email " 
            label="Email"
            rules={[
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                {
                    type: 'email',
                    message: 'Pleas enter  valid E-mail!',
                },
              ]}
            hasFeedback>
            <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item 
            name="password " 
            label="Password"
            rules={[
                {
                  required: true,
                //   message: 'Please input your password!',
                },
                {validator: (_, value) => {
                    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(value)) {
                        return Promise.resolve();
                    } else{
                        return Promise.reject('Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one underscore, no space and it must be 8-16 characters long.');
                        }
                }
              }
              ]}
              hasFeedback>
            <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Form.Item 
            name=" confirmPassword " 
            label=" Confirm Password"  
            dependencies={['password']}      
        rules={[
          {
            required: true,
            // message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('Password does not match');
            }
          })
        ]}
        hasFeedback >
            <Input.Password placeholder="Confirm your password" />
        </Form.Item>

        <Form.Item 
            name="gender" 
            label="Gender"
            rules={[
                {
                    required: true,
                    message: 'Please select your gender',
                },
              ]}
            hasFeedback>
            <Select placeholder="select your gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
            </Select>
        </Form.Item>

        <Form.Item 
            name=" dob " 
            label="Date of Birth" 
            rules={[
                {
                    required: true,
                    message: 'Choose your date of birth',
                },
              ]}
            hasFeedback>
            <DatePicker 
            picker='date' 
            placeholder="Choose date of birth" />
        </Form.Item>
        
        {/* <Form.Item name="website " label="Website">
            <Input.Password placeholder="Add your website url" /> */}
        {/* </Form.Item> */}

        <Form.Item 
            name=" agreement "  
            wrapperCol={{offset: 8}} 
            rules={[
                {
                    // required: true,
                    // message: 'To continue Please check the box',
                },
              ]}
            hasFeedback>
            <Checkbox>
                Agree to our Terms and Conditions.
            </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 10}} labelCol={{span: 10}}>
            <Button  type='primary' htmlType='Submit'>Register</Button>
        </Form.Item>
    </Form>
    </>
  );
}

export default AntDesign;
