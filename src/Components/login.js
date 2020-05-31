import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {connect} from 'react-redux';
import {notesLogin} from '../Services/Login/action';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'ankit676',
      password: 'roy',
      hidePassword: true,
      loading: false,
    };
  }
  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '1012243003194-agm7k1flse40ij0q22jb9ioqtqve9fm1.apps.googleusercontent.com',
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  onLogin = () => {
    const {username, password} = this.state;
    this.props.notesLogin(username, password).then(
      resolve => {
        if (resolve === 200) {
          this.setState({loading: false});
          this.props.props.navigation.navigate('Notes');
        }
      },
      reject => {
        if (reject === 'Error') {
          this.setState({loading: false});
          Alert.alert('wrong credentials');
        } else {
          this.setState({loading: false});
          Alert.alert('api is down');
        }
      },
    );
  };

  render() {
    const {hidePassword} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.mainView}>
            <View style={styles.userLogo}>
              <Image source={require('../Assets/user.png')} />
            </View>
            <View style={styles.txtBox}>
              <TextInput
                style={styles.txtInput}
                placeholder="Username or email address"
                placeholderTextColor="#9494b8"
                onChangeText={text => this.setState({username: text})}
                value={this.state.username}
                autoCapitalize="none"
              />
              <View style={styles.passwordView}>
                <TextInput
                  style={styles.passInput}
                  placeholder="Password"
                  placeholderTextColor="#9494b8"
                  onChangeText={text => this.setState({password: text})}
                  secureTextEntry={hidePassword}
                  value={this.state.password}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => {
                    this.setState({hidePassword: !hidePassword});
                  }}>
                  <Image source={require('../Assets/passwordEye.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.touchableView}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  this.setState({loading: true});
                  this.onLogin();
                }}>
                <Image source={require('../Assets/blueTick.png')} />
                <Text style={styles.btnTxt}>LOG IN</Text>
              </TouchableOpacity>
              <View style={styles.loginView}>
                <Text style={styles.loginTxt}>Login with</Text>
              </View>
              <View style={styles.signInView}>
                <TouchableOpacity onPress={() => this._signIn()}>
                  <Image
                    style={styles.btnStyle}
                    source={require('../Assets/gplus.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.btnStyle}
                    source={require('../Assets/github.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.btnStyle}
                    source={require('../Assets/twitter.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.btnStyle}
                    source={require('../Assets/facebook.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {flex: 1},
  txtBox: {
    flex: 0.2,
    alignItems: 'center',
  },
  txtInput: {
    padding: 15,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#c2c2d6',
    marginVertical: 12,
  },
  passwordView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#c2c2d6',
    marginVertical: 20,
  },
  passInput: {
    marginHorizontal: 5,
    padding: 10,
    width: '80%',
  },
  userLogo: {
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
    flex: 0.4,
    alignItems: 'center',
  },
  btn: {
    marginVertical: 40,
    flexDirection: 'row',
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
  loginView: {
    marginTop: 60,
    alignItems: 'center',
  },
  loginTxt: {
    color: '#9494b8',
    fontSize: 15,
    marginVertical: 15,
  },
  googleSignIn: {width: 55, height: 48, marginTop: 15},
  signInView: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  btnStyle: {
    height: 70,
    width: 70,
    marginHorizontal: 8,
  },
});
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  notesLogin: notesLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
