import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

const addComment = () => {
  const [text, setText] = useState("");
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="write a comment"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Button
        title="Submit"
        style={styles.ButtonRight}
        onPress={() => Alert.alert("")}
      />
    </View>
  );
};
styles = StyleSheet.create({});
export default addComment;
