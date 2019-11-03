import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MaterialButton extends Component {
  render() {
    return (
      <TouchableOpacity
        /* Conditional navigation not supported at the moment */ style={[
          styles.container,
          this.props.style,
        ]}>
        <Icon name={this.props.iconName} style={styles.caption} />
      </TouchableOpacity>
    );
  }
}
MaterialButton.prototypes = {
  iconName: PropTypes.string,
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    borderColor: '#000000',
    borderWidth: 0,
  },
  caption: {
    color: 'rgba(255,255,255,1)',
    fontSize: 35,
    overflow: 'visible',
  },
});
