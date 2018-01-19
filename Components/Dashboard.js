import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';
import Trip from './Trip';
<<<<<<< HEAD
import { schedule1, schedule2 } from '../scheduleExample';
=======
import { Button } from 'react-native-elements'

>>>>>>> 2db0db2fb9e3031b489cdb4265866d6bc195e382

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
});

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [],
    };
    this.signout = this.signout.bind(this);
    this.goToTrip = this.goToTrip.bind(this);
  }
  componentWillMount() {
    // Query the database to get this user's schedules
    // Set the state with those schedules
    // Build out the button components with the schedules
    this.setState({ schedules: [schedule1, schedule2] }, () => console.log(this.state.schedules));
  }
  signout() {
    console.log('signing out');
    // sign the user out
    this.props.navigation.navigate('Login');
  }
  goToTrip() {
    console.log('clicked');
    this.props.navigation.navigate('Itinerary');
  }
  render() {
    const trips = this.state.schedules.map(event => (<Trip navigation={this.props.navigation} schedule={event} />));
    return (
      <ImageBackground
        style={{
          backgroundColor: '#000000',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={require('../img/GoldenGate.jpg')}
      >
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image source={logo} style={{ width: 100, height: 100, marginTop: 20 }} />
          <Text style={{ fontSize: 30, fontWeight: 'bold'}}>Home</Text>
          <Trip navigation={this.props.navigation} style={{ borderWidth: 1, borderColor: 'black' }} />
          <Button
            title="Plan a new trip"
            buttonStyle={{backgroundColor: '#0e416d', borderRadius: 10}}
            onPress={() => this.props.navigation.navigate('NewItinerary')}
          />
        </View>
        <Button
          small 
          raised
          buttonStyle={{backgroundColor: '#0e416d', borderRadius: 10}}
          style={{ alignItems: 'flex-end', position:'absolute', bottom:-100 }}
          title="Sign out"
          onPress={this.signout}
        />
      </View>
      </ImageBackground>
    );
  }
}

Dashboard.propTypes = {
  navigation: PropTypes.object,
};
