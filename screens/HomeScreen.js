import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';



const HomeScreen = () => {
    let [video] = useState([
        {
            key: 1,
            name: "video-1",
            url: "https://youtu.be/8PNTZEv-e54",
            views: 0,
        },
        {
            key: 2,
            name: "video-2",
            url: "https://youtu.be/f0PvMmTAUAQ",
            views: 4,
        },
        {
            key: 3,
            name: "video-3",
            url: "https://youtu.be/bFE4JpUdsHI",
            views: 2,
        },
        {
            key: 4,
            name: "video-4",
            url: "https://youtu.be/PDluztBSaBc",
            views: 8,
        },
        {
            key: 5,
            name: "video-5",
            url: "https://youtu.be/VoCZgykBynw",
            views: 6,
        },
        {
            key: 6,
            name: "video-6",
            url: "https://youtu.be/q4BP3UG2Bus",
            views: 18,
        },
        {
            key: 7,
            name: "video-7",
            url: "https://youtu.be/XIqbHadXLnk",
            views: 9,
        },
        {
            key: 8,
            name: "video-8",
            url: "https://youtu.be/GOb3MCAg9zM",
            views: 17,
        },
        {
            key: 9,
            name: "video-9",
            url: "https://youtu.be/iyz9pBv1bHc",
            views: 3,
        },
        {
            key: 10,
            name: "video-10",
            url: "https://youtu.be/uOzwwZxjPRs",
            views: 23,
        },
    ]);
    
    const pressHandler = (key, url) => {
        console.log(key);
        console.log(url);
        Actions.video({url});
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {video.map((item) => {
                    return (
                        
                            <View key={item.key}>
                                <TouchableOpacity onPress={() => pressHandler((item.key), (item.url))}>
                    <Text style={styles.item}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        
                    )
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: "#1683B5",
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: "#1683B5",
        fontSize: 24,
        borderBottomWidth: 1,
        color: "#FFFFFF",
    }
});

export default HomeScreen;