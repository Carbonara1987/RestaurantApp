import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from "axios";

class ProductsComponent extends Component {
    state = {
        categories: [],
        products: []
    };
    componentDidMount() {
        axios.get('http://localhost/phpStormProjects/restaurantAppBackEnd/public/index.php/getCategories')
            .then(
                res => {
                    this.setState({ categories: res.data });
                }
                )

        axios.get('http://localhost/phpStormProjects/restaurantAppBackEnd/public/index.php/getProducts')
            .then(res => this.setState({ products: res.data }));


    };

    AddProductToCart (id, price)  {
        this.props.cart.productsID.push(id);
        this.props.cart.price.push(parseFloat(price));
        console.log(this.props.cart);
    };
    render() {
        return this.state.categories.map((category) => (
            <View key={category.id}>
                    <Text >{category.name}</Text>
                {this.state.products.map((product) => {
                    if(product.categoryID === category.id){
                        return (
                            <View>
                                <Text className="d-block">
                                    {product.name} - {product.price}
                                </Text>
                                <Text>
                                    {product.notes}
                                </Text>
                                <Button title={'Aggiungi'} onPress={e =>  this.AddProductToCart(product.id, product.price)}/>
                            </View>
                        )
                    } else {
                        return (
                            null
                        )
                    }
                })
                }
            </View>
        ));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProductsComponent;
