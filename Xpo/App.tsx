import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from "react"

export default function App() {
    const [count, setCount] = React.useState<number>(0)
    const [toggle, setToggle] = React.useState<boolean>(false)
    function onPress(){
        setCount(count+1)
    }
    function showText(){
        setToggle(!toggle)
    }
  return (
    <View style={styles.container}>
      {toggle? <Text>Open up App.tsx to start working on your!</Text>: null}

      <Pressable onPress = {onPress} style = {styles.button}>
        <Text>{"Number " + count}</Text>
      </Pressable>

      <Pressable onPress = {showText} style = {styles.button}>
        <Text>{"Text"}</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
   backgroundColor: 'lightblue',
   width: '200px',
   height: '50px',
  }
});
