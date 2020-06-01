import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {getNote, deleteNote, updateNote} from '../Services/Notes/action';
import {imageConstants, colorConstants} from '../Config/constant';

class DisplayNotes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNote(this.props.id);
  }

  render() {
    const {infoData} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleTxt}>{this.props.selectedCategory}</Text>
        </View>
        <FlatList
          data={infoData}
          renderItem={({item}) => {
            return (
              <View style={styles.FlatListView}>
                <Text style={styles.time}>{item.createdDate}</Text>
                <View style={styles.listMidView}>
                  <Text style={styles.title}>{item.title}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.deleteNote(this.props.id, item.id);
                      this.props.updateNote(item.title);
                    }}>
                    <Image source={imageConstants.bin} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.data}>{item.data}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConstants.white,
  },
  titleView: {marginLeft: 40, marginVertical: 40},
  titleTxt: {
    color: colorConstants.red,
    fontSize: 60,
    fontWeight: 'bold',
  },

  FlatListView: {
    padding: 25,
    marginVertical: 12,
    marginHorizontal: 20,
    shadowColor: colorConstants.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: colorConstants.white,
    borderRadius: 15,
  },
  listMidView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  time: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colorConstants.lightRed,
  },
  title: {
    color: colorConstants.navyBlue,
    fontSize: 21,
    marginTop: 8,
    fontWeight: 'bold',
  },
  data: {
    color: colorConstants.navyBlue,
    fontSize: 18,
    marginTop: 8,
  },
});

const mapStateToProps = state => ({
  infoData: state.notesReducer.addNote,
  id: state.loginReducer.id,
  selectedCategory: state.notesReducer.selectedCategory,
});

const mapDispatchToProps = {
  getNote: getNote,
  deleteNote: deleteNote,
  updateNote: updateNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayNotes);
