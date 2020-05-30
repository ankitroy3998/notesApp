import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {notesType} from '../Services/Notes/action';
import Modal from 'react-native-modal';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  goBack() {
    this.setState({
      isModalVisible: false,
    });
  }

  render() {
    const {
      personalCount,
      workCount,
      ideasCount,
      listCount,
      navigation,
    } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt1}>My</Text>
          <Text style={styles.headerTxt2}>Notes</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity>
            <View style={styles.bodyCategory}>
              <Text style={styles.bodyTxt}>Personal</Text>
              <Text style={styles.bodyTxt}>{personalCount}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bodyCategory}>
              <Text style={styles.bodyTxt}>Work</Text>
              <Text style={styles.bodyTxt}>{workCount}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bodyCategory}>
              <Text style={styles.bodyTxt}>Ideas</Text>
              <Text style={styles.bodyTxt}>{ideasCount}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bodyCategory}>
              <Text style={styles.bodyTxt}>Lists</Text>
              <Text style={styles.bodyTxt}>{listCount}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Image
              style={styles.drawerBtn}
              source={require('../Assets/drawer.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({isModalVisible: !this.state.isModalVisible});
            }}>
            <Image
              style={styles.addBtn}
              source={require('../Assets/plus.png')}
            />
          </TouchableOpacity>
        </View>
        <Modal
          visible={this.state.isModalVisible}
          hasBackdrop={true}
          onBackdropPress={() => {
            this.goBack();
          }}>
          <View style={styles.ModalView}>
            <View style={styles.modalInput}>
              <TextInput
                style={styles.modalTxtBox}
                placeholder={'Category'}
                placeholderTextColor="#fff"
                onChangeText={text => this.setState({Category: text})}
              />
            </View>
            <View style={styles.modalInput}>
              <TextInput
                style={styles.modalTxtBox}
                placeholder={'Title'}
                placeholderTextColor="#fff"
                onChangeText={text => this.setState({Title: text})}
              />
            </View>
            <View style={styles.modalInput}>
              <TextInput
                style={styles.modalTxtBox}
                placeholder={'Info'}
                placeholderTextColor="#fff"
                onChangeText={text => this.setState({info: text})}
              />
            </View>
            <View style={styles.modalBtnOuterView}>
              <TouchableOpacity style={styles.modalBtn}>
                <View style={styles.modalBtnInnerView}>
                  <Text style={styles.btnTxt}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  ModalView: {
    flex: 0.5,
    width: '100%',
    backgroundColor: '#008080',
    borderRadius: 15,
  },
  modalInput: {
    borderBottomWidth: 1,
    marginHorizontal: 30,
    marginTop: 40,
  },
  modalTxtBox: {
    fontSize: 20,
    paddingBottom: 10,
    marginTop: 20,
    height: 40,
  },
  modalBtn: {
    padding: 10,
    backgroundColor: '#8585ad',
    marginTop: 40,
    width: '40%',
    borderRadius: 15,
  },
  modalBtnOuterView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtnInnerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: 22,
    fontFamily: 'futura-medium',
  },
  bodyCategory: {
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
const mapStateToProps = state => ({
  id: state.loginReducer.id,
  personalCount: state.notesReducer.personalCount,
  workCount: state.notesReducer.workCount,
  ideasCount: state.notesReducer.ideasCount,
  listCount: state.notesReducer.listCount,
});
const mapDispatchToProps = {
  notesType: notesType,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
