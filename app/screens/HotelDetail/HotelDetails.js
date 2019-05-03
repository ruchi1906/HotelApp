import React, { Component } from "react";
import {
  View,
  Icon,
  Container,
  Header,
  Body,
  Text,
  Grid,
  Row,
  Col
} from "native-base";
import * as data from "../../data/hotel-details.json";
import StarRating from "react-native-star-rating";
import { Image } from "react-native";
import TabBarTop from "../../components/TabBar/TabBarTop";
import styles from "./styles";
import * as global from "../../lib/globals";
import * as colors from "../../utils/colors";

class HotelDetails extends React.Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{ height: global.deviceHeight / 3 }}>
          <Body>
            <View>
              <Image source={require("../../Images/backgroundImage.jpg")} />
            </View>
            <View style={styles.headerImageIconStyle}>
              <View style={{ flex: 2 }}>
                <Icon
                  name="ios-arrow-back"
                  type="Ionicons"
                  style={[styles.iconStyle, { marginLeft: 5 }]}
                />
              </View>
              <View style={styles.iconViewStyle}>
                <Icon
                  name="share-square-o"
                  type="FontAwesome"
                  style={styles.iconStyle}
                />
                <Icon name="staro" type="AntDesign" style={styles.iconStyle} />
              </View>
            </View>
          </Body>
        </Header>

        <Grid style={styles.gridDetails}>
          <Text style={styles.hotel_name}>{data.name}</Text>
          <Row style={{ flex: 0, paddingVertical: 3 }}>
            <Col style={styles.col1_style}>
              <StarRating
                disabled={false}
                fullStar={"ios-star"}
                halfStar={"ios-star-half"}
                iconSet={"Ionicons"}
                maxStars={5}
                rating={5}
                starSize={20}
                selectedStar={() => alert("Coming soon!")}
                fullStarColor={colors.orange}
              />
            </Col>

            <Col style={[styles.col1_style, { marginTop: 3 }]}>
              <Text style={styles.comfort_text_review}>
                {data.reviews.length + " reviews"}
              </Text>
            </Col>

            <Col style={[styles.col1_style, { marginTop: 3 }]}>
              <Text style={styles.comfort_text_review}>
                {"comfort" + " " + data.comfort_rating}
              </Text>
            </Col>

            <Col style={[styles.col1_style, { marginTop: 3 }]}>
              <Text style={styles.comfort_text_review}>
                {"service" + " " + data.service_rating}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col size={1} style={styles.col1_style}>
              <Text style={styles.country_name}>{data.location.country}</Text>
            </Col>
            <Col size={1} style={styles.col1_style}>
              <View style={styles.city_view_style}>
                <Icon
                  name="location"
                  style={styles.icon_style}
                  type="EvilIcons"
                />
                <Text style={styles.city_text}>{data.location.city}</Text>
              </View>
            </Col>
            <Col size={3} style={styles.col1_style} />
          </Row>
        </Grid>

        <TabBarTop />
      </Container>
    );
  }
}

export default HotelDetails;
