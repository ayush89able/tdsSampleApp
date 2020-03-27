import React from 'react';
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import Button from '@tds/core-button'
import Input from '@tds/core-input'
import Radio from '@tds/core-radio'
import Text from '@tds/core-text'
import Notification from '@tds/core-notification'
import Paragraph from '@tds/core-paragraph'
import Select from '@tds/core-select'
import Tooltip from '@tds/core-tooltip'
import Checkbox from '@tds/core-checkbox'
import TextArea from '@tds/core-text-area'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            fName: '',
            lName: '',
            email: '',
            password: '',
            mobile: '',
            gender: '',
            occupation: '',
            location: '',
            success: '',
            consumerSelected: true,
            businessSelected: false,
            errorMessage: undefined,
            statusFirstName: undefined,
            statusLastName: undefined,
            errorMessageFirstName: undefined,
            errorMessageLastName: undefined
        };
    }

    validateTextArea = event => {
        const value = event.target.value

        if (value.length < 1) {
            this.setState({
                textAreaStatus: 'error',
            })
        } else {
            this.setState({
                textAreaStatus: 'success',
            })
        }
    }

    validateFirstName = event => {
        const value = event.target.value
        // console.log(event.target)
        if (value.length < 1) {
            this.setState({
                statusFirstName: 'error',
                errorMessageFirstName: 'Please fill ' + event.target.id,
            })
        } else {
            this.setState({
                statusFirstName: 'success',
                errorMessageFirstName: undefined,
            })
        }
    }

    validateLastName = event => {
        const value = event.target.value
        // console.log(event.target)
        if (value.length < 1) {
            this.setState({
                statusLastName: 'error',
                errorMessageLastName: 'Please fill ' + event.target.id,
            })
        } else {
            this.setState({
                statusLastName: 'success',
                errorMessageLastName: undefined,
            })
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

    // onChange = evt => {
    //     this.setState({ value: evt.target.value })
    // }

    handleCheck = (event) => {
        if (event.target.value === 'consumer') {
            this.setState({ consumerSelected: event.target.checked })
        } else if (event.target.value === 'business') {
            this.setState({ businessSelected: event.target.checked })
        }
    }

    register = evt => {
        // console.log(this.state)
        if (this.state.fName !== '' &&
            this.state.lName !== '' &&
            this.state.email !== '' &&
            this.state.mobile !== '' &&
            this.state.password !== '' &&
            this.state.gender !== '' &&
            this.state.location !== '' &&
            this.state.occupation !== '') {
            this.setState({
                success: 'true'
            })
            let user = {
                firstName: this.state.fName,
                lastName: this.state.lName,
                email: this.state.email,
                mobile: this.state.mobile,
                password: this.state.password,
                gender: this.state.gender,
                occupation: this.state.occupation,
                location: this.state.location,
                address: this.state.address
            }
            localStorage.setItem(
                'user', JSON.stringify(user)
            )
            this.props.history.push('/login')
        }
        else {
            this.setState({
                success: 'false'
            })
        }
    }

    render() {
        let alert;
        if (this.state.success === 'true') {
            alert = <Notification variant="success" copy="en">
                <Text bold>You registered successfully </Text>
            </Notification>;
        } else if (this.state.success === 'false') {
            alert = <Notification variant="error" copy="en">
                <Text bold>Please fill all details and try again </Text>
            </Notification>;
        } else {
            alert = <> </>;
        }
        return (
            <div style={{ position: 'relative', top: '1.2em', paddingLeft: '2em', paddingRight: '2em' }}>
                <div style={{ textAlign: 'center' }}><Heading level="h1">Register</Heading></div>
                <Paragraph >First Register user, which will be saved in local storage then use same credentials to login</Paragraph>
                <Box >
                    <div style={{ marginRight: '1em' }}>
                        <Input label="First name" type="text" name='fName' id='first name'
                            hint='Please type your firstName'
                            hintPosition='below'
                            feedback={this.state.statusFirstName}
                            error={this.state.errorMessageFirstName}
                            onBlur={this.validateFirstName}
                            onChange={this.myChangeHandler} />
                    </div>

                    <div style={{ marginRight: '1em' }}>
                        <Input label="Last name" type="text" name='lName' id='last name'
                            hint='Please type your lastName'
                            hintPosition='below'
                            feedback={this.state.statusLastName}
                            error={this.state.errorMessageLastName}
                            onBlur={this.validateLastName}
                            onChange={this.myChangeHandler} />
                    </div>

                    <div style={{ marginRight: '1em' }}>
                        <Input label="Email" type="email" name='email'
                            hint='Please type your email id'
                            hintPosition='below'
                            onChange={this.myChangeHandler} />
                    </div>

                    <div style={{ marginRight: '1em' }}>
                        <Input label="Password" type="password" name='password'
                            hint='Please type your password'
                            hintPosition='below'
                            onChange={this.myChangeHandler} />
                    </div>

                    <div style={{ marginRight: '1em' }}>
                        <Input type="tel" label="Mobile phone" name='mobile' onChange={this.myChangeHandler} pattern="[0-9]{10}"
                            maxLength="10" />
                    </div>

                    <Box tag="fieldset" between={2}>
                        <legend>
                            <Text bold size="medium">
                                Gender:
          </Text>
                        </legend>
                        <Radio
                            label="Male"
                            name="gender"
                            value="Male"
                            onChange={this.myChangeHandler}
                        />
                        <Radio
                            label="Female"
                            name="gender"
                            value="Female"
                            onChange={this.myChangeHandler}
                        />
                    </Box>

                    <Box tag="fieldset" between={2}>
                        <legend>
                            <Text bold size="medium">
                                Occupation:
          </Text>
                        </legend>
                        <Radio
                            label="Private Job"
                            name="occupation"
                            value="PrivateJob"
                            onChange={this.myChangeHandler}
                        />
                        <Radio
                            label="Government Job"
                            name="occupation"
                            value="GovernmentJob"
                            onChange={this.myChangeHandler}
                        />
                    </Box>

                    <Select
                        label="Office Location"
                        placeholder="Please select..."
                        name='location'
                        options={[
                            {
                                text: 'Karnatka',
                                options: [{ text: 'Banglore', value: 'Banglore' }, { text: 'Mysore', value: 'Mysore' }],
                            },
                            {
                                text: 'Uttar Pradesh',
                                options: [{ text: 'Noida', value: 'Noida' }, { text: 'Lucknow', value: 'Lucknow' }],
                            },
                            {
                                text: 'Maharashtra',
                                options: [{ text: 'Pune', value: 'Pune' }, { text: 'Mumbai', value: 'Mumbai' }],
                            },
                        ]}
                        onChange={this.myChangeHandler}
                        tooltip={<Tooltip copy="en">Select location where you work.</Tooltip>}
                    />

                    <Box tag="fieldset" between={2}>
                        <legend>
                            <Text bold size="medium">
                                Filter products:
                            </Text>
                        </legend>
                        <Checkbox
                            checked={this.state.consumerSelected}
                            onChange={this.handleCheck}
                            name="products"
                            value="consumer"
                            label="Consumer"
                        />
                        <Checkbox
                            checked={this.state.businessSelected}
                            onChange={this.handleCheck}
                            name="products"
                            value="business"
                            label="Business"
                        />
                    </Box>
                    <div style={{ marginRight: '4em' }}>
                        <TextArea
                            label="Address"
                            name='address'
                            feedback={this.state.textAreaStatus}
                            error="Address must be filled."
                            hint='Plese enter your address'
                            onChange={this.myChangeHandler}
                            onBlur={this.validateTextArea}
                        />
                    </div>
                    {alert}
                    <br />
                    <Button onClick={this.register}>Register</Button>

                </Box>
            </div>
        );
    }
}

export default Register;