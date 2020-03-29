import React, { useState, useEffect } from 'react'
import Input from '@tds/core-input'
import Button from '@tds/core-button'
import Spinner from '@tds/core-spinner'
import Notification from '@tds/core-notification'
import Text from '@tds/core-text'
const EditPassword = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userData, setUserData] = useState('');
    const [usersData, setUsersData] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        let userDataString = localStorage.getItem('user')
        let userData = JSON.parse(userDataString)
        let usersDataString = localStorage.getItem('usersData');
        let usersData = JSON.parse(usersDataString)
        setUsersData(usersData)
        setUserData(userData)
        let email = userData.email;
        setEmail(email)
        console.log(props)
    }, [])

    const handlePassword = (e) => {
        let p = e.target.value
        setPassword(p)
    }

    const handleConfirmPassword = (e) => {
        let cp = e.target.value
        setConfirmPassword(cp)
    }

    const savePassword = () => {
        if (password === confirmPassword && (password !== '' && confirmPassword !== '')) {
            setError(false)
            setLoading(true)
            userData.password = password;
            localStorage.setItem('user', JSON.stringify(userData));


            let index = null;
            let users = usersData.users;
            for (let i = 0; i < users.length; i++) {
                if (email === users[i].email) {
                    index = i
                }
            }
            console.log(index)
            console.log(users)
            users[index].password = password
            let newUsers = {
                users: users
            }
            let newUsersString = JSON.stringify(newUsers)
            localStorage.setItem('usersData', newUsersString)

            setTimeout(() => {
                setLoading(false)

                setSuccess(true)
            }, 3000)
        } else {
            setError(true)
        }
    }

    return (
        <div style={{ position: 'relative', top: '1.5em', paddingLeft: '2em', marginRight: '2em', marginBottom: '2em' }}>
            <div style={{ marginTop: '1em', marginRight: '2em' }}>
                <Input type="password" label="New Password" onChange={handlePassword} />
            </div>
            <div style={{ marginTop: '1em', marginRight: '2em' }}>
                <Input type="password" label="Confirm Password" onChange={handleConfirmPassword} />
            </div>

            {
                error &&
                <Notification variant="error" copy="en">
                    <Text bold>New Password and Confirm Password do not match</Text>
                </Notification>
            }
            {
                success &&
                <Notification variant="success" copy="en">
                    <Text bold>Password is updated successfully</Text>
                </Notification>
            }
            <div style={{ float: 'right', marginTop: '1em', marginBottom: '2em' }}>
                <Spinner size="small" variant="secondary" label="Request is processing."
                    spinning={loading} inline>
                    <Button onClick={savePassword}>Change Password</Button>
                </Spinner>
            </div>
        </div >
    )
}
export default EditPassword