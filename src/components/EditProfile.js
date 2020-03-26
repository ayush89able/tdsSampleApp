import React from 'react'
import Heading from '@tds/core-heading'
import Input from '@tds/core-input'
import Box from '@tds/core-box'
import Text from '@tds/core-text'
import Radio from '@tds/core-radio'
import Select from '@tds/core-select'
import Tooltip from '@tds/core-tooltip'
import TextArea from '@tds/core-text-area'
import Button from '@tds/core-button'
import Spinner from '@tds/core-spinner'
import Notification from '@tds/core-notification'

class EditProfile extends React.Component {
    state = {
        saving: false
    };
    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        // console.log(name)
        if (name === 'fName') {
            this.setState({
                'firstName': val
            }, () => {
                // console.log(this.state)
            });
        }
        else if (name === 'lName') {
            this.setState({
                'lastName': val
            }, () => {
                // console.log(this.state)
            });
        }
        else {

            this.setState({
                [name]: val
            }, () => {
                // console.log(this.state)
            });
        }
    }

    updateProfile = () => {
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.mobile !== '' &&
            this.state.gender !== '' && this.state.occupation !== '' && this.state.location !== '' && this.state.address !== '') {
            this.setState({
                loading: true
            })
            let data = JSON.stringify(this.state)
            localStorage.setItem('user', data)
            setTimeout(() => {
                this.setState({
                    loading: false,
                    success: true
                })
            }, 2000)
        } else {
            this.setState({ error: true })
        }
    }

    componentDidMount() {
        let Data = localStorage.getItem('user');
        let userData = JSON.parse(Data)
        // console.log(userData);
        let firstName = userData.firstName
        let lastName = userData.lastName;
        let email = userData.email;
        // console.log(email);
        let gender = userData.gender;
        // console.log(gender);
        let occupation = userData.occupation;
        // console.log(occupation);
        let mobile = userData.mobile;
        // console.log(mobile);
        let location = userData.location;
        // console.log(location);
        let address = userData.address;
        // console.log(address);
        let password = userData.password;
        this.setState({
            firstName, lastName, email, gender, occupation, mobile, location, address, password
        }, () => {
            // console.log(this.state)
        })

    }


    render() {
        return (
            <div style={{ marginRight: '1em' }}>
                <div style={{ textAlign: 'center' }}><Heading>Update Profile</Heading></div>
                <Input label="First name" type="text" name='fName' id='first name'
                    hint='Please type your firstName'
                    hintPosition='below'
                    value={this.state.firstName}
                    onChange={this.myChangeHandler} />

                <Input label="Last name" type="text" name='lName' id='last name'
                    hint='Please type your lastName'
                    hintPosition='below'
                    value={this.state.lastName}
                    onChange={this.myChangeHandler} />

                <Input label="Email" type="email" name='email'
                    hint='Please type your email id'
                    hintPosition='below'
                    onChange={this.myChangeHandler}
                    value={this.state.email} />

                <Input type="tel" label="Mobile phone" name='mobile' onChange={this.myChangeHandler} pattern="[0-9]{10}"
                    maxLength="10" value={this.state.mobile} />

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
                        checked={this.state.gender === 'Male'}
                    />
                    <Radio
                        label="Female"
                        name="gender"
                        value="Female"
                        onChange={this.myChangeHandler}
                        checked={this.state.gender === 'Female'}
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
                        checked={this.state.occupation === 'PrivateJob'}
                    />
                    <Radio
                        label="Government Job"
                        name="occupation"
                        value="GovernmentJob"
                        onChange={this.myChangeHandler}
                        checked={this.state.occupation === 'GovernmentJob'}
                    />
                </Box>

                <Select
                    label="Office Location"
                    placeholder="Please select..."
                    name='location'
                    value={this.state.location}
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
                <div style={{ marginRight: '3em' }}>
                    <TextArea
                        label="Address"
                        name='address'
                        hint='Plese enter your address'
                        onChange={this.myChangeHandler}
                        value={this.state.address}
                    />
                </div>
                {this.state.success &&
                    <Notification variant="success" copy="en">
                        <Text bold>Profile is updated successfully</Text>
                    </Notification>}
                {this.state.error &&
                    <Notification variant="error" copy="en">
                        <Text bold>Profile fill all details</Text>
                    </Notification>}
                <div style={{ marginTip: '4em' }}>
                    <Spinner size="small" variant="secondary" label="Request is processing."
                        spinning={this.state.loading} inline>
                        <Button onClick={this.updateProfile}>UPDATE</Button>
                    </Spinner>
                </div>

            </div>
        )
    }
}
export default EditProfile