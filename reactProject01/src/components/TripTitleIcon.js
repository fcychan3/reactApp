import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TripTitleIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]}>
        <Icon name="airplanemode-active" style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,0,104,1)',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 28,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowColor: '#111',
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
  },
  icon: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 38,
    alignSelf: 'center',
    width: 37,
    height: 39,
  },
});
