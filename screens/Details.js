import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, BackHandler } from 'react-native';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import { myObj } from './StateDetail'

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedState: this.props.navigation.getParam('name')
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.navigate('StatesList');
        return true;
    }
    render() {
        return (
            <View>
                {myObj.map((value, k) => {
                    if (this.state.selectedState === value.stateName) {

                        return (
                            <View key={k}>
                                <Text style={styles.title}>Know the Indian states</Text>
                                <Text style={styles.text}>State: {value.stateName}</Text>
                                <Text style={styles.text}>Capital: {value.capital}</Text>
                                <Text style={styles.text}>Area: {value.Area}</Text>
                                <Text style={styles.text}>Population: {value.pop}</Text>
                                <Text style={styles.text}>Founded on: {value.date}</Text>
                                <Text style={styles.text}>Famous food/foods: {value.food}</Text>
                                <Text style={styles.text}>Tourist sites: {value.site}</Text>
                                <Text style={styles.text}>Language Spoken: {value.lan}</Text>
                                <Text style={styles.text}>Chief Minister: {value.cm}</Text>
                                <Text style={styles.text}>Governor: {value.gov}</Text>
                                <Text style={styles.text}>State flower: {value.sf}</Text>
                                <Text style={styles.text}>State animal: {value.sa}</Text>
                                <Text style={styles.text}>Note:- Population is as of 2021 estimates</Text>
                            </View>
                        )
                    }
                    else if (this.state.selectedState === value.unionName) {
                        if(value.cm){
                            return(<View key={k}>
                                <Text style={styles.title}>Know the Indian states</Text>
                                <Text style={styles.text}>Union Territory: {value.unionName}</Text>
                                <Text style={styles.text}>Capital: {value.capital}</Text>
                                <Text style={styles.text}>Area: {value.Area}</Text>
                                <Text style={styles.text}>Population: {value.pop}</Text>
                                <Text style={styles.text}>Founded on: {value.date}</Text>
                                <Text style={styles.text}>Famous food/foods: {value.food}</Text>
                                <Text style={styles.text}>Tourist sites: {value.site}</Text>
                                <Text style={styles.text}>Language Spoken: {value.lan}</Text>
                                <Text style={styles.text}>Chief Minister: {value.cm}</Text>
                                <Text style={styles.text}>Lieutenant Governor/Administrator: {value.gov}</Text>
                                <Text style={styles.text}>UT flower: {value.sf}</Text>
                                <Text style={styles.text}>UT animal: {value.sa}</Text>
                                <Text style={styles.text}>Note:- Population is as of 2021 estimates</Text>
                            </View>)
                        }
                        else{
                        return (
                            <View key={k}>
                                <Text style={styles.title}>Know the Indian states</Text>
                                <Text style={styles.text}>Union Territory: {value.unionName}</Text>
                                <Text style={styles.text}>Capital: {value.capital}</Text>
                                <Text style={styles.text}>Area: {value.Area}</Text>
                                <Text style={styles.text}>Population: {value.pop}</Text>
                                <Text style={styles.text}>Founded on: {value.date}</Text>
                                <Text style={styles.text}>Famous food/foods: {value.food}</Text>
                                <Text style={styles.text}>Tourist sites: {value.site}</Text>
                                <Text style={styles.text}>Language Spoken: {value.lan}</Text>
                                <Text style={styles.text}>Lieutenant Governor/Administrator: {value.gov}</Text>
                                <Text style={styles.text}>UT flower: {value.sf}</Text>
                                <Text style={styles.text}>UT animal: {value.sa}</Text>
                                <Text style={styles.text}>Note:- Population is as of 2021 estimates</Text>
                            </View>
                        )
                        }
                    }
                })}
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
        marginLeft: 20
    },

    title: {
        fontSize: 30,
        justifyContent: 'center',
        fontWeight: 'bold',
        marginTop: 60,
        marginLeft: 30
    },
})