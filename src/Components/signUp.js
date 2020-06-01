import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {imageConstants, colorConstants} from '../Config/constant';
import {connect} from 'react-redux';
import {notesSignUp} from '../Services/Login/action';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'aman',
      password: 'roy',
      name: 'ankit',
      phoneNumber: '9958477003',
      repeatPassword: 'roy',
      loading: false,
      hidePassword: true,
    };
  }

  signUpUser() {
    const {username, password, name, phoneNumber, repeatPassword} = this.state;
    if (password === repeatPassword) {
      this.props.notesSignUp(username, password, name, phoneNumber).then(
        resolve => {
          console.log('kya aaya', resolve);
          if (resolve === 200) {
            Alert.alert('Successfully Registered');
            this.setState({loading: false});
            this.props.props.navigation.navigate('Notes');
          }
        },
        reject => {
          if (reject === 'ERROR') {
            Alert.alert('Wrong Credentials');
          } else {
            Alert.alert('Request cannot be processed');
          }
          this.setState({isLoading: false});
        },
      );
    } else {
      Alert.alert('Passwords do not match');
      this.setState({loading: false});
    }
  }

  render() {
    const {hidePassword} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.cameraLogo}>
          <Image source={imageConstants.camera} />
        </View>
        <View style={styles.txtBox}>
          <TextInput
            style={styles.txtInput}
            placeholder="Name"
            placeholderTextColor={colorConstants.darkGrey}
            onChangeText={text => this.setState({name: text})}
            value={this.state.name}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.txtInput}
            placeholder="Username"
            placeholderTextColor={colorConstants.darkGrey}
            onChangeText={text => this.setState({username: text})}
            value={this.state.username}
            autoCapitalize="none"
          />
          <View style={styles.passView}>
            <TextInput
              style={styles.passInput}
              placeholder="Password"
              placeholderTextColor={colorConstants.darkGrey}
              onChangeText={text => this.setState({password: text})}
              secureTextEntry={hidePassword}
              value={this.state.password}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => {
                this.setState({hidePassword: !hidePassword});
              }}>
              <Image source={imageConstants.eye} style={styles.eyeImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.passView}>
            <TextInput
              style={styles.passInput}
              placeholder="Repeat Password"
              placeholderTextColor={colorConstants.darkGrey}
              onChangeText={text => this.setState({repeatPassword: text})}
              secureTextEntry={hidePassword}
              value={this.state.repeatPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => {
                this.setState({hidePassword: !hidePassword});
              }}>
              <Image source={imageConstants.eye} style={styles.eyeImg} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.touchableView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.setState({loading: true});
              this.signUpUser();
            }}>
            <Image source={imageConstants.tick} />
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
    borderBottomColor: colorConstants.lightGrey,
    marginVertical: 12,
  },
  passView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: colorConstants.lightGrey,
    marginVertical: 20,
  },
  passInput: {
    marginHorizontal: 5,
    padding: 10,
    width: '80%',
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
  },
  btn: {
    flexDirection: 'row',
    marginVertical: 40,
    shadowColor: colorConstants.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: colorConstants.white,
    width: '80%',
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: colorConstants.navyBlue,
    fontSize: 15,
    fontFamily: 'futura-medium',
  },
  serviceView: {
    marginTop: 60,
  },
  serviceTxt: {
    color: colorConstants.darkGrey,
    fontSize: 15,
  },
});
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  notesSignUp: notesSignUp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
