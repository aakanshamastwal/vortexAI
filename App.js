import React, { useRef, useEffect, useState } from 'react';
import styles from './styles/style.js';
import { ImageBackground, Animated, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './store/configure';
import { Provider } from 'react-redux';
import Login  from './components/login/login';
// import { NavigationContainer } from '@react-navigation/native';
// import { createSwitchNavigator, createAppContainer } from 'react-navigation'

export default function App() {
  const [backImage, setBackImage] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    backImage ? Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start() : '';

    const timeout = setTimeout(() => {
      setBackImage(true);
    }, 3500);
    return ()=> clearTimeout(timeout);
  },[backImage, fadeAnim]);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <PaperProvider>
          <ImageBackground source={backImage ? require("./images/back01.png") : require("./images/b1.gif")} style={styles.image}>
            {/* <NavigationContainer> */}
              <Login backImage={backImage} fadeAnim={fadeAnim} />
            {/* </NavigationContainer> */}
          </ImageBackground>
        </PaperProvider>
      </SafeAreaView>
    </Provider>
  );
}
  