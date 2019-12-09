import React, { Component } from 'react';
import { Layout, InputNumber, Typography } from 'antd';
import './Shop.css'
import MainCard from './MainCard';

const { Title } = Typography;
const { Header, Content } = Layout;

export class Shop extends Component {

    constructor() {
        super();
        this.state = {
            appleRupee: '',
            orangeRupee: '',
            bananaRupee: '',
            totalBill: "",
            userInput: '',


        }
    }

    //Get input Values and Mulitply by its price


    getAppleRupees = (value) => {
        const { userInput, appleRupee } = this.state;
        if (userInput > appleRupee || userInput == null) {
            alert("you have insufficient balance");
        }

        this.setState({
            appleRupee: value * 10,
            bill: this.sumInput()
        });

    }
    getOrangeRupees = (value) => {
        const { userInput, orangeRupee } = this.state;
        // if (userInput < orangeRupee || userInput == null) {
        //     alert("you have insufitiant balance")
        // }
        this.setState({
            orangeRupee: value * 15,
        })
        this.sumInput();
    }
    getBananaRupees = (value) => {
        const { userInput, bananaRupee } = this.state;
        // if (userInput < bananaRupee || userInput == null) {
        //     alert("you have insufitiant balance")
        // }
        this.setState({
            bananaRupee: value * 20,
        })

        this.sumInput();
    }
    //Sum All inputs Values 
    sumInput = () => {
        let { appleRupee, orangeRupee, bananaRupee, totalBill } = this.state;
        this.setState({
            totalBill: appleRupee + orangeRupee + bananaRupee,
        })

    }

    onChange = (value) => {
        console.log('user input inside handle ', value);
        this.setState({
            userInput: value,
        })
    }
    componentWillMount() {
        this.sumInput();
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
                        <span>I have Rs.</span> <InputNumber min={1} max={1000} onChange={this.onChange} />
                        <div className="total"><Title level={3}> Your Total is {this.state.totalBill}</Title></div>
                    </div>
                </Content>
                <Content className="main-container">
                    <MainCard imgUrl={require('./../images/apple.png')} Title={'Apple'} price={'Rs.10'} text={'apple'} Rupees={this.getAppleRupees} Bill={this.sumInput} user={this.onChange} />
                    <MainCard imgUrl={require('./../images/Orange.png')} Title={'Orange'} price={'Rs.15'} text={'orange'} Rupees={this.getOrangeRupees} Bill={this.sumInput} />
                    <MainCard imgUrl={require('./../images/banana.png')} Title={'Banana'} price={'Rs.20'} text={'banana'} Rupees={this.getBananaRupees} Bill={this.sumInput} />
                </Content>
            </Layout>
        );
    }
}

export default Shop;
