import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Tabs, Scene } from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';
import CustomTabBar from './screens/CustomTabBar';
import PopularScreen from './screens/PopularScreen';
import PopularVideoScreen from './screens/PopularVideoScreen';
import VideoScreen from './screens/VideoScreen';

const App = () => (
  <Router>
    <Stack key="root"
      hideNavBar
      >
      <Tabs
        key="tabBar"
        tabBarComponent={CustomTabBar}
      >
        <Scene key="home" title="Home"
        navigationBarStyle={{backgroundColor: "#2680AA"}}
        titleStyle={{color: "#FFFFFF"}}>
          <Scene key="videoList" component={HomeScreen} title="Home" />
          <Scene key="video" component={VideoScreen} title="Video" />
        </Scene>
        <Scene key="popular" title="Popular"
        navigationBarStyle={{backgroundColor: "#2680AA"}}
        titleStyle={{color: "#FFFFFF"}}>
          <Scene key="popularList" component={PopularScreen} title="Popular" />
          <Scene key="popularVideo" component={PopularVideoScreen} title="Popular Video" />
        </Scene>
      </Tabs>
    </Stack>
  </Router>
);



export default App;
