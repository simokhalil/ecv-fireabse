import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button, Content, Form, Item, Input, Text } from 'native-base';
import { Alert, StyleSheet, View } from 'react-native';

import { AuthService, usersDB } from '../firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  submitForm = async () => {
    const { email, password, firstName, lastName } = this.state;

    try {
      const response = await AuthService.createUser(email, password);

      await usersDB.addUserInfo(response.user.uid, {
        firstName,
        lastName,
      });

      Actions.pop();
    } catch (e) {
      console.log('Error signup', e);
      Alert.alert('Erreur', e.message)
    }
  };

  render() {
    const { email, password, firstName, lastName } = this.state;

    return (
      <View style={styles.container}>
        <Content style={styles.container}>
          <Form>
            <Item>
              <Input
                placeholder="Prénom"
                value={firstName}
                onChangeText={(text) => this.handleInputChange('firstName', text)}
              />
            </Item>

            <Item>
              <Input
                placeholder="Nom"
                value={lastName}
                onChangeText={(text) => this.handleInputChange('lastName', text)}
              />
            </Item>

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

            <Button onPress={this.submitForm}>
              <Text>Créer un compte</Text>
            </Button>
          </Form>
        </Content>
      </View>
    )
  }
}

export default SignupPage;
