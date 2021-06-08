import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { states } from '../utiles/states'


export default class StatesList extends Component {
    constructor() {
        super()
        this.state = {
            query: ''
        }
    }
    search = (text) => {
        this.setState({
            query: text
        })
    }
    onSelect = (suggestion) => {
        console.log(suggestion) 
    }
    render() {
        const { query } = this.state;
        const data = states;

        const suggestions = [
            { text: 'suggestion1', anotherProperty: 'value' },
            { text: 'suggestion2', anotherProperty: 'value2' }
        ]
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView>
                    <View>
                        <Text style={styles.title}>Know the Indian states</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        {states.map((val, k) => {

                            return (
                                <Text style={{marginTop: 10 }} key={k}
                                    onPress={() => this.props.navigation.navigate('Details', { name: val })}>{val} </Text>

                            )
                        })}
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <Text>Back</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

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
    title: {
        fontSize: 30,
        justifyContent: 'center',
        fontWeight: 'bold',
        paddingTop: 90,
        
    },
    textInput: {
        width: "95%",
        height: 35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
})