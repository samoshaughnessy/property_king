/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { Component } from "react";
import * as React from "react";
import { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { NavigationComponentProps } from "react-native-navigation";

import Icon from "react-native-vector-icons/FontAwesome";

interface Props extends NavigationComponentProps {}

// type Props = {};
export default class User extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userPanel}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigator.push({
                screen: "example.app", // unique ID registered with Navigation.registerScreen
                title: undefined, // navigation bar title of the pushed screen (optional)
                subtitle: undefined, // navigation bar subtitle of the pushed screen (optional)
                titleImage: require("../src/icons/IC-Verified-User-24px.png"), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
                passProps: {}, // Object that will be passed as props to the pushed screen (optional)
                animated: true, // does the push have transition animation or does it happen immediately (optional)
                animationType: "fade", // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
                backButtonTitle: undefined, // override the back button title (optional)
                backButtonHidden: false, // hide the back button altogether (optional)
                navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
                navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
                // enable peek and pop - commited screen will have `isPreview` prop set as true.
                previewView: undefined, // react ref or node id (optional)
                previewHeight: undefined, // set preview height, defaults to full height (optional)
                previewCommit: true, // commit to push preview controller to the navigation stack (optional)
                previewActions: [
                  {
                    // action presses can be detected with the `PreviewActionPress` event on the commited screen.
                    id: "", // action id (required)
                    title: "", // action title (required)
                    style: undefined, // 'selected' or 'destructive' (optional)
                    actions: [] // list of sub-actions
                  }
                ]
              })
            }
          >
            <Icon name="user-circle" size={144} />
          </TouchableOpacity>
        </View>
        <View style={styles.userDetail} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  userPanel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "beige"
  },
  userDetail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "red"
  }
});
