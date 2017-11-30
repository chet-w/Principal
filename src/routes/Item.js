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

import { Layout, Breadcrumb, Icon, Carousel, Row, Col, Form, Select, Button, Table, Rate, Tabs, notification, Popover, Input } from 'antd'

const { Content, Sider } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;

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

const reviewData = [];


class Item extends Component {

    constructor() {
        super();
        this.state = {
            price: 1799,
            currentShow: showGrey,
            addingToCart: false,
            cartCount: 0,
            newReviewVisible: false
        };
    }

    openNotification = () => {
        notification.open({
            message: 'Item Added!',
            description: 'Your Item has been added to your cart.',
            icon: <Icon type="check" />
        });
    };

    handlePriceChange = (e) => {
        var capac = parseInt(e);
        if (isNaN(capac)) {
            return;
        }
        if (capac == 64) {
            this.setState({ price: 1799 });
        } if (capac == 256) {
            this.setState({ price: 2099 });
        }
    }

    handleColorChange = (e) => {
        if (e == 'silver') {
            this.setState({
                currentShow: showSilver
            });
        } else {
            this.setState({
                currentShow: showGrey
            });
        }
    }

    handleReviewVisibilityChange = () => {
        if(this.state.newReviewVisible === false){
            this.setState({
                newReviewVisible: true
            });
        }else{
            this.setState({
                newReviewVisible: false
            });
        }

    }


    handleAddToCart = () => {
        var icon = document.getElementsByClassName('add-to-cart')[0];
        var button = document.getElementsByClassName('add-button')[0];

        this.setState({
            addingToCart: true
        });
        button.childNodes[1].textContent = "Adding...";
        icon.classList.add('hide');
        setTimeout(() => {
            this.setState({
                addingToCart: false,
                cartCount: this.state.cartCount + 1

            });
            icon.classList.remove('hide');
            button.childNodes[1].textContent = "Add to Cart";
            this.openNotification();
        }, 2000);


    }

    submitNewReview = () => {
        var rName = document.getElementsByClassName('new-review-name')[0].value;
        var rRate = document.getElementsByClassName('new-review-rating')[0].childNodes;
        var rText = document.getElementsByClassName('new-review-text')[0].value;
        var rateCount = 0;

        if(rName || rText != ""){
            rRate.forEach(function(element) {
                if(element.classList.contains('ant-rate-star-full')){
                    rateCount++;
                }
            });
    
            reviewData.push({
                key: reviewData.length + 1,
                name: rName,
                rating: rateCount,
                comments: rText,
            });
        }

        
        this.handleReviewVisibilityChange();
    }



    render() {

        var newReviewContent = (
            <div>
                <Rate className="new-review-rating"/>
                <Input className="new-review-name" placeholder="Name"/>
                <TextArea className="new-review-text" rows={6} size="large" placeholder="Your thoughts..."/>
                <ul className="popover-buttons">
                    <li><Button className="new-review-submit" type="primary" onClick={this.submitNewReview}>Submit</Button></li>
                    <li><Button className="new-review-close" type="default" onClick={this.handleReviewVisibilityChange}>Close</Button></li>
                </ul>
            </div>
        );

        return (
            <Layout >
                <Banner cartCount={this.state.cartCount} />
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
                                <div className="tabs">
                                    <Tabs defaultActiveKey="1">
                                        <TabPane tab="Description" key="1">
                                            <p>Lorem ipsum dolor sit amet, in eos graeco aperiam adipiscing, vix homero eripuit periculis eu. Case erat doming usu ex, eu sit inimicus democritum, nam consetetur percipitur ad. Et ignota quidam dissentias pri. Odio feugait in eam, eos vero populo molestiae ex, simul aperiri vituperata eos id. Euismod similique ex quo. Cum delenit perfecto contentiones eu. Sit maiorum recusabo id, ea vim eros lorem sadipscing.</p>
                                        </TabPane>
                                        <TabPane tab="Specs" key="2">
                                            <ul>
                                                <li>5.8" Retina HD display with True Tone.</li>
                                                <li>A11 Bionic Processor.</li>
                                                <li>IP67 water & dust resistance.</li>
                                                <li>12-megapixel dual cameras with OIS.</li>
                                                <li>4K video recording at 60FPS.</li>
                                                <li>7-megapixel FaceTime HD camera with Retina Flash.</li>
                                                <li>Touch ID.</li>
                                                <li>Qi Wireless charging.</li>
                                            </ul>
                                        </TabPane>
                                    </Tabs>
                                </div>
                                <div className="config-panel">
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
                                                <Button className="add-button" type="primary" htmlType="submit" loading={this.state.addingToCart} onClick={this.handleAddToCart}><Icon className="add-to-cart" type="shopping-cart" />Add to Cart</Button>
                                            </FormItem>
                                        </Form>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="product-reviews-row">
                        <Col xs={{ span: 6 }}>
                            <div className="product-reviews-header">
                                <h1>Reviews</h1>
                                <Popover className="popover-new-review" content={newReviewContent} title="New Review" placement="right" trigger="click" visible={this.state.newReviewVisible}>
                                    <Button className="new-review" type="default" onClick={this.handleReviewVisibilityChange}><Icon type="star-o" />Add a Review</Button>
                                </Popover>
                            </div>
                        </Col>
                    </Row>






                    <Row className="product-reviews-body">
                        <Col xs={{ span: 24 }}>
                            <Table dataSource={reviewData} columns={reviewCol} />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

export default Item;