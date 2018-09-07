import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const OPTIONS = ["NEW GAME", "HOW TO PLAY", "FAQS", "ADD MEME"];

const myIcon = <Icon name="rocket" size={30} color="#900" />;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
  }

  setOption = idx => this.setState({ selected: idx });

  render() {
    return (
      <View style={styles.container}>
        {OPTIONS.map((option, idx) => (
          <TouchableOpacity key={idx} onPress={() => this.setOption(idx)}>
            <Text style={styles.optionsText}>
              {option}{" "}
              {this.state.selected === idx && (
                <Icon name="arrow-left" size={30} color="#fff" />
              )}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efcd75",
    padding: 10
  },

  optionsText: {
    fontFamily: "Chalkduster",
    fontSize: 30,
    padding: 20
  }
});

export default Menu;
