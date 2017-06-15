import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  Dimensions
} from 'react-native';

// Components
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');

export class WorkoutList extends Component {
  static defaultProps = {
    currentWorkout: []
  }

  constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      workoutList: ds.cloneWithRows(props.currentWorkout)
    }
  }

  // List of workout
  // Button add some exercises
  render() {
    const workoutList = this.state.workoutList.cloneWithRows(this.props.currentWorkout);
    return(
      <View>
        <ListView
          style={styles.workoutList}
          dataSource={workoutList}
          enableEmptySections={true}
          renderFooter={() => (
            <View style={styles.addSomeExecercises}>
              <Text style={styles.bigText}>add some exercises</Text>
              <Button
                onPress={() => this.props.setModalVisibility(true)}
                style={styles.plusButton}
                textStyle={styles.plus}>
                  <Icon name="add" size={40} color="white" />
              </Button>
            </View>
          )}
          renderRow={(exercise, rowId) => (
            <View style={styles.rowContainer}>
              <View  style={styles.workout}>
                <Text style={styles.workoutText}>{exercise.name}</Text>
              </View>

              <Button
                onPress={() => this.props.removeExercise(exercise)}
                style={styles.removeBtn}
                textStyle={styles.remove}>
                  <Icon name="remove" size={16} color="white" />
              </Button>
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addSomeExecercises: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  bigText: {
    fontSize: 20,
    color: 'blue'
  },
  plusButton: {
    borderStyle: null,
    borderWidth: 0
  },
  plus: {
    color: 'black',
    fontSize: 60
  },

  // row
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeBtn: {
    borderStyle: null,
    borderWidth: 0,
    flex: 0.2
  },
  remove: {
    color: 'black',
    fontSize: 15
  },

  workoutList: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: width * .80
  },
  workout: {
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1,
    padding: 10,
    flex: 0.5
  },
  workoutText: {
    color: 'white',
    fontSize: 16,
    flex: 0.8
  }
});
