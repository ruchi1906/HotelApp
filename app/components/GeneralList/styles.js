import { StyleSheet } from "react-native";
import * as colors from "../../utils/colors";

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  iconStyles: {
    color: colors.dark_grey,
    fontSize: 18,
    marginRight: 10
  },
  iconViewStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    color: colors.black,
    flex: 1,
    flexWrap: "wrap"
  },
  icon_text_style: {
    fontSize: 12,
    color: colors.black,
    marginTop: 2
  },
  icon_view_with_text: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
