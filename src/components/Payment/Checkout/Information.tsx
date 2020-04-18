import React from "react";
import { Card, Breadcrumb, Input, Checkbox, Button, Divider, Form } from "antd";
import { Link } from "react-router-dom";

const Information: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  enum inputField {
    information = "information",
    email = "email",
    firstName = "firstName",
    lastName = "lastName",
    company = "company",
    address = "address",
    aptNo = "aptNo",
    city = "city",
    postNo = "postNo",
    phoneNo = "PhoneNo",
  }

  return (
    <div>
      <Card
        style={{ display: "flex" }}
        bodyStyle={{ width: "100%", padding: 0, margin: "1rem" }}
      >
        <Form
          name={inputField.information}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h1 style={{ textAlign: "center" }}>Name/Logo</h1>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <a href="/Cart">Cart</a>
            </Breadcrumb.Item>

            <Breadcrumb.Item>Information</Breadcrumb.Item>

            <Breadcrumb.Item>
              <a href="/Delivery">Delivery</a>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <a href="/Payment">Payment</a>
            </Breadcrumb.Item>
          </Breadcrumb>

          <h2>Contact information</h2>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Your email" />
          </Form.Item>
          <div style={{ display: "flex" }}>
            <Checkbox />
            <p>Keep me updated about news and sales</p>
          </div>

          <h2>Delivery Address</h2>
          <div style={{ display: "flex" }}>
            <Form.Item
              style={{ width: "-webkit-fill-available", marginRight: "1rem" }}
              name={inputField.firstName}
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name={inputField.lastName}
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>

          <Form.Item name={inputField.lastName} rules={[{ required: false }]}>
            <Input
              placeholder={inputField.company}
              style={{ marginBottom: "1rem" }}
            />
          </Form.Item>
          <div style={{ display: "flex" }}>
            <Form.Item
              style={{ width: "-webkit-fill-available", marginRight: "1rem" }}
              name={inputField.address}
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item
              name={inputField.aptNo}
              rules={[
                { required: true, message: "Please input your Apt. No!" },
              ]}
            >
              <Input placeholder="Apt. No." />
            </Form.Item>
          </div>

          <div style={{ display: "flex" }}>
            <Form.Item
              style={{ width: "-webkit-fill-available", marginRight: "1rem" }}
              name={inputField.city}
              rules={[{ required: true, message: "Please input your City!" }]}
            >
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item
              name={inputField.postNo}
              rules={[
                { required: true, message: "Please input your Post No!" },
              ]}
            >
              <Input placeholder="Post No." />
            </Form.Item>
          </div>

          <Form.Item
            name={inputField.phoneNo}
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>

          <div>
            <Link to="/Cart">{"<"} return to cart</Link>
            <Form.Item>
              {/* <Link
                onClick={validateForm}
                to="/Delivery"
                style={{ float: "right" }}
              > */}
              <Button>Continue to Delivery</Button>
              {/* </Link> */}
            </Form.Item>
          </div>
        </Form>
      </Card>
      <Divider />
      <div style={{ justifyContent: "space-between", display: "flex" }}>
        <Link to="/Cart">Return Policy</Link>
        <Link to="/Cart">Privacy Policy</Link>
        <Link to="/Cart">Terms & Conditions</Link>
      </div>
    </div>
  );

  function validateForm() {}
};

export default Information;
