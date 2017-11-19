import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import logo from './img/logo2.png';
import phones from './img/banner-iphone-samsung.png';
import cables from './img/banner-cables.png';
import oeh from './img/banner-oeh.png';
import apple from './img/showcase-apple.png';
import samsung from './img/showcase-samsung.png';
import huawei from './img/showcase-huawei.png';


import { Layout, Menu, Icon, Input, Avatar, Button, Carousel, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ position: "fixed", zIndex: 3, width: "100%", boxShadow: "0px 2px 20px #404040" }}>
          <div className="logo">
            <img src={logo} alt="Logo for Principle" />
          </div>

          <Menu
            mode="horizontal"
            theme="light"
            className="menu"
            style={{ width: "300px", color: "#ffffff", fontSize: "10pt", top: "-50px", left: "210px", borderBottom: "#404040", position: "relative", color: "#404040" }}
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
            style={{ width: 200, position: "relative", left: "510px", top: "-115px" }}
            onSearch={value => console.log(value)}
          />
          <Avatar size="large" icon="user"
            style={{ position: "relative", left: "650px", top: "-100px" }} />
          <Button type="primary"
            style={{ position: "relative", left: "670px", top: "-115px" }}>
            Log In</Button>

        </Header>
        <Carousel >
          <div>
            <div style={{ height: "500px" }}>
              <img src={phones} style={{ height: "500px", marginLeft: "50px" }} />
              <h1 style={{ lineHeight: "20px", position: "relative", left: "15%", top: "-250px" }}>Premium Smartphones</h1>
              <h2 style={{ lineHeight: "20px", position: "relative", left: "15%", top: "-250px" }}>Everyday</h2>

            </div>
          </div>
          <div>
            <div style={{ height: "500px", background: "#000000" }}>
              <img src={oeh} style={{ height: "500px", position: "relative", left: "25%" }} />
              <h1 style={{ color: "#ffffff", lineHeight: "20px", position: "relative", top: "-250px", left: "-250px" }}>Block it Out.</h1>
              <h2 style={{ color: "#ffffff", lineHeight: "20px", position: "relative", top: "-250px", left: "-250px" }}>Noise Cancelling Headphones</h2>
            </div>
          </div>
          <div>
            <div style={{ height: "500px" }}>
              <img src={cables} style={{ height: "250px", position: "relative", left: "20%", top: "50%" }} />
              <h1 style={{ lineHeight: "20px", position: "relative", top: "-100px" }}>Color-Matched Cables</h1>
              <h2 style={{ lineHeight: "20px", position: "relative", top: "-100px" }}>Strong. Affordable. Yours.</h2>
            </div>
          </div>
        </Carousel>
        <Content style={{ padding: '20px 50px', background: "#ffffff" }}>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} style={{ paddingBottom: "20px", textAlign: "center" }}>
              <h1>Shop Phones by Brand</h1>
            </Col>
          </Row>
          <Row gutter={16} className="showcase-row">
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={apple} className="showcase-img" />
              </div>
            </Col>
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={samsung} className="showcase-img" />
              </div>
            </Col>
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={huawei} className="showcase-img" />
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} style={{ paddingBottom: "20px", textAlign: "center" }}>
              <h1>Shop Headphones by Brand</h1>
            </Col>
          </Row>
          <Row gutter={16}  className="showcase-row">
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={apple} className="showcase-img" />
              </div>
            </Col>
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={samsung} className="showcase-img" />
              </div>
            </Col>
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={huawei} className="showcase-img" />
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
              <Col xs={{ span: 24 }} style={{ paddingBottom: "20px", textAlign: "center" }}>
                <h1>Shop Cables by Type</h1>
              </Col>
          </Row>
          <Row gutter={16}  className="showcase-row" >
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={apple} className="showcase-img" />
              </div>
            </Col>
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={samsung} className="showcase-img" />
              </div>
            </Col>
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={huawei} className="showcase-img" />
              </div>
            </Col>
          </Row>          
        </Content>
        <Row style={{background: "#fff" ,textAlign: "center"}} className="bottom-search" >
            <Col span={24}>
              <h1 style={{position: "relative", top: "50px"}}>Or Search the Store</h1>
              <Search style={{ width: "50%", margin: "8% 20%"}} placeholder="Search" onSearch={value => console.log(value)} />
              <Button style={{position: "relative", left: "-19%" }}type="primary" icon="search">Search</Button>
            </Col>
          </Row>
          <Footer style={{ textAlign: 'center' }}>
            Chethana Wijesekera
        </Footer>
      </Layout>
        );
  }
}

export default App;
