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
            collection: [],
            idUser: this.props.navigation.state.params.idUser,
        };
        
    };

    deleteCollection = (id) => {
        database.collection(this.state.idUser).doc(id).delete()
    };

    componentDidMount(){
        database.collection(this.state.idUser).onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data()})
                // list.push({ ...doc.data(), id: doc.id })
            })
            this.setState({collection: list});
            
        })
    };
    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.collection.map((item) => <CardMyCollection i={item}/>)
                }
                <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={() => this.props.navigation.navigate('NewCollection')}
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
