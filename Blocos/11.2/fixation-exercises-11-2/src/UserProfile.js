import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    // const { name, email } = this.props.user;
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alt="User avatar" />
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string.isRequired
  })
};

export default UserProfile;