import React from 'react';
import { auth, initializeApp } from 'firebase';

import { config } from './config';

const app = initializeApp(config);

const withLogin = (Component) => {
    return class WithLogin extends React.Component {
        state = {
            user: { name: '', photo: '' },
            isLoggedIn: false,
        }

        componentDidMount () {
            auth().onAuthStateChanged((user) => {
                if (user) {
                  this.setState({ 
                    isLoggedIn: true, 
                    user: {
                        name: user.displayName,
                        photo: user.photoURL
                    }
                })
                }
              });
        }

        loggedIn = async () => {
            const provider = new auth.GoogleAuthProvider();
            try {
                const result = await auth().signInWithPopup(provider);              
                const user  = await result.user
                await this.setState({ 
                    isLoggedIn: true, 
                    user: {
                        name: user.displayName,
                        photo: user.photoURL
                    }
                })

            } catch (e) {
                console.log(e);
            }
           
              
        }

        logOut = () => {
            this.setState({ isLoggedIn: false });
            auth().signOut()
        }

        render() {
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