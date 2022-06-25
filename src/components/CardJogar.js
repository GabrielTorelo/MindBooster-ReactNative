import React from 'react';
import propTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';

function CardJogar() {
  return (
    <View style={styles.container}>
        <View style={[styles.cards, styles.radiusCard1]}>
            <Text style={styles.text}>Frente</Text> 
            <Text
                style={styles.cardText}
            >Brinquedo</Text>
        </View>
        <Text style={styles.cardTextView}>Brinquedo</Text>
        <View style={[styles.cards, styles.radiusCard2]}>
            <Text style={styles.text}>Verso</Text> 
            <Text
                style={styles.cardText}
            >Toy</Text>
        </View>
    </View>
  );
}

export default CardJogar;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    cards: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '37.78%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    radiusCard1: {
        borderBottomWidth: 1,
        borderBottomColor: '#ACACAC',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    radiusCard2: {
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    cardText: {
        width: '100%',
        height: '60%',
        color: '#414141',
        fontWeight: '700',
        fontSize: 28,
        textAlign: 'center',
        textAlignVertical: 'top',
    },
    cardTextView: {
        display: 'flex',
        position: 'absolute',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '100%',
        height: '74.56%',
        color: '#414141',
        zIndex: 1,
        fontSize: 28,
        fontWeight: '700',
    },
    text: {
        alignSelf: 'flex-start',
        marginLeft: 16,
        marginTop: 35,
        color: '#777777',
    },
});

CardJogar.propTypes = {
  data: propTypes.object,
}.isRequired;