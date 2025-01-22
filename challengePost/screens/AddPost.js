import React, {useState} from "react";
import { View, Text ,TextInput, Button, StyleSheet } from "react-native-web";

const AddPost =()=>{
  const [title, setTitle]=useState('')
  const [body, setBody]=useState('')
  const [response, setResponse]=useState('')

  return(
<View> 
   <Text>Create a Post</Text>
   <TextInput  
    value={title}
    onChangeText={text=>setTitle(text)}
    placeholder="Enter Title"
   />
    <TextInput  
    value={body}
    onChangeText={text=>setBody(text)}
    placeholder="Enter Body"
   />
</View>
  );

}

export default AddPost;