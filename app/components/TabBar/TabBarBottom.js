import React, { Component } from "react";
import { View, Text } from "react-native";
import { Footer, FooterTab, Button, Icon } from "native-base";
import styles from "./bottomStyles";
import BookNow from "../../screens/BookNow";
import CheckIn from "../../screens/CheckIn";
import Review from "../../screens/Review";
import HotelDetails from "../../screens/HotelDetail/HotelDetails";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

const Tabs = createBottomTabNavigator(
  {
    BookNow: { screen: BookNow },
    CheckIn: { screen: CheckIn },
    Review: { screen: Review }
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              transparent
              onPress={() => props.navigation.navigate("BookNow")}
            >
              <Icon name="book" type="FontAwesome" style={styles.iconStyle} />
              <Text style={styles.labelStyle}>Book Now</Text>
            </Button>
            <Button
              onPress={() => props.navigation.navigate("CheckIn")}
              transparent
            >
              <Icon name="location" type="Entypo" style={styles.iconStyle} />
              <Text style={styles.labelStyle}>Check in</Text>
            </Button>
            <Button
              transparent
              onPress={() => props.navigation.navigate("Review")}
            >
              <Icon name="new-message" type="Entypo" style={styles.iconStyle} />
              <Text style={styles.labelStyle}>Write a review</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

const TabBarBottom = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Tabs"
  }
);

export default createAppContainer(TabBarBottom);
