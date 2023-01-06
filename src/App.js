import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./component";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route path={"/"} exact>
                <Homepage />
              </Route>
              <Route path={"/exchanges"} exact>
                <Exchanges />
              </Route>
              <Route path={"/cryptocurrencies"} exact>
                <Cryptocurrencies />
              </Route>
              <Route path={"/crypto/:coinId"} exact>
                <CryptoDetails />
              </Route>
              <Route path={"/news"} exact>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br /> All rights reserved
          </Typography.Title>
          <Space>
            <Link to={"/"}>Home</Link>
            <Link to={"/exchanges"}>Exchanges</Link>
            <Link to={"/news"}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
