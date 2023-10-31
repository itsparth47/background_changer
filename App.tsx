import React, { useState } from 'react';

import { 
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  
const [randomBg, setRandomBg] = useState("#FFFFFF");

const generateColor = () => {
  const hexRange = "0123456789ABCDEF"
  let color = "#"

  for (let index = 0; index < 6; index++) {
    color += hexRange[Math.floor(Math.random() * 16)]
  }
  setRandomBg(color)
}

  return (
    <>
    <StatusBar backgroundColor={randomBg}/>
    <View style = {[styles.container, {backgroundColor: randomBg}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style = {styles.actionbtn}>
          <Text style={styles.actionbtnTxt}>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionbtn : {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  actionbtnTxt : {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});

export default App;
