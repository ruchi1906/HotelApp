//use to display voucher listItems
import React from "react";
import { Image } from "react-native";
import { Card, Content, Text, Button, View } from "native-base";
import { Col, Grid } from "react-native-easy-grid";
import styles from "./styles";

const Voucher = props => {
  return (
    <Card style={styles.card}>
      <Grid style={styles.voucherCard}>
        <Col size={2}>
          <View style={styles.voucherTypeImgContainer}>
            <Image
              style={styles.voucherTypeImg}
              source={{ uri: props.data.item.image_url }}
            />
          </View>
        </Col>
        <Col size={4}>
          <Content style={{ marginLeft: 6 }}>
            <Text style={styles.voucher_name}>{props.data.item.name}</Text>
            <Text style={styles.expireText}>
              {props.data.item.expiry_date_time}{" "}
            </Text>
            <Text style={styles.discount_text}>
              {props.data.item.discount_price !== null
                ? "Get " + props.data.item.discount_price + " dollars off"
                : "Get " + props.data.item.discount_price_percentage + "% off"}
            </Text>
          </Content>
        </Col>
        <Col size={2} style={{ justifyContent: "center" }}>
          <Button small warning style={styles.useBtn}>
            <Text> Use </Text>
          </Button>
          <Text style={styles.total_amount_text}>
            {"Total " + props.data.item.total}
          </Text>
        </Col>
      </Grid>
    </Card>
  );
};

export default Voucher;
