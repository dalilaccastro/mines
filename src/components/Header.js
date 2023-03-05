import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity as TO} from 'react-native'
import Flag from './Flag'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TO onPress={props.onFlagPress} 
                style={styles.flagButton}>
                    <Flag bigger />
                </TO>
                <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
            </View>
            <TO style= {styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TO>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20
    },
    button: {
        backgroundColor: '#999',
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold'
    }
})