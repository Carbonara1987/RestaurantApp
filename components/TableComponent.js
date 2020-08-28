import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Picker
} from 'react-native';
import axios from 'axios';
import PickerItem from "react-native-web/src/exports/Picker/PickerItem";


class TableComponent extends Component {
    state= {
            tables: []
        }


    componentDidMount() {
            axios.get('http://localhost/phpStormProjects/restaurantAppBackEnd/public/index.php/getTables')
                .then(res => this.setState({tables: res.data}) );
    }

    render() {
        let  tableItems = this.state.tables.map((table) => {
            return (<PickerItem label={table.number} key={table.id} value={table.id}>{table.number}</PickerItem>);
        });
        var  cart = this.props.cart;
        return (
            <View >
                <Picker onChange={(e) => cart.tableId = e.target.value}>
                    {tableItems}
                </Picker>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    table: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TableComponent;
