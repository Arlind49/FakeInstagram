import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native-web";

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response1, setResponse] = useState('');

  const makePostRequest = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1
        })
      });

      const data = await response.json();
      setResponse(data); // Set the response data to state
    } catch (error) {
      setResponse({ error: 'Something went wrong!' });
    }
  };

  return (
    <View>
      <Text>Create a Post</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Enter Title"
      />
      <TextInput
        value={body}
        onChangeText={text => setBody(text)}
        placeholder="Enter Body"
        multiline
      />
      <Button title="Send Post Request" onPress={makePostRequest} />

      {response1 && (
        <Text>Response: {JSON.stringify(response1, null, 2)}</Text>
      )}
    </View>
  );
};

export default AddPost;
