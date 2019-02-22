import React from 'react';

const persistedState = localStorage.getItem('username');

const withLogin = (Component) => {
    return class WithLogin extends React.Component {
        state = {
            isLoggedIn: false,
        }

        componentDidMount() {
            if (persistedState) {
                console.log(persistedState)
                this.setState({ isLoggedIn: true });
            }
        }

        logIn = (e, username, password) => {
            this.setState({ isLoggedIn: true, username });
            localStorage.setItem('username', username);
        }

        logOut = () => {
            this.setState({ isLoggedIn: false });
            localStorage.removeItem('username');
        }

        render() {
            console.log(this.state)
            return (
                <Component 
                    {...this.state} 
                    {...this.props} 
                    logIn={this.logIn} 
                    logOut={this.logOut} 
                />
            )
        }
    }
}

export default withLogin;