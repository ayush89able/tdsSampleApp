import React from 'react'
import FlexGrid from '@tds/core-flex-grid'
import Box from '@tds/core-box'
import Card from '@tds/core-card'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Button from '@tds/core-button'
import { Link } from 'react-router-dom'

const Home = props => {
    return (
        <div style={{ position: 'relative', top: '1.2em' }}>

            <Box>
                <Paragraph>
                    First Register user, which will be saved in local storage then use same credentials to login
                </Paragraph>
            </Box>

            <FlexGrid>
                <FlexGrid.Row>
                    <FlexGrid.Col>
                        <Box vertical={4}>
                            <Card>
                                <Box between={4}>
                                    <Box between={3}>
                                        <Heading level="h2">Need to Register?</Heading>
                                        <Paragraph>
                                            Register here
                    </Paragraph>
                                    </Box>
                                    <div>
                                        <Link to="/register"><Button>Register</Button></Link>
                                    </div>
                                </Box>
                            </Card>

                        </Box>
                    </FlexGrid.Col>
                    <FlexGrid.Col>
                        <Box vertical={4}>
                            <Card>
                                <Box between={4}>
                                    <Box between={3}>
                                        <Heading level="h2">Need to Login?</Heading>
                                        <Paragraph>
                                            Login here
                    </Paragraph>
                                    </Box>

                                    <div>
                                        <Link to="/login"><Button>Login</Button></Link>
                                    </div>
                                </Box>
                            </Card>
                        </Box>
                    </FlexGrid.Col>
                </FlexGrid.Row>
            </FlexGrid>
        </div>
    )
}
export default Home