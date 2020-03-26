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
            succuss: false,
            registerd: true
        }
    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            [name]: val
        }, () => {
            console.log(this.state)
        });
    }

    onSubmit = () => {
        console.log(this.state)
        if (this.state.email === null || this.state.password === null) {
            console.log('enter details')
            this.setState({
                emptyError: true
            }, () => {
                console.log(this.state)
            })
            return;
        }

        let localDataString = localStorage.getItem('user');
        console.log('localDataString', localDataString)
        if (localDataString !== null) {
            let localData = JSON.parse(localDataString)
            console.log('user', localData);
            console.log('local email', localData.email)
            console.log(this.state.email)
            console.log('local password', localData.password)
            console.log(this.state.password)
            if (this.state.email === localData.email
                && this.state.password === localData.password) {
                console.log('success')
                this.setState({
                    succuss: true
                }, () => {
                    console.log(this.state)
                    this.props.history.push("/profile");
                })
            } else {
                this.setState({
                    notMatch: true
                })
            }
        } else { //if nothing is found in localstorage
            this.setState({
                registerd: false
            })
        }
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
                    <Button onClick={this.onSubmit}>Submit</Button>
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
                </Box>
            </div>
        )
    }
}
export default Login;