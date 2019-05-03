import React from "react";
import { FlatList } from "react-native";
import { View } from "native-base";
import * as data from "../../data/hotel-details.json";
import Voucher from "../DetailList/Voucher";
import RoomType from "../DetailList/RoomType";

class DetailsTab extends React.Component {
  renderList() {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.room_types}
          renderItem={item => <RoomType data={item} key={item.no} />}
          keyExtractor={(x, i) => i.toString()}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.vouchers}
            renderItem={item => <Voucher data={item} key={item.id} />}
            keyExtractor={(x, i) => i.toString()}
            ListFooterComponent={() => this.renderList()}
          />
        </View>
      </View>
    );
  }
}

export default DetailsTab;
