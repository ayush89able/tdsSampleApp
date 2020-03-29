import React from 'react';
import Image from '@tds/core-image'
import Heading from '@tds/core-heading'
import NotFoundImage from '../pageNotFound.jpg'
const NotFound = () => {
    return (
        <div style={{ marginTop: '3em', textAlign: 'center' }}>
            <Heading level='h1'>Page Not Found</Heading>
            <Image src={NotFoundImage} height='300' width='300' rounded='corners' />
        </div>
    )
}
export default NotFound