import React, { Component } from "react";
import {View, Text} from "react-native";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View><Text>Hi Saif</Text></View>
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(App);