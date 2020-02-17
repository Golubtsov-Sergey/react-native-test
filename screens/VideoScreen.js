import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoScreen = (props) => {
    return (
      <View style={styles.container}>
      <Video source={{uri: props.url}}   
       ref={(ref) => {
        this.player = ref
      }}          
       style={styles.backgroundVideo} />
       </View>
    )
      }




const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: "#EF0404",
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
})

export default VideoScreen;