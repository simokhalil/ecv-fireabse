import React, { Component } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Alert, Text, View } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';

import * as PostsActions from '../redux/actions/posts-actions';

import AppConstants from '../app/app.constants';
import { AuthService } from '../firebase';

class HomePage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  signout = async () => {
    try {
      const response = await AuthService.signout();
      console.log('signout response', response);
      Actions[AppConstants.ROUTES.login]({
        type: ActionConst.RESET,
      });
    } catch (e) {
      Alert.alert('Erreur', e.message);
    }
  }

  render() {
    const { user } = this.props;

    return (
      <View>
        <Text>Bienvenue {user.firstName} {user.lastName}</Text>



        <Button onPress={this.signout}>
          <Text>Déconnexion</Text>
        </Button>


        {this.props.postsList.map((post, index) => (
          <Text key={index}>{post.title}</Text>
        ))}
      </View>
    );
  }
}

HomePage.defaultProps = {
  postsList: [],
};

const mapStateToProps = state => ({
  postsList: state.postsReducer.posts,
});

export default connect(mapStateToProps, { ...PostsActions })(
  HomePage
);
