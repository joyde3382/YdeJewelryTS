import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../Navigation/Navbar/Navbar";
import Details from "../../Products/Details/Details";
import About from "../../About/About";
import Cart from "../../Payment/Cart/Cart";
import Default from "../../Default";
import { Layout, Checkbox } from "antd";
import Frontpage from "../Frontpage/Frontpage";
import Foot from "../Foot/Foot";

import styles from "./PageSetup.module.scss";
import ProductsPage from "../ProductsPage/ProductsPage";
import Information from "../../Payment/Checkout/Information";
import Payment from "../../Payment/Payment/Payment";
import Delivery from "../../Payment/Delivery/Delivery";

const { Content } = Layout;

const PageSetup: React.FC = () => {
  return (
    <Router>
      <Layout className={styles.container}>
        {/* <Header className={styles.header}> */}
        <Navbar />
        {/* </Header> */}

        <Content className={styles.mainContent}>
          <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route path="/details" component={Details} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/Information" component={Information} />
            <Route path="/Payment" component={Payment} />
            <Route path="/Delivery" component={Delivery} />
            <Route component={Default} />
          </Switch>
        </Content>

        <div className={styles.footer}>
          <Foot />
        </div>
      </Layout>
    </Router>
  );
};

export default PageSetup;
