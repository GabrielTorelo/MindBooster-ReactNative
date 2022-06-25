import React from 'react';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native';

import LoginScreen from './src/pages/LoginScreen';
import MyColScreen from './src/pages/MyColScreen';
import NewUserScreen from './src/pages/NewUserScreen';
import ViewCollection from './src/pages/ViewCollection';
import NewColScreen from './src/pages/NewColScreen';
import NewCardScreen from './src/pages/NewCardScreen';
import JogarCardScreen from './src/pages/JogarCardScreen';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    name: LoginScreen,
    component: {LoginScreen},
    navigationOptions: {
      headerShown: false
    }
  },
  Jogar: {
    screen: JogarCardScreen,
    navigationOptions: {
      title: 'Coleção - objetos',
    }
  },
  Mycol: {
    screen: MyColScreen,
    navigationOptions: {
      title: 'Minhas coleções',
    }
  },
  Register: {
    screen: NewUserScreen,
    navigationOptions: {
      title: 'Mind Booster',
      headerStyle: {
        backgroundColor: '#332E56',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerLeft: () => (
        <Image 
          source={require('./src/images/logo.png')}
          style={{width: 65, height: 65, left: '1.7%'}}
        />

      ),
    }
  },
  Collection: {
    screen: ViewCollection,
    navigationOptions: {
      title: 'Coleção - Objetos',
    }
  },
  NewCollection: {
    screen: NewColScreen,
    navigationOptions: {
      title: 'Minhas coleções',
    }
  },
  NewCard: {
    screen: NewCardScreen,
    navigationOptions: {
      title: 'Coleção - objetos',
    }
  },
}, 
{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    title: 'Mind Booster',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#4A4568',
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerLeft: () => (
      <Ionicons
        name='menu'
        style={{color: 'white', fontSize: 36, left: 20}}
      >
      </Ionicons>
    ),
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
