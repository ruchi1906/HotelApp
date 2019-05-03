import React, { Component } from "react";
import { ScrollableTab, Tab, TabHeading, Tabs, View, Text } from "native-base";
import GeneralTab from "../Tabs/GeneralTab";
import DetailsTab from "../Tabs/DetailsTab";
import AttractionsTab from "../Tabs/AttractionsTab";
import ReviewsTab from "../Tabs/ReviewsTab";
import * as colors from "../../utils/colors";

class TabBarTop extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs tabBarUnderlineStyle={{backgroundColor: colors.orange}} renderTabBar={() => <ScrollableTab />}>
          <Tab textStyle={{color: colors.black}}  activeTextStyle ={{color: colors.orange}}
            heading={'General'}>
            <GeneralTab />
          </Tab>
          <Tab textStyle={{color: colors.black}}  activeTextStyle ={{color: colors.orange}}
            heading={'Details'}>
            <DetailsTab />
          </Tab>
          <Tab textStyle={{color: colors.black}}  activeTextStyle ={{color: colors.orange}}
            heading={'Attractions'}>
            <AttractionsTab />
          </Tab>
          <Tab textStyle={{color: colors.black}}  activeTextStyle ={{color: colors.orange}}
            heading={'Reviews'}>
            <ReviewsTab />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

export default TabBarTop;
