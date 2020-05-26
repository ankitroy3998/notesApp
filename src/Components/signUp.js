import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      username: '',
      password: '',
      isLoading: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.cameraLogo}>
          <Image source={require('../Assets/camera.png')} />
        </View>
        <View style={styles.txtBox}>
          <TextInput
            style={styles.txtInput}
            placeholder="Email address"
            placeholderTextColor="#9494b8"
            onChangeText={text => this.setState({emailAddress: text})}
            value={this.state.emailAddress}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.txtInput}
            placeholder="Username"
            placeholderTextColor="#9494b8"
            onChangeText={text => this.setState({username: text})}
            value={this.state.username}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.txtInput}
            placeholder="Password"
            placeholderTextColor="#9494b8"
            onChangeText={text => this.setState({password: text})}
            secureTextEntry={true}
            value={this.state.password}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.txtInput}
            placeholder="Repeat Password"
            placeholderTextColor="#9494b8"
            onChangeText={text => this.setState({password: text})}
            secureTextEntry={true}
            value={this.state.password}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.touchableView}>
          <TouchableOpacity style={styles.btn}>
            <Image source={require('../Assets/blueTick.png')} />
            <Text style={styles.btnTxt}>SIGN UP</Text>
          </TouchableOpacity>
          <View style={styles.serviceView}>
            <Text style={styles.serviceTxt}>Terms of Service</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtBox: {
    flex: 0.4,
    alignItems: 'center',
  },
  txtInput: {
    padding: 15,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#c2c2d6',
    marginVertical: 12,
  },
  cameraLogo: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1,
  },
  headerTxt: {
    fontWeight: 'bold',
    fontFamily: 'futura-medium',
    fontSize: 40,
  },
  touchableView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  btn: {
    flexDirection: 'row',
    marginVertical: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: '#2e5cb8',
    fontSize: 15,
    fontFamily: 'futura-medium',
  },
  serviceView: {
    marginTop: 60,
  },
  serviceTxt: {
    color: '#9494b8',
    fontSize: 15,
  },
});
export default SignUp;
