import React, { Component } from 'react';
import { Layout, Menu, Input, Avatar, Button, Badge, Dropdown, Icon } from 'antd';
import logo from '../img/logo2.png';

const ButtonGroup = Button.Group;
const { Header } = Layout;
const { Search } = Input;

class Banner extends Component {

    state = {
        cartCount: this.props.cartCount
    }

    render() {

        console.log("header cartcount: " + this.props.cartCount);
        /**Styles */

        const header = {
            position: "fixed",
            zIndex: 3,
            width: "100%",
            boxShadow: "0px 2px 20px #404040"
        }

        const menu = {
            width: "300px",
            color: "#ffffff",
            fontSize: "10pt",
            top: "-50px",
            left: "210px",
            borderBottom: "#404040",
            position: "relative",
            color: "#404040"
        }

        const menuItem = {
            padding: "0 25px",
            top: "-5px"
        }

        const search = {
            width: 200,
            position: "relative",
            left: "510px",
            top: "-110px"
        }

        const avatar = {
            position: "relative"
        }

        const button = {
            position: "relative",
            top: "-63px",
            left: "55px"
        };


        return (
            <Header style={header}>
                <div className="logo">
                    <img src={logo} alt="Logo for Principle" />
                </div>
                <Menu mode="horizontal" theme="light" className="menu" style={menu}>
                    <Menu.Item key="home" style={menuItem}>Home</Menu.Item>
                    <Menu.Item key="phones" style={menuItem}>Phones</Menu.Item>
                    <Menu.Item key="extras" style={menuItem}>Extras</Menu.Item>
                </Menu>
                <Search placeholder="Search" style={search} />
                <div className="user">
                    <Badge count={this.props.cartCount}>
                        <Avatar size="large" icon="user" style={avatar} />
                    </Badge>
                </div>
                <div className="account-buttons">
                    <ButtonGroup>
                        <Button type="primary">Log In</Button>
                        <Button>Sign Up</Button>
                    </ButtonGroup>
                </div>

            </Header>
        );
    }
}

export default Banner;


