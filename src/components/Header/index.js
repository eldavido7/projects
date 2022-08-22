import React from 'react';
import { Box, Grid, Typography, Button } from "@material-ui/core";

const openInNewTab = () => {
    window.open("https://train-public2.web.app", 'noopener,noreferrer');
};

export default (props) => (
    <Box py={10} bgcolor="secondary.main" color="white">
        <Grid container justify='center'>
            <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='h4'>Open Job Listings</Typography>
                    <Button onClick={openInNewTab} variant='contained' color='primary' disableElevation target="_blank">
                        Training
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
);