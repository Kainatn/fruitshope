import React, { Component } from 'react';
import { Layout, InputNumber, Typography } from 'antd';
import './Shop.css'
import MainCard from './MainCard';

const { Title } = Typography;
const { Header, Content } = Layout;

export class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appleRupee: 0,
            orangeRupee: 0,
            bananaRupee: 0,
            totalBill: 0,
            userInput: null,


        }
    }

    //Get input Values and Mulitply by its price and get total of apple 

    getAppleRupees = (value) => {
        if (value >= 0) {
            let appleRupee = value * 10;
            const { userInput, orangeRupee, bananaRupee } = this.state;
            let total = appleRupee + orangeRupee + bananaRupee;
            if (userInput >= total) {
                this.setState({
                    appleRupee: appleRupee,
                    totalBill: total
                })
            }
            else {
                alert('You have insificient balance');
            }

        }

    }

    //Get input Values and Mulitply by its price and get total of orange 

    getOrangeRupees = (value) => {
        if (value >= 0) {
            let orangeRupee = value * 15;
            const { userInput, appleRupee, bananaRupee } = this.state;
            let total = appleRupee + orangeRupee + bananaRupee;
            if (userInput >= total) {
                this.setState({
                    orangeRupee: orangeRupee,
                    totalBill: total
                })
            }
            else {
                alert('You have insificient balance');
            }

        }
    }

    //Get input Values and Mulitply by its price and get total of banana 

    getBananaRupees = (value) => {
        if (value >= 0) {
            let bananaRupee = value * 20;
            const { userInput, appleRupee, orangeRupee } = this.state;
            let total = appleRupee + orangeRupee + bananaRupee;
            if (userInput >= total) {
                this.setState({
                    bananaRupee: bananaRupee,
                    totalBill: total
                })
            }
            else {
                alert('You have insificient balance');
            }

        }
    }
    onChange = (value) => {
        console.log('user input inside handle ', value);
        this.setState({
            userInput: value,
        })
    }

    render() {
        console.log(this.state.appleRupee);
        console.log(this.state.userInput);
        console.log(this.state.totalBill);


        return (
            <Layout>
                <Header>
                    <Title level={2}>Fruit Shop</Title>
                </Header>
                <Content className="input-container">
                    <div>
                        <span>I have Rs.</span> <InputNumber type="number" min={1} max={this.value} onChange={this.onChange} />
                        <div className="total"><Title level={3}> Your Total is {this.state.totalBill}</Title></div>
                    </div>
                </Content>
                <Content className="main-container">
                    <MainCard imgUrl={require('./../images/apple.png')} Title={'Apple'} price={'Rs.10'} text={'apple'} Rupees={this.getAppleRupees} user={this.onChange} />
                    <MainCard imgUrl={require('./../images/Orange.png')} Title={'Orange'} price={'Rs.15'} text={'orange'} Rupees={this.getOrangeRupees} />
                    <MainCard imgUrl={require('./../images/banana.png')} Title={'Banana'} price={'Rs.20'} text={'banana'} Rupees={this.getBananaRupees} />
                </Content>
            </Layout>
        );
    }
}

export default Shop;
