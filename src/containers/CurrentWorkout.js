import { connect } from 'react-redux';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { TopBar, ExerciseModal, WorkoutList } from '../ui';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { fetchCurrentWorkout, addExerciseToCurrentWorkout } from '../actions/actionCreators';
import { setExerciseModalVisibility, addExercise, removeExercise } from '../actions/actions';

const mapStateToProps = (state) => ({
  currentWorkout: state.currentWorkout,
  exerciseModal: state.ui.exerciseModal,
  exercises: state.exercises,
});

const mapActionsToProps = (dispatch) => ({
  setModalVisibility(visible) {
    return dispatch(setExerciseModalVisibility(visible));
  },
  addExercise(exercise){
    return dispatch(addExercise(exercise));
  },
  removeExercise(exercise) {
    return dispatch(removeExercise(exercise));
  }
});

class Container extends Component {
  static defaultProps = {
    currentWorkout: [],
    exercises: []
  }
  componentDidMount() {
    // this.props.fetchCurrentWorkout();
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#52EDC7', '#5AC8FB']}
          style={styles.container}
        >
          <TopBar style={styles.topbar}>
            <Text style={styles.topbarText}>
              Current Workout
            </Text>
          </TopBar>
          <View style={styles.currentWorkout}>
            <WorkoutList
              removeExercise={this.props.removeExercise}
              setModalVisibility={this.props.setModalVisibility}
              currentWorkout={this.props.currentWorkout}
            />
          </View>
        </LinearGradient>
        <ExerciseModal
          exercises={this.props.exercises}
          visible={this.props.exerciseModal}
          addExercise={this.props.addExercise}
          closeModal={() => this.props.setModalVisibility(false)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: 2
  },
  topbarText: {
    color: '#AB88E7',
    fontSize: 26
  },
  currentWorkout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const CurrentWorkout = connect(mapStateToProps, mapActionsToProps)(Container);
