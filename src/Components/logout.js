import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Splash');
  };

  componentDidMount() {
    this.logout();
  }

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logout);
