import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Switch,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const [selectedColorBgr, setSelectedColorBgr] = useState("");

  const onColorChange = (color) => {
    setSelectedColor(color);
    StatusBar.setBackgroundColor(color); // Thay đổi màu nền của StatusBar
  };

  const onColorChangeBgr = (color) => {
    setSelectedColorBgr(color);
  };

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);

    if (isEnabled) {
      // Switch đang bật (ON)
      onColorChangeBgr("white");
    } else {
      // Switch đang tắt (OFF)
      onColorChangeBgr("#696969");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: selectedColorBgr }}>
      <View></View>
      <View style={styles.container}>
        <Text style={styles.title}>Chọn màu nền StatusBar</Text>
        <Picker
          selectedValue={selectedColor}
          onValueChange={(itemValue) => onColorChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Trắng" value="white" />
          <Picker.Item label="Xanh dương" value="blue" />
          <Picker.Item label="Đỏ" value="red" />
          <Picker.Item label="Xanh lá cây" value="green" />
          <Picker.Item label="Vàng" value="yellow" />
        </Picker>

        <View style={styles.container}>
          <Text style={styles.text}>
            Chế độ tối: {isEnabled ? "Bật" : "Tắt"}
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00EE00" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  picker: {
    width: 200,
  },

  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  switch: {
    // Định dạng kích thước của Switch ở đây
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Tăng kích thước
  },
});
