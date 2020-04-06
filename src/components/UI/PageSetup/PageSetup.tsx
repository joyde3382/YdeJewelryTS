import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../Navigation/Navbar/Navbar";
import ProductList from "../../Products/ProductList/ProductList";
import Details from "../../Products/Details";
import About from "../../About/About";
import Cart from "../../Cart/Cart";
import Default from "../../Default";
import { Layout } from "antd";
import Frontpage from "../Frontpage/Frontpage";
import Foot from "../Foot/Foot";

import styles from "./PageSetup.module.scss";
import ProductsPage from "../ProductsPage/ProductsPage";

const { Header, Footer, Sider, Content } = Layout;

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
            <Route exact path="/products" component={ProductList} />
            <Route
              path="/products/jewelry"
              render={(props) => (
                <ProductsPage {...props} currentCategory="jewelry" />
              )}
              // component={ProductsPage}
            />
            <Route
              path="/products/paintings"
              render={(props) => (
                <ProductsPage {...props} currentCategory="paintings" />
              )}
            />
            <Route
              path="/products/ceramics"
              render={(props) => (
                <ProductsPage {...props} currentCategory="ceramics" />
              )}
            />
            <Route path="/details" component={Details} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
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
