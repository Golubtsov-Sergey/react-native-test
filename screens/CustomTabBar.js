import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CustomTabBar extends React.Component {
  render() {
    const { state } = this.props.navigation;
    const activeTabIndex = state.index;

    return (
      <View style={styles.container}>
        {
          state.routes.map(element => (
            <TouchableOpacity key={element.key} onPress={() => Actions[element.key]()}>
              <Text style={styles.text}>{element.key.toUpperCase()}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1/12,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#2680AA",
    borderTopWidth: 1,
  },
  text: {
    fontSize: 20,
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,
    color: "#FFFFFF",
  }
})