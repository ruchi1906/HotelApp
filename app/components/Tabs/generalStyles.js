import { StyleSheet } from "react-native";
import * as colors from "../../utils/colors";

const styles = StyleSheet.create({
  iconStyles: {
    color: colors.dark_grey,
    fontSize: 18
  },
  iconViewStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  separatorStyle: {
    height: 2,
    width: "100%",
    backgroundColor: colors.gray
  }
});

export default styles;
