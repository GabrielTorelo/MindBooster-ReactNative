import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import firebase from '../config/firebase';
import {FAB} from 'react-native-paper';
import CardMyCollection from '../components/CardMyCollection';

const database = firebase.firestore();

export default class MyColScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: '',
        };
    };

    deleteCollection = (id) => {
        database.collection(route.params.idUser).doc(id).delete()
    };

    componentDidMount(){
        database.collection('Collection').onSnapshot((query) => {
            const list = []
            const idUser = this.props.navigation.state.params.idUser
            query.forEach((doc) => {
                if(doc.data().idUser === idUser){
                   list.push({ ...doc.data()})
                //    list.push({ ...doc.data(), id: doc.id })
                }
            })
            list.forEach((item) => this.setState({collection: this.state.collection + item}))
            // this.setState({collection: list});
            // this.state.collection.forEach((item) => console.log(item.nome));
            console.log(this.state.collection.reduce((item) => item.nome));
        })
    };
    render(){
        return(
            <View style={styles.container}>
                <CardMyCollection />
                <FAB
                    icon="plus"
                    style={styles.fab}
                    // onPress={() => this.props.navigation.navigate('NewCollection')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#332E56',
        height: '100%',
    },
    fab: {
        position: 'absolute',
        backgroundColor: '#7a71af',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})
