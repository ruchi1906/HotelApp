import { StyleSheet } from "react-native";
import * as colors from "../../utils/colors";

const styles = StyleSheet.create({
  roomTypeImg: {
    height: 70,
    width: 110
  },
  roomTypeImgContainer: {
    height: 70,
    width: 110,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
    borderColor: colors.white
  },
  voucherTypeImg: {
    height: 80,
    width: 80
  },
  voucherTypeImgContainer: {
    height: 80,
    width: 80,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
    borderColor: colors.white
  },
  cardItm: {
    backgroundColor: "#F5F5F5",
    padding: 5
  },
  imgVoucherContainer: {
    height: 80,
    width: 80,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
    borderColor: colors.white
  },
  voucherCard: {
    backgroundColor: colors.lightOrange,
    padding: 5
  },
  card: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: colors.dark_grey
  },
  container: {
    flex: 1
  },
  name: {
    marginLeft: 5,
    marginTop: 6,
    fontSize: 15,
    color: colors.dark_grey,
    fontWeight: "bold"
  },
  bed_type: {
    marginLeft: 5,
    fontSize: 15,
    color: colors.black,
    fontWeight: "bold",
    marginTop: 4
  },
  price: {
    marginLeft: 5,
    fontSize: 15,
    color: colors.orange,
    marginTop: 4,
    marginBottom: 6,
    fontWeight: "bold"
  },
  rightContainer: {
    height: 80,
    width: 100
  },
  voucher_name: {
    fontSize: 15,
    color: colors.black,
    marginTop: 6,
    fontWeight: "bold"
  },
  expireText: {
    fontSize: 15,
    color: colors.orange,
    fontWeight: "bold",
    marginTop: 4
  },
  discount_text: {
    fontSize: 14,
    color: "#474646",
    marginTop: 4
  },
  useBtn: {
    alignSelf: "center",
    backgroundColor: colors.orange
  },
  total_amount_text: {
    alignSelf: "center",
    marginTop: 5,
    fontSize: 13,
    color: colors.dark_grey
  },
  pic: {
    marginTop: 46,
    backgroundColor: "black",
    color: "#fff",
    fontSize: 11,
    height: 22,
    padding: 5,
    position: "absolute",
    alignSelf: "flex-start",
    opacity: 0.8
  }
});

export default styles;
