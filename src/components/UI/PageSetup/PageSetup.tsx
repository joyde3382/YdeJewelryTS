import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ProductList from "../../Products/ProductList/ProductList";
import Details from "../../Products/Details";
import About from "../../About/About";
import Cart from "../../Cart/Cart";
import Default from "../../Default";
import { Layout } from "antd";
import Frontpage from "../Frontpage/Frontpage";

import styles from "./PageSetup.module.scss";

const { Header, Footer, Sider, Content } = Layout;

const PageSetup: React.FC = () => {
  return (
    <Router>
      <Layout className={styles.container}>
        <Header className={styles.header}>
          <Navbar />
        </Header>

        <Content className={styles.mainContent}>
          <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route path="/products" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </Content>
        <Footer className={styles.footer}>Footer</Footer>
      </Layout>
    </Router>
  );
};

export default PageSetup;
