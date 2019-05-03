import React, { Component } from "react";
import { Text } from "native-base";
import TabBarBottom from "../components/TabBar/TabBarBottom";
Text.defaultProps.allowFontScaling = false; //to not allow font scaling
class Main extends Component {
  render() {
    return <TabBarBottom />;
  }
}

export default Main;
