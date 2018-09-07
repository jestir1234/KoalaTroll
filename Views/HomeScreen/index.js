import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";

HomeScreen = props => (
  <View style={styles.container}>
    <Image
      style={styles.iconImage}
      source={{
        uri:
          "https://orig00.deviantart.net/f005/f/2012/038/b/7/cute_koala_by_adamzt2-d4ozwxu.png"
      }}
    />
    <View style={styles.contentContainer}>
      <Text style={styles.title}>KOALA TROLL</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Menu")}
      >
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[styles.buttonText, styles.settings]}>Settings</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#efcd75",
    alignItems: "center"
  },

  contentContainer: {
    marginTop: 50,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },

  title: {
    fontFamily: "Chalkduster",
    textAlign: "center",
    fontSize: 44,
    height: 120
  },

  button: {
    display: "flex",
    justifyContent: "center"
  },

  buttonText: {
    textAlign: "center",
    fontFamily: "Chalkduster",
    fontSize: 28
  },

  settings: {
    fontSize: 18,
    paddingTop: 25
  },

  iconImage: {
    height: 175,
    width: 130
  }
});

export default HomeScreen;
