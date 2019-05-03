import React from "react";
import { Animated, ScrollView, View, StatusBar } from "react-native";
import styles from "./styles";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  render() {
    const headerScrollDistance = this.props.maxHeight - this.props.minHeight;
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, headerScrollDistance],
      outputRange: [this.props.maxHeight, this.props.minHeight],
      extrapolate: "clamp"
    });
    const titleScale = this.state.scrollY.interpolate({
      inputRange: [0, headerScrollDistance / 2, headerScrollDistance],
      outputRange: [1, 1, this.props.titleScale],
      extrapolate: "clamp"
    });
    const titleTranslateY = this.state.scrollY.interpolate({
      inputRange: [0, headerScrollDistance / 2, headerScrollDistance],
      outputRange: [0, 0, this.props.titleTranslateY],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.container}>
        <StatusBar barStyle={this.props.statusBarTheme} />
        <ScrollView
          style={styles.container}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          <Animated.View style={styles.children}>
            {this.props.children}
          </Animated.View>
        </ScrollView>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Image
            style={styles.headerBackground}
            source={this.props.backgroundImage}
          />
          <Animated.View
            style={[
              styles.headerChildren,
              {
                transform: [
                  { scale: titleScale },
                  { translateY: titleTranslateY }
                ]
              }
            ]}
          >
            {this.props.headerChildren}
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

Header.propTypes = {
  backgroundImage: React.PropTypes.number,
  maxHeight: React.PropTypes.number,
  minHeight: React.PropTypes.number,
  titleTranslateY: React.PropTypes.number,
  titleScale: React.PropTypes.number,
  children: React.PropTypes.node || React.PropTypes.nodes,
  headerChildren: React.PropTypes.node || React.PropTypes.nodes,
  childrenBackgroundColor: React.PropTypes.string,
  statusBarTheme: React.PropTypes.oneOf(["default", "light-content"])
};

Header.defaultProps = {
  maxHeight: 300,
  minHeight: 80,
  titleTranslateY: -35,
  titleScale: 0.8,
  childrenBackgroundColor: "#FFF",
  statusBarTheme: "default"
};

export default Header;
