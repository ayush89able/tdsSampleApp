import React from 'react';
import Heading from '@tds/core-heading'
import Input from '@tds/core-input'
import Button from '@tds/core-button'
import Box from '@tds/core-box'
import Tooltip from '@tds/core-tooltip'
import Paragraph from '@tds/core-paragraph'
import Notification from '@tds/core-notification'
import Text from '@tds/core-text'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            emptyError: false,
            succuss: null,
            registerd: true
        }
    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            [name]: val
        }, () => {
            // console.log(this.state)
        });
    }

    onSubmit = () => {
        if (this.state.email === null || this.state.password === null) {
            this.setState({
                emptyError: true
            }, () => {
                // console.log(this.state)
            })
            return;
        }
        let usersDataString = localStorage.getItem('usersData');
        if (usersDataString !== null) {
            let usersDataObj = JSON.parse(usersDataString)
            let users = usersDataObj.users;
            for (let i = 0; i < users.length; i++) {

                if (this.state.email === users[i].email
                    && this.state.password === users[i].password) {
                    console.log('success')
                    let logedInUser = JSON.stringify(users[i])
                    localStorage.setItem('user', logedInUser)
                    this.setState({
                        succuss: true
                    }, () => {
                        console.log(this.state)
                        this.props.history.push("/profile");
                    })
                }
            }

            if (this.state.succuss == false) {
                this.setState({
                    notMatch: true,
                    emptyError: false
                })
            }
        } else { //if nothing is found in localstorage
            this.setState({
                registerd: false
            })
        }
    }

    forgotPassword = () => {
        this.props.history.push('/forgotPassword');
    }

    render() {
        return (
            <div style={{ position: 'relative', top: '1.2em', paddingLeft: '2em', paddingRight: '4em' }}>
                <div style={{ textAlign: 'center' }}><Heading level="h1">Login</Heading></div>
                <Paragraph >First Register user, which will be saved in local storage then use same credentials to login</Paragraph>
                <Box between={4} >
                    <Input label='EMAIL' type='email' hint='Please Enter your email id' hintPosition='below' name='email' onChange={this.myChangeHandler}
                        tooltip={
                            <Tooltip copy="en">
                                It is adviced to use working email address, it may be used later for carrying any information
                        </Tooltip>
                        }
                    />
                    <Input label='PASSWORD' type='password' hint='Please Enter your password' hintPosition='below' name='password' onChange={this.myChangeHandler}
                        tooltip={
                            <Tooltip copy="en">
                                It is adviced to have atleast 8 digit password which containes atleat 1 letter,numeric and special character
                        </Tooltip>
                        }
                    />
                    <div style={{ width: '12em', float: 'right' }}>
                        <Button onClick={this.forgotPassword}>Forgot Password</Button>
                    </div>
                    {!this.state.registerd ?
                        <Notification variant="error" copy="en">
                            <Text bold>User with these credentials is not found, Please register and try again </Text>
                        </Notification>
                        : ''}
                    {this.state.emptyError ?
                        <Notification variant="error" copy="en">
                            <Text bold>Please Enter details  </Text>
                        </Notification>
                        : ''}
                    {this.state.notMatch &&
                        <Notification variant="error" copy="en">
                            <Text bold>Please Check Entered Details Something is wrong  </Text>
                        </Notification>
                    }
                    <Button onClick={this.onSubmit}>Submit</Button>
                </Box>
            </div>
        )
    }
}
export default Login;