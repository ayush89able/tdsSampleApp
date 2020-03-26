import React from 'react'
import DisplayHeading from '@tds/core-display-heading'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'
const Home = props => {
    return (
        <div style={{ position: 'relative', top: '1.2em' }}>
            <DisplayHeading>Home</DisplayHeading>
            <Box>
                <Paragraph>
                    First Register user, which will be saved in local storage then use same credentials to login
    </Paragraph>
            </Box>
        </div>
    )
}
export default Home