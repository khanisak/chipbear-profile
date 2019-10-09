import React from 'react';
import {
    Typography
} from '@material-ui/core';

const Description = () => {
    return (
        <>
            <h1>Chipbear Studio</h1>
            <Typography variant="body1" wrap="wrap">
                Chipbear Studio is an organization that focuses on solving problems in our daily lives through technology. Established in 2015 we have offered several solutions in the form of mobile applications and websites.
                </Typography>
            <br />
            <Typography variant="subtitle1">
                Contact us <a href="mailto:support@chipbear.com">support@chipbear.com</a>
            </Typography>
        </>
    )
}

export default Description