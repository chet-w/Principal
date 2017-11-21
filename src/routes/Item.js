import React, { Component } from 'react';

import Banner from '../components/Header';
import Slideshow from '../components/Slideshow';
import { Layout, Breadcrumb, Icon } from 'antd'

const { Content, Sider } = Layout;

class Item extends Component {
    render() {
        return (
            <Layout >
                <Banner />
                <Content style={{background: "#fff", position: "relative", top: "80px", padding: "0 50px"}}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                            <Icon type="home"/>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <Icon type="appstore-o"/><span>Products</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <Icon type="mobile"/><span>Phones</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Slideshow />
                </Content>
            </Layout>
        )
    }
}

export default Item;