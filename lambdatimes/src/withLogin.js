import React from 'react';

const withLogin = (Component) => {
    return class WithLogin extends React.Component {
        state = {
            isLoggedIn: false,
        }

        componentDidMount() {
            
        }

        render() {
            return (
                <Component {...this.props} />
            )
        }
    }
}

export default withLogin;