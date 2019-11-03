import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import MaterialButton from './materialButton';
import TripTitleIcon from './TripTitleIcon';

export default class TripTitle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.TitleCard}>
          <ImageBackground
            source={require('../images/New_york_times_square-terabass.jpg')}
            resizeMode="contain"
            style={styles.BackgroundImage}>
            <View style={styles.materialButtonBackRow}>
              <MaterialButton
                container="Go Back"
                iconName="chevron-left"
                style={styles.materialButtonBack}
              />
              <View style={styles.materialButtonEditStack}>
                <MaterialButton
                  iconName="pencil"
                  style={styles.materialButtonEdit}
                />
                <MaterialButton
                  iconName="map-search-outline"
                  style={styles.materialButtonMap}
                />
              </View>
            </View>
            <View style={styles.materialTripIconRow}>
              <TripTitleIcon style={styles.materialTripIcon} />
              <View style={styles.TripInfoTitle}>
                <Text style={styles.Title}>Sample Trip to New York</Text>
                <Text style={styles.Date}>01 Jan 2019 - 03 Jan 2019</Text>
              </View>
              <MaterialButton
                iconName="share"
                style={styles.materialButtonShare}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  TitleCard: {
    top: 0,
    left: 0,
    width: 360,
    height: 260,
    position: 'absolute',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: 'rgba(0,0,0,1)',
  },
  BackgroundImage: {
    width: 360,
    height: 249,
    marginTop: 3,
  },
  materialButtonBack: {
    width: 55,
    height: 59,
  },
  materialButtonEdit: {
    top: 0,
    left: 0,
    width: 36,
    height: 36,
    position: 'absolute',
  },
  materialButtonMap: {
    top: 0,
    left: 36,
    width: 36,
    height: 36,
    position: 'absolute',
  },
  materialButtonEditStack: {
    width: 72,
    height: 36,
    marginLeft: 222,
    marginTop: 12,
  },
  materialButtonBackRow: {
    height: 59,
    flexDirection: 'row',
    marginTop: 22,
    marginRight: 11,
  },
  materialTripIcon: {
    width: 56,
    height: 56,
  },
  TripInfoTitle: {
    width: 178,
    height: 16,
    marginLeft: 21,
    marginTop: 12,
  },
  Title: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    fontFamily: 'georgia-regular',
    lineHeight: 16,
  },
  Date: {
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    fontFamily: 'georgia-regular',
    marginTop: 13,
  },
  materialButtonShare: {
    width: 25,
    height: 27,
    marginLeft: 51,
    marginTop: 15,
  },
  materialTripIconRow: {
    height: 56,
    flexDirection: 'row',
    marginTop: 96,
    marginLeft: 12,
    marginRight: 17,
  },
});
