import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.txtView}>
          <Text style={styles.txt}>Notes</Text>
        </View>
      </View>
    );
  }
  getLoginData = async () => {
    const {navigation} = this.props;
    try {
      const value = await AsyncStorage.getItem('updatedId');
      if (value !== null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Notes'}],
        });
      }
      if (value === null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Main'}],
        });
      }
    } catch (error) {
      console.log('no data');
    }
  };
  componentDidMount() {
    this.getLoginData();
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 70,
    fontWeight: 'bold',
  },
});
const mapStateToProps = state => ({
  updatedId: state.loginReducer.id,
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);
