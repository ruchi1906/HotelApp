import React from "react";
import { Image } from "react-native";
import { View, Content, Card, Text } from "native-base";
import { Col, Grid } from "react-native-easy-grid";
import styles from "./styles";

const RoomType = props => {
  return (
    <Card style={styles.card}>
      <Grid style={styles.cardItm}>
        <Col size={3}>
          <Text style={styles.name}>{props.data.item.name}</Text>
          <Text style={styles.bed_type}>{props.data.item.bed_type.name}</Text>
          <Text style={styles.price}>{"$" + props.data.item.price}</Text>
        </Col>
        <Content />
        <Col size={2} style={{ justifyContent: "center" }}>
          <View style={styles.roomTypeImgContainer}>
            <Image
              resizeMethod="stretch"
              source={{ uri: props.data.item.images[0].image_url }}
              style={styles.roomTypeImg}
            />
            <Text style={styles.pic}>
              {"Pics " + props.data.item.images.length}
            </Text>
          </View>
        </Col>
      </Grid>
    </Card>
  );
};

export default RoomType;
