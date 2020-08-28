import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TableComponent from "./components/TableComponent";
import ProductsComponent from "./components/ProductsComponent";
import CartComponent from "./components/CartComponent";

class App extends Component{
    state = {
    cart: {
      tableId: '',
      productsID: [],
      price: []
    }
  };


   render() {
       return (
           <View style={styles.container}>
               <Text>Open up App.js to start working on your app!</Text>
               <TableComponent cart={this.state.cart}></TableComponent>
               <ProductsComponent cart={this.state.cart}></ProductsComponent>
               <CartComponent  cart={this.state.cart}></CartComponent>
               <StatusBar style="auto" />
           </View>
       );
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

export default App;
