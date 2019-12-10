import React, { Component } from 'react';
import { Card, InputNumber, Typography } from 'antd';
import { PropTypes } from 'prop-types';
const { Title } = Typography;
export class MainCard extends Component {


    render() {
        return (
            <div>
                <Card title={this.props.price} style={{ width: 240 }} bodyStyle={{ padding: 20 }}>
                    <div className="custom-image">
                        <img alt={this.props.text} width="150px" src={this.props.imgUrl} />
                    </div>
                    <div className="custom-card">
                        <Title level={3}>{this.props.Title} </Title>
                        <form>
                            <InputNumber min={0} max={100} onChange={this.props.Rupees}  type="number" />
                        </form>
                    </div>
                </Card>
            </div>
        );
    }
}

export default MainCard;

MainCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    Rupees: PropTypes.func,
    text: PropTypes.string.isRequired,
    Bill: PropTypes.func,
}