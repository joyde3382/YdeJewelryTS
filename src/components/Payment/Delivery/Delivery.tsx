import React from "react";
import {
  Card,
  Breadcrumb,
  Input,
  Checkbox,
  Button,
  Divider,
  Radio,
} from "antd";
import { Link } from "react-router-dom";
import RadioGroup from "antd/lib/radio/group";

const Delivery: React.FC = () => {
  return (
    <div>
      <Card
        style={{ display: "flex" }}
        bodyStyle={{ width: "100%", padding: 0, margin: "1rem" }}
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

        <Input placeholder="Contact email" />
        <Input placeholder="Delivery Address" />

        <h2>Delivery Method</h2>

        <RadioGroup>
          <Radio></Radio>
        </RadioGroup>

        <div>
          <Link to="/Cart">{"<"} return to cart</Link>
          <Link to="/Delivery" style={{ float: "right" }}>
            <Button> Continue to Delivery</Button>
          </Link>
        </div>
      </Card>
      <Divider />
      <div style={{ justifyContent: "space-between", display: "flex" }}>
        <Link to="/Cart">Return Policy</Link>
        <Link to="/Cart">Privacy Policy</Link>
        <Link to="/Cart">Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Delivery;
