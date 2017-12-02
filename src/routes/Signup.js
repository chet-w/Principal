import React, { Component } from 'react';
import { Layout, Row, Col, Breadcrumb, Icon, Form, Select, AutoComplete, Input } from 'antd';
import Banner from '../components/Header';
import Register from '../components/Register';

const { Content } = Layout;

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class Signup extends Component {

    render() {

        return (
            <Layout>
                <Banner />
                <Content className="page-body">
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                            <Icon type="home" />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <Icon type="user-add" /><span>Sign Up</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="heading-row">
                        <Col xs={{span: 24}}>
                            <h1>Sign Up</h1>
                            <p>Sign up for an account with Principal to start purchasing from our range of quality Smartphones and Accessories.</p>
                            <br/>
                        </Col>
                    </Row>
                    <Row className="signup-form-row">
                        <Col xs={{span: 20}}>
                            <Register/>
                        </Col>
                        <Col xs={{span: 4}}>
                            <Icon type='user-add' className="sign-up-img"/>
                        </Col>
                    </Row>

                </Content>
            </Layout>
        );
    }

}

export default Signup;

