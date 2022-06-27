import * as React from 'react';
import propTypes from 'prop-types';
import firebase from '../config/firebase';
import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';

const database = firebase.firestore();

function CardMyCollection(props) {
  const deleteCollection = () => {
    database.collection(props.id).doc(props.i.id).delete().then(() => {
      props.n.navigation.navigate('Mycol')
    })};
  const removeCollectionAlert = () =>
    Alert.alert(
      '',
      'Você tem certeza que deseja excluir essa coleção?',
      [
        {
          text: 'SIM',
          onPress: deleteCollection,
        },
        {
          
        },
        { text: 'CANCELAR'}
      ]
    );
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
            <Image
                style={styles.cardImage}
                // source={{uri: 'https://imagepng.org/wp-content/uploads/2017/10/bola.png'}}
                // source={{uri: '../images/' + props.i.image}}
                source={{uri: props.i.image, width:79,height:78}}
                // source={require('../images/Image-1.png')}
            />
            {/* {console.log(typeof props.i.image)}
            {console.log('../images/' + props.i.image)} */}
            <Text style={styles.cardText}>{props.i.nome}</Text>
        </View>
        <View style={styles.actionButtons}>
            <Ionicons
                name='create'
                style={styles.cardEdit}
                onPress={() => props.n.navigation.navigate('NewCollection', {idCol: props.i.id, idUser: props.id})}
            ></Ionicons>
            <Ionicons 
                name='trash'
                style={styles.cardTrash}
                onPress={removeCollectionAlert}
            ></Ionicons>
        </View>
    </View>
  );
}

export default CardMyCollection;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '90%',
        height: 127,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 9.5,
        marginBottom: 9.5,
        borderRadius: 10,
    },
    cardText: {
        color: '#27aca7',
        fontWeight: '700',
        fontSize: 36,
        alignSelf: 'center',
    },
    cardImage: {
        marginRight: '7%',
        marginLeft: '5%',
    },
    actionButtons: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardEdit: {
        color: '#4472C4',
        flex: 2,
        fontSize: 37,
    },
    cardTrash: {
        color: '#FF0000',
        flex: 1,
        fontSize: 37,
    },
});

CardMyCollection.propTypes = {
  data: propTypes.object,
}.isRequired;
