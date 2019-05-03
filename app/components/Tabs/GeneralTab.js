import React from "react";
import { View, FlatList } from "react-native";
import GeneralList from "../GeneralList/GeneralList";
import styles from "./generalStyles";
import * as colors from "../../utils/colors";

const DATA = [
  {
    no: 1,
    left_icon_name: "location",
    left_icon_type: "EvilIcons",
    text: "Walsh United Methodist Church, North Nevada Street, Walsh, CO, USA",
    right_icon1_name: "direction",
    right_icon1_type: "Entypo",
    right_icon2_name: "show-chart",
    right_icon2_type: "MaterialIcons",
    right_icon1_color: colors.red,
    right_icon1_text: "Direct",
    right_icon2_color: colors.red,
    right_icon2_text: "Show"
  },
  {
    no: 2,
    left_icon_name: "radio-button-checked",
    left_icon_type: "MaterialIcons",
    text: "Check-in at 14:00",
    right_icon1_name: "phone",
    right_icon1_type: "AntDesign",
    right_icon1_color: colors.red
  },
  {
    no: 3,
    left_icon_name: "ios-list-box",
    left_icon_type: "Ionicons",
    text: "Amenities, Wi-fi, Room_Service, Bathtub",
    right_icon1_name: "ios-arrow-forward",
    right_icon1_type: "Ionicons"
  },
  {
    no: 4,
    left_icon_name: "progress-full",
    left_icon_type: "Entypo",
    text: "Rank 2 according to 2018 survey",
    right_icon1_name: "ios-arrow-forward",
    right_icon1_type: "Ionicons"
  }
];

const GeneralTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={item => <GeneralList data={item} key={item.no} />}
        keyExtractor={(x, i) => i.toString()}
        ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
      />
    </View>
  );
};

export default GeneralTab;
