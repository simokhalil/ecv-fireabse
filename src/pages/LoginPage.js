import React, { Component } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Input, Item, } from 'native-base';

import AppConstants from '../app/app.constants';
import { AuthService, usersDB } from '../firebase';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  submitForm = async () => {
    const { email, password } = this.state;

    try {
      const response = await AuthService.login(email, password);

      const user = await usersDB.getUserInfo(response.user.uid);

      console.log('Login response', response);
      console.log('user response', user);

      Actions[AppConstants.ROUTES.homepage]({
        type: ActionConst.RESET,
        user: user.data(),
      });

    } catch (e) {
      console.log('Error signup', e);
      Alert.alert('Erreur', e.message)
    }
  };

  goToSignup = () => {
    Actions[AppConstants.ROUTES.signup]();
  };

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container} test2>
        <Item>
          <Input
            keyboardType="email-address"
            placeholder="Email"
            value={email}
            onChangeText={(text) => this.handleInputChange('email', text)}
          />
        </Item>
        <Item last>
          <Input
            secureTextEntry
            placeholder="Mot de passe"
            value={password}
            onChangeText={(text) => this.handleInputChange('password', text)}
          />
        </Item>

        <Button
          onPress={this.submitForm}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </Button>

        <Button style={styles.button} onPress={this.goToSignup}>
          <Text style={styles.buttonText}>Créer un compte</Text>
        </Button>
      </View>
    )
  }
}

export default LoginPage;
