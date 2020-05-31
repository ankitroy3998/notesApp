import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addNote, updateHome} from '../Services/Notes/action';

class editNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      info: '',
    };
  }

  clickSubmit() {
    const {title, info} = this.state;
    const {id, selectedCategory} = this.props;
    this.props.navigation.goBack();
    this.props.addNote(title, info, id);
    console.log('value added' + title + info);
    this.updateCount(selectedCategory);
  }

  updateCount(category) {
    const {title, info} = this.state;
    if (title && info) {
      this.props.updateHome(category);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <TextInput
            style={styles.txtInput}
            placeholder="Title"
            placeholderTextColor="#9494b8"
            onChangeText={text => this.setState({title: text})}
            value={this.state.title}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.txtInput}
            placeholder="info"
            placeholderTextColor="#9494b8"
            onChangeText={text => this.setState({info: text})}
            value={this.state.info}
            autoCapitalize="none"
          />
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.touchableView}
              onPress={() => {
                this.clickSubmit();
              }}>
              <Text>Add Note</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInput: {
    padding: 15,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#c2c2d6',
    marginVertical: 12,
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  touchableView: {
    backgroundColor: 'lightblue',
    width: '80%',
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapStateToProps = state => ({
  id: state.loginReducer.id,
  selectedCategory: state.notesReducer.selectedCategory,
});

const mapDispatchToProps = {
  addNote: addNote,
  updateHome: updateHome,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(editNote);
