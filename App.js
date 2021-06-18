import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Store, {Context} from './context/Store';
import Navigator from './Navigator/navigation';
import * as Font from "expo-font";




export default class Application extends React.Component {
  state = {
    isFontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      SemiBold: require("./fonts/Lato-Bold.ttf"),
      Regular: require("./fonts/Lato-Regular.ttf"),
    });
    this.setState({ isFontLoaded: true });
  }

  render() {
    return this.state.isFontLoaded === true ? <App /> : null;
  }
}


function App() {
  return (
    <Store>
      <Navigator />
    </Store>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
