import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{
                        backgroundColor: 'orange', alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={styles.title}>Know the Indian states</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white', height: 150, alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ marginTop: 30, fontWeight: 'bold', fontSize: 20 }}>To know about the States click the proceed button</Text>
                        <Text style={{ marginTop: 30, fontWeight: 'bold', fontSize: 20 }}>About India</Text>
                    </View>
                    <View style={{
                        width: Dimensions.get('window').width,
                        height: 400, backgroundColor: 'green', alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            marginTop: 20, fontWeight: 'bold', fontSize: 20, alignItems: 'center',marginLeft:10
                        }}>India is located in the center of South Asia.
                            In world, India is the seventh largest country by area and the second most populated country after China.
                            India takes honour in being the largest democracy in the world.
                            India is a diverse country with diverse cultures, languages, climates and geography.
                            India is a federation under republic government governed under parliamentary system.
                            There are 28 states and 8 union territories in India.
                            Its southern part is a peninsular plateau.
                The national capital of India is Delhi.</Text>
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('StatesList')}
                    >
                        <Text style={{fontWeight:'bold',fontSize:20}}>Proceed</Text></TouchableOpacity>
                </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    title: {
        width: Dimensions.get('window').width,
        height: 200,
        alignSelf: 'center',
        fontSize: 30,
        justifyContent: 'center',
        fontWeight: 'bold',
        paddingTop: 100,
        paddingLeft: 20
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginLeft: 100,
        marginTop:10,
        
    },
})
