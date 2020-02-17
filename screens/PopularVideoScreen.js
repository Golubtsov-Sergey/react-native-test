import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';


const PopularVideoScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}
            onPress={() => Actions.popularList()}>
                PopularVideoScreen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1683B5",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        color: "#FFFFFF",
    }
});

export default PopularVideoScreen;