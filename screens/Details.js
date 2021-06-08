import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { myObj } from './StateDetail'

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedState: this.props.navigation.getParam('name')
        }
    }
    render() {
        console.log(this.props.navigation.getParam('name'))
        return (
            <View>

                {console.log(myObj)}
                {myObj.map((value, k) => {
                    if (this.state.selectedState === value.stateName) {
                        return (
                            <View key={k}>
                                <Text style={styles.title}>Know the Indian states</Text>
                                <Text style={styles.text}>State: {value.stateName}</Text>
                                <Text style={styles.text}>Capital: {value.capital}</Text>
                                <Text style={styles.text}>Area: {value.Area}</Text>
                                <Text style={styles.text}>Founded on: {value.date}</Text>
                                <Text style={styles.text}>Famous food/foods: {value.food}</Text>
                                <Text style={styles.text}>Tourist sites: {value.site}</Text>
                            </View>
        )
    }
})}
<TouchableOpacity style={styles.button}
    onPress={() => this.props.navigation.navigate('StatesList')}>
    <Text>Back</Text>
</TouchableOpacity>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#ff9800',
        shadowColor: '#000',
        marginLeft: 25,
        marginTop: 20
    },
    text: {
        marginTop: 10, 
        fontWeight: 'bold',
        marginLeft:20
    },
    
    title: {
        fontSize: 30,
        justifyContent: 'center',
        fontWeight: 'bold',
        marginTop: 60,
        marginLeft:30
    },
})