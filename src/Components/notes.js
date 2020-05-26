import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

class notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt1}>My</Text>
          <Text style={styles.headerTxt2}>Notes</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyTxt}>Personal</Text>
          <Text style={styles.bodyTxt}>Work</Text>
          <Text style={styles.bodyTxt}>Ideas</Text>
          <Text style={styles.bodyTxt}>List</Text>
        </View>
        <View style={styles.footer}>
          <Image
            style={styles.drawerBtn}
            source={require('../Assets/drawer.png')}
          />
          <Image style={styles.addBtn} source={require('../Assets/plus.png')} />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt1: {
    fontSize: 60,
    marginLeft: 50,
    color: '#ff3300',
    fontWeight: 'bold',
  },
  headerTxt2: {
    fontSize: 60,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#002b80',
  },
  body: {
    flex: 0.5,
  },
  bodyTxt: {
    fontSize: 40,
    color: '#002b80',
    marginVertical: 20,
    marginLeft: 50,
    fontWeight: 'bold',
  },
  footer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawerBtn: {
    marginLeft: 50,
  },
  addBtn: {
    marginRight: 35,
  },
});
export default notes;
