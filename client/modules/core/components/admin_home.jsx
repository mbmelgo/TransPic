import React from 'react';

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props;
    console.log(user);
    return (
      <div>
        AdminHome
      </div>
    );
  }
}

export default AdminHome;
