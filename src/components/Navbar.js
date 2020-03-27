import React from 'react';
import { Link } from 'react-router-dom'
import Box from '@tds/core-box'
import Text from '@tds/core-text'
const Navbar = props => {
    return (
        <Box style={{ background: '#4b286d', width: '100%', top: '0', left: '0', position: 'fixed', zIndex: '999' }} vertical={2} between={2}>
            <div style={{ display: 'inline', zIndex: '100' }}>
                <Text invert={true}>Practice Project</Text>
                <Link style={{ color: '#FFFFFF', float: 'right', marginRight: '1em' }} to='/login'>LOGIN</Link>
                <Link style={{ color: '#FFFFFF', float: 'right', marginRight: '1em' }} to='/register'>REGISTER</Link>
            </div>
        </Box>
    )
}
export default Navbar;