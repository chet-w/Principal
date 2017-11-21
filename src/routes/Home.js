import React, { Component } from 'react';

import Banner from '../components/Header';
import Slideshow from '../components/Slideshow';

import '../App.css';
import 'antd/dist/antd.min.css';
import logo from '../img/logo2.png';
import phones from '../img/banner-iphone-samsung.png';
import cables from '../img/banner-cables.png';
import oeh from '../img/banner-oeh.png';
import apple from '../img/showcase-apple.png';
import samsung from '../img/showcase-samsung.png';
import huawei from '../img/showcase-huawei.png';
import bose from '../img/showcase-bose.png';
import beats from '../img/showcase-beats.png';
import jaybird from '../img/showcase-jaybird.png';
import lightning from '../img/showcase-lightning.png';
import micro from '../img/showcase-micro.png';
import usbc from '../img/showcase-usbc.png';


import { Layout, Menu, Icon, Input, Avatar, Button, Carousel, Row, Col } from 'antd';
const { Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class Home extends Component {
  render() {
    return (
      <Layout className="layout">
        <Banner />
        <Slideshow />
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
                <img src={bose} className="showcase-img" />
              </div>
            </Col>
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={beats} className="showcase-img" />
              </div>
            </Col>
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={jaybird} className="showcase-img" />
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
                <img src={lightning} className="showcase-img" />
              </div>
            </Col>
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={micro} className="showcase-img" />
              </div>
            </Col>
            <Col xs={{ span: 8 }}>
              <div className="showcase-block">
                <img src={usbc} className="showcase-img" />
              </div>
            </Col>
          </Row>          
        </Content>
        <Row style={{background: "#fff" ,textAlign: "center"}} className="bottom-search" >
            <Col span={24}>
              <h1 style={{position: "relative", top: "50px"}}>Or Search the Store</h1>
              <Search style={{ width: "50%", margin: "8% 20%"}} placeholder="Search" onSearch={value => console.log(value)} />
            </Col>
          </Row>
          <Footer style={{ textAlign: 'center' }}>
            Chethana Wijesekera
        </Footer>
      </Layout>
        );
  }
}

export default Home;
