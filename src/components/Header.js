import React, { Component } from 'react';
import { Layout, Menu, Input, Avatar, Button } from 'antd';
import logo from '../img/logo2.png';

const { Header } = Layout;
const { Search } = Input;

class Banner extends Component {
    render() {

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
            top: "-115px"
        }

        const avatar = {
            position: "relative",
            left: "650px",
            top: "-100px"
        }

        const button = {
            position: "relative",
            left: "670px",
            top: "-115px"
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
                <Avatar size="large" icon="user" style={avatar} />
                <Button type="primary" style={button}>Log In</Button>
            </Header>
        );
    }
}

export default Banner;


