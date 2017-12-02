import React, { Component } from 'react';


class SignUpSuccess extends Component {

    render(){
        return(
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
                    <Breadcrumb.Item href="">
                        <Icon type="check" /><span>Success!</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Row className="heading-row">
                    <Col xs={{span: 24}}>
                        <h1>Sign Up - Success!</h1>
                        <p>Great Job! Your're now all set up to start shopping at Principal.</p>
                    </Col>
                </Row>
                <Row className="signup-form-row">
                    <Col xs={{span: 20}}>
                        <Icon type='user-add' className="sign-up-img"/>
                    </Col>
                    
                </Row>

            </Content>
        </Layout>
        )
    }
}