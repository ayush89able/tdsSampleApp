import React from 'react';
import FlexGrid from '@tds/core-flex-grid'
import Box from '@tds/core-box'
import Card from '@tds/core-card'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Button from '@tds/core-button'
import Spinner from '@tds/core-spinner'
import Image from '@tds/core-image'
import { ExpandCollapse } from '@tds/core-expand-collapse'

import EditProfile from './EditProfile'
import EditPassword from './EditPassword'
import Nature from '../nature.jpg'
class ProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            gender: '',
            mobile: '',
            occupation: '',
            contentLoading: false,
            userData: null,
            usersData: null
        }
    }

    componentDidMount() {
        let Data = localStorage.getItem('user');
        let userData = JSON.parse(Data)
        console.log(userData)
        // console.log(userData);
        let name = userData.firstName + ' ' + userData.lastName;
        // console.log(name);
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
        let usersDataString = localStorage.getItem('usersData');
        let usersData = JSON.parse(usersDataString)
        console.log(usersData)
        this.setState({
            name, email, gender, occupation, mobile, location, address, userData, usersData
        }, () => {
            console.log(this.state)
        })

    }

    logout = () => {
        localStorage.removeItem('user')
        this.setState({ contentLoading: true })
        setTimeout(() => this.props.history.push('/login'), 2000)
    }

    render() {
        return (
            <div style={{ position: 'relative', top: '1.2em' }}>
                <FlexGrid>
                    <FlexGrid.Row>
                        <FlexGrid.Col>
                            <Box vertical={4}>
                                <Card>
                                    <Box between={4}>
                                        <Box between={3}>
                                            <div style={{ margin: 'auto' }}>
                                                <Heading level="h2" >
                                                    Profile
                                                </Heading>
                                            </div>
                                            <div style={{ display: 'block', margin: 'auto' }}>
                                                <Image
                                                    src={Nature}
                                                    rounded="corners"
                                                    width={300}
                                                    height={300}
                                                    alt="Image of co-workers collaborating"
                                                />
                                            </div>

                                            <Paragraph>
                                                Name : {this.state.name} <br />
                                                Email : {this.state.email} <br />
                                                Contact details : {this.state.mobile} <br />
                                                Gender : {this.state.gender} <br />
                                                Occupation : {this.state.occupation} <br />
                                                Location : {this.state.location}<br />
                                                Address : {this.state.address}
                                            </Paragraph>

                                            <ExpandCollapse tag="h2">
                                                <ExpandCollapse.Panel id="editprofile" header="Edit Profile">
                                                    <EditProfile userData={this.state.userData} usersData={this.state.usersData} />
                                                </ExpandCollapse.Panel>
                                                <ExpandCollapse.Panel id="editPassword" header="Reset Password">
                                                    <EditPassword userData={this.state.userData} usersData={this.state.usersData} />
                                                </ExpandCollapse.Panel>
                                            </ExpandCollapse>

                                            <div style={{ marginTop: '2em' }}>
                                                <Spinner size="small" variant="secondary" label="Request is processing."
                                                    spinning={this.state.contentLoading} inline>
                                                    <Button onClick={this.logout}>LOGOUT</Button>
                                                </Spinner>
                                            </div>
                                        </Box>
                                    </Box>
                                </Card>

                            </Box>
                        </FlexGrid.Col>
                    </FlexGrid.Row>
                </FlexGrid>
            </div>
        )
    }
}
export default ProfileComponent