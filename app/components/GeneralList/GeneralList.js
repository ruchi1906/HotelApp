import React from "react";
import { View, Text, Right, Icon, Content, ListItem } from "native-base";
import * as colors from "../../utils/colors";
import styles from "./styles";

const GeneralList = props => {
  return (
    <ListItem>
      <Icon
        name={props.data.item.left_icon_name}
        type={props.data.item.left_icon_type}
        style={styles.iconStyles}
      />
      <Content>
        <Text>{props.data.item.text}</Text>
      </Content>
      <Right>
        <View style={styles.iconViewStyle}>
          <Icon
            name={props.data.item.right_icon1_name}
            type={props.data.item.right_icon1_type}
            style={[
              styles.iconStyles,
              {
                fontSize: 26,
                color: props.data.item.right_icon1_color
                  ? props.data.item.right_icon1_color
                  : colors.dark_grey
              }
            ]}
          />
          {props.data.item.right_icon2_name &&
          props.data.item.right_icon2_name !== undefined ? (
            <Icon
              name={props.data.item.right_icon2_name}
              type={props.data.item.right_icon2_type}
              style={[
                styles.iconStyles,
                {
                  fontSize: 26,
                  color: props.data.item.right_icon2_color
                    ? props.data.item.right_icon2_color
                    : colors.dark_grey
                }
              ]}
            />
          ) : (
            <View />
          )}
        </View>
      </Right>
    </ListItem>
  );
};

export default GeneralList;
