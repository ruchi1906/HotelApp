import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden"
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: this.props.maxHeight,
    resizeMode: "cover"
  },
  headerChildren: {
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  children: {
    paddingTop: this.props.maxHeight,
    backgroundColor: this.props.childrenBackgroundColor
  }
});

export default styles;
