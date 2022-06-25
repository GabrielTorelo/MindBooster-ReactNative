import React from 'react';
import propTypes from 'prop-types';
import {StyleSheet, View, Text, TextInput} from 'react-native';

function CardNewCard() {
  return (
    <View style={styles.container}>
        <View style={[styles.cards, styles.radiusCard1]}>
            <Text style={styles.text}>Frente</Text> 
            <TextInput
                editable
                style={styles.cardText}
                placeholder={'Digite aqui'}
            ></TextInput>
        </View>
        <View style={[styles.cards, styles.radiusCard2]}>
            <Text style={styles.text}>Verso</Text> 
            <TextInput 
                editable
                placeholder={'Digite aqui'}
                style={styles.cardText}
            ></TextInput>
        </View>
    </View>
  );
}

export default CardNewCard;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 9.5,
    },
    cards: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        width: '100%',
        height: 127,
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
    text: {
        alignSelf: 'flex-start',
        marginLeft: 16,
        marginTop: 13,
        color: '#777777',
    },
});

CardNewCard.propTypes = {
  data: propTypes.object,
}.isRequired;
