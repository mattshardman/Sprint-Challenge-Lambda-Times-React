import React from 'react';
import { auth } from 'firebase';

const persistedState = localStorage.getItem('username');

const withLogin = (Component) => {
    return class WithLogin extends React.Component {
        state = {
            user: '',
            isLoggedIn: false,
        }

        componentDidMount() {
           
            
        }

        loggedIn = (user) => {
           this.setState({ 
                isLoggedIn: true, 
                user: {
                    name: user.displayName,
                    
                }
            })
              
        }

        logOut = () => {
            this.setState({ isLoggedIn: false });
            auth.signOut();
        }

        render() {
            console.log(this.state)
            return (
                <Component 
                    {...this.state} 
                    {...this.props} 
                    loggedIn={this.loggedIn} 
                    logOut={this.logOut} 
                />
            )
        }
    }
}

export default withLogin;