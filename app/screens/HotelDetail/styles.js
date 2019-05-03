import { StyleSheet } from "react-native";
import * as colors from "../../utils/colors";
import * as fontSizes from "../../utils/fontsSizes";

const styles = StyleSheet.create({
  headerImageIconStyle: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  iconViewStyle: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    fontSize: 24,
    color: colors.red
  },
  hotel_name: {
    fontSize: fontSizes.large,
    fontWeight: "bold",
    color: colors.black,
    paddingLeft: 12,
    paddingVertical: 8
  },
  country_name: {
    fontSize: fontSizes.small,
    color: colors.black,
    textAlign: "left",
    marginVertical: 5
  },
  review_text: {
    fontSize: fontSizes.medium,
    color: colors.orange,
    marginBottom: 2
  },
  gridDetails: {
    flex: 0.3
  },
  icon_style: {
    color: colors.dark_grey,
    fontSize: 18
  },
  city_text: {
    fontSize: fontSizes.small,
    color: colors.black,
    textAlign: "left"
  },
  comfort_text_review: {
    fontSize: fontSizes.small,
    color: colors.black,
    textAlign: "center"
  },
  col1_style: {
    paddingLeft: 15
  },
  city_view_style: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default styles;
