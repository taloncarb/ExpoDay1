
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useEffect } from "react"

// make a new type
type ToDoData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}




export default function App() {
    const [count, setCount] = React.useState<number>(0) 
    const [toggle, setToggle] = React.useState<boolean>(false) 
    const [toDoData, setToDoData] = React.useState<ToDoData>({userId: 0, id: 0, title: "", completed: false} )
    const a = (x: number) => {console.log(x)}  
    a(1)

    function onPress(){
        setCount(count+1)
    }
    function showText(){
        setToggle(!toggle)
    }

    // triggers a change. 
    useEffect(() => { 
      const options : RequestInit= { 
        method: "GET" 
      }
      fetch(`https://jsonplaceholder.typicode.com/todos/${count}`,options).then( async(response) => {
          const _json = await response.json()  // wait for everything to come in and then load it
          const newData:ToDoData = {userId: 0, id: 0, title: "", completed: false} 

          if (_json.userId && _json.title && typeof(_json.completed) === 'boolean' && _json.id) {
            newData.userId = _json.userId
            newData.id = _json.id
            newData.title = _json.title
            newData.completed = _json.completed
            setToDoData(newData)
          } 
          else{
            newData.title = "Test"
            setToDoData(newData)
          }
          


        }
      )   
    }, [count] )  

  
    return (
    <View style={styles.container}>
      {toggle? <Text>Open up App.tsx to start working on your!</Text>: null}
      <Text style = {{
        color: 'red'
      }}> {toDoData.title} </Text>

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
   width: 200,
   height: 50,
  }
});
