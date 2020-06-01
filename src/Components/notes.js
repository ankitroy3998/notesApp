import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {imageConstants, colorConstants} from '../Config/constant';
import {updateSelectedCategory} from '../Services/Notes/action';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      title: '',
      info: '',
      selectedCategory: '',
      responseMsg: '',
      category: [
        {value: 'Personal'},
        {value: 'Ideas'},
        {value: 'Work'},
        {value: 'Lists'},
      ],
    };
  }

 
  toggleModal = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };

  onCategoryClick(selectedCategory) {
    this.props.navigation.navigate('DisplayNotes');
    this.props.updateSelectedCategory(selectedCategory);
    //this.props.notesType(this.state.selectedCategory);
  }

  render() {
    const {personalCount, workCount, ideasCount, listCount} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt1}>My</Text>
          <Text style={styles.headerTxt2}>Notes</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => {
              this.onCategoryClick('Personal');
            }}>
            <View style={styles.bodyCategory}>
              <Text style={styles.bodyTxt}>Personal</Text>
              <Text style={styles.bodyTxt}>{personalCount}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.onCategoryClick('Work');
            }}>
            <View style={styles.bodyCategory}>
              <Text style={styles.bodyTxt}>Work</Text>
              <Text style={styles.bodyTxt}>{workCount}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.onCategoryClick('Ideas');
            }}>
            <View style={styles.bodyCategory}>
              <Text style={styles.bodyTxt}>Ideas</Text>
              <Text style={styles.bodyTxt}>{ideasCount}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.onCategoryClick('Lists');
            }}>
            <View style={styles.bodyCategory}>
              <Text style={styles.bodyTxt}>Lists</Text>
              <Text style={styles.bodyTxt}>{listCount}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Image style={styles.drawerBtn} source={imageConstants.drawer} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.toggleModal();
            }}>
            <Image style={styles.addBtn} source={imageConstants.plus} />
          </TouchableOpacity>
        </View>
        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          hasBackdrop={true}
          onBackdropPress={this.toggleModal}>
          <View style={styles.modalMainView}>
            <FlatList
              data={this.state.category}
              renderItem={({item}) => {
                return (
                  <View style={styles.listView}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          selectedCategory: item.value,
                        });
                      }}
                      style={styles.listBtn}>
                      <Text style={styles.listTxt}>{item.value}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
            <View style={styles.touchableView}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  this.setState({
                    modalVisible: false,
                  });
                  this.props.navigation.navigate('editNote');
                  this.props.updateSelectedCategory(
                    this.state.selectedCategory,
                  );
                }}>
                <View style={styles.submitView}>
                  <Text>Submit</Text>
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
    color: colorConstants.red,
    fontWeight: 'bold',
  },
  headerTxt2: {
    fontSize: 60,
    marginLeft: 10,
    fontWeight: 'bold',
    color: colorConstants.darkBlue,
  },
  body: {
    flex: 0.5,
  },
  bodyTxt: {
    fontSize: 40,
    color: colorConstants.darkBlue,
    marginVertical: 20,
    marginLeft: 50,
    fontWeight: 'bold',
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
  modalMainView: {
    flex: 0.5,
    backgroundColor: colorConstants.oliveGreen,
    borderRadius: 15,
  },
  listView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  submitView: {
    alignItems: 'center',
  },
  listBtn: {
    width: '70%',
    backgroundColor: colorConstants.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 50,
  },
  listTxt: {
    fontSize: 35,
    fontFamily: 'futura-medium',
    color: colorConstants.white,
  },
  touchableView: {
    alignItems: 'center',
    width: '50%',
    flex: 1,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    backgroundColor: colorConstants.navyBlue,
    height: 45,
    borderRadius: 15,
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
  personalCount: state.notesReducer.pc,
  workCount: state.notesReducer.wc,
  ideasCount: state.notesReducer.ic,
  listCount: state.notesReducer.lc,
  selectedCategory: state.notesReducer.selectedCategory,
});
const mapDispatchToProps = {
  //notesType: notesType,
  updateSelectedCategory: updateSelectedCategory,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
