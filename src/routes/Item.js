import React, { Component } from 'react';

import Banner from '../components/Header';
import Slideshow from '../components/Slideshow';
import img1 from '../img/Products/iPhoneX/show1.png';
import img2 from '../img/Products/iPhoneX/show2.png';
import img3 from '../img/Products/iPhoneX/show3.png';
import img4 from '../img/Products/iPhoneX/show4.png';
import img5 from '../img/Products/iPhoneX/show5.png';
import img6 from '../img/Products/iPhoneX/show6.png';
import img7 from '../img/Products/iPhoneX/show7.png';
import img8 from '../img/Products/iPhoneX/show8.png';

import { Layout, Breadcrumb, Icon, Carousel, Row, Col, Form, Select, Button, Table, Rate  } from 'antd'

const { Content, Sider } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;

const showGrey = [img1, img2, img3, img4];
const showSilver = [img5, img6, img7, img8];

const reviewCol = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    render: stars => <Rate disabled defaultValue={stars} />
  }, {
    title: 'Comments',
    dataIndex: 'comments',
    key: 'comments',
  }];

  const reviewData = [{
    key: '1',
    name: 'Chet',
    rating: 5,
    comments: 'good phone'
  }];


class Item extends Component {

    constructor(){
        super();
        this.state = {
            price: 1799,
            currentShow: showGrey
        };
    }



    handlePriceChange = (e) => {
        var capac = parseInt(e);
        if(isNaN(capac)){
            return;
        }
        if(capac == 64){
            this.setState({price: 1799});
        }if(capac == 256){
            this.setState({price: 2099});
        }
    }

    handleColorChange = (e) => {
        if(e == 'silver'){
            this.setState({
                currentShow: showSilver
            });
        }else{
            this.setState({
                currentShow: showGrey
            });
        }
    }

    render() {
        return (
            <Layout >
                <Banner />
                <Content style={{ background: "#fff", position: "relative", top: "70px", padding: "0 50px" }}>
                    <Breadcrumb style={{ paddingTop: "10px" }}>
                        <Breadcrumb.Item href="">
                            <Icon type="home" />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <Icon type="appstore-o" /><span>Products</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <Icon type="mobile" /><span>Phones</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col xs={{ span: 12 }}>
                            <Carousel className="product-carousel">
                                <div>
                                    <div style={{ height: "350px", position: "relative", left: "25%", marginBottom: "50px" }}>
                                        <img src={this.state.currentShow[0]} style={{ height: "100%" }} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{ height: "350px", position: "relative", left: "25%", marginBottom: "50px" }}>
                                        <img src={this.state.currentShow[1]} style={{ height: "100%" }} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{ height: "350px", position: "relative", left: "25%", marginBottom: "50px" }}>
                                        <img src={this.state.currentShow[2]} style={{ height: "100%" }} />
                                    </div>
                                </div>
                                <div>
                                    <div style={{ height: "350px", position: "relative", left: "25%", marginBottom: "50px" }}>
                                        <img src={this.state.currentShow[3]} style={{ height: "100%" }} />
                                    </div>
                                </div>
                            </Carousel>
                        </Col>
                        <Col xs={{ span: 12 }} style={{ border: "none" }}>
                            <div className="product-info-opening">
                                <h1>Apple iPhone X</h1>
                                <span className="model-number">Model A1578</span>
                                <h3>Description</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, in eos graeco aperiam adipiscing, vix homero eripuit periculis eu. Case erat doming usu ex, eu sit inimicus democritum, nam consetetur percipitur ad. Et ignota quidam dissentias pri. Odio feugait in eam, eos vero populo molestiae ex, simul aperiri vituperata eos id. Euismod similique ex quo. Cum delenit perfecto contentiones eu. Sit maiorum recusabo id, ea vim eros lorem sadipscing.
                                </p>
                                <h3>Configuration</h3>
                                <p>Choose your recipe</p>
                                <div className="config-form">
                                    <Form layout="inline">
                                        <FormItem label="Color">
                                            <Select defaultValue="Space Grey" onChange={this.handleColorChange}>
                                                <Option value="silver">Silver</Option>
                                                <Option value="grey">Space Grey</Option>
                                            </Select>
                                        </FormItem>
                                        <FormItem label="Capacity">
                                            <Select defaultValue="64" onChange={this.handlePriceChange}>
                                                <Option value="64">64 GB</Option>
                                                <Option value="256">256 GB</Option>
                                            </Select>
                                        </FormItem>
                                        <h1 className="price">${this.state.price}</h1>
                                        <FormItem>
                                            <Button type="primary" htmlType="submit"><Icon type="shopping-cart"/>Add to Cart</Button>
                                        </FormItem>
                                    </Form>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="product-reviews-row">
                        <Col xs={{span: 24 }}>
                            <div className="product-reviews-header">
                                <h1>Reviews</h1>
                                <Button type="default"><Icon type="star-o"/>Add a Review</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="product-reviews-body">
                        <Col xs={{span: 24}}>
                            <Table dataSource={reviewData} columns={reviewCol} />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

export default Item;