import React, {Component} from 'react';
import {  View, Button, Alert } from 'react-native';
import axios from 'axios';


class CartComponent extends Component {
    sendOrder = () => {
        var totalPrices = this.props.cart.price;
        var price =0;
        for(var i in totalPrices) {
            price += totalPrices[i];
        }
        axios.post('http://localhost/phpStormProjects/restaurantAppBackEnd/public/index.php/createOrder', {
            tableId: this.props.cart.tableId,
            productsID: this.props.cart.productsID.join(','),
            total: price,
            completed: false,
            payed: false
        })
    };

    render() {
        return (
            <View>
                <Button onPress={this.sendOrder} title={'Invia ordine'} />
            </View>
        );
    }
}

export default CartComponent;
