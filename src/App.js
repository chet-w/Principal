import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import logo from './img/logo1.png';

import { Layout, Menu, Icon, Input, Avatar, Button, Carousel, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ position: "fixed", zIndex: 3, width: "100%" }}>
          <div className="logo">
            <img src={logo} alt="Logo for Principle" />
          </div>

          <Menu
            mode="horizontal"
            theme="light"
            className="menu"
            style={{ width: "300px", background: "#404040", color: "#ffffff", fontSize: "10pt", top: "-50px", left: "210px", borderBottom: "#404040", position: "relative", }}
          >
            <Menu.Item key="home" style={{ padding: "0 25px", top: "-5px" }}>
              Home
            </Menu.Item>
            <Menu.Item key="phones" style={{ padding: "0 25px", top: "-5px" }}>
              Phones
            </Menu.Item>
            <Menu.Item key="extras" style={{ padding: "0 25px", top: "-5px" }}>
              Extras
            </Menu.Item>
          </Menu>
          <Search
            placeholder="Search"
            style={{ width: 200, position: "relative", left: "500px", top: "-115px" }}
            onSearch={value => console.log(value)}
          />
          <Avatar size="large" icon="user"
            style={{ position: "relative", left: "650px", top: "-100px" }} />
          <Button type="primary"
            style={{ position: "relative", left: "670px", top: "-115px" }}>
            Log In</Button>

        </Header>
        <Carousel autoplay="true">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <Content style={{ padding: '10px 50px' }}>
          <Row>
            <Col style={{border: "solid"}} xs={{span: 24}}>
              <h1>What We Do</h1>
            </Col>
            
          </Row>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Chethana Wijesekera
        </Footer>
      </Layout>
    );
  }
}

export default App;
