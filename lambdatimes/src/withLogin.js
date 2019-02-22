import React from 'react';
import { auth, initializeApp } from 'firebase';

const config = {
    apiKey: "AIzaSyAf8efrlIdRFGF_aHj7m3yalnkgK8-qCsQ",
    authDomain: "lambdanews-9c595.firebaseapp.com",
    databaseURL: "https://lambdanews-9c595.firebaseio.com",
    projectId: "lambdanews-9c595",
    storageBucket: "lambdanews-9c595.appspot.com",
    messagingSenderId: "682479032947"
};

const app = initializeApp(config);

const withLogin = (Component) => {
    return class WithLogin extends React.Component {
        state = {
            user: {},
            isLoggedIn: false,
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