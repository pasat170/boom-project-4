import * as React from "react";
import Button from "@mui/material/Button";
import Logo from "../logo/Logo";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Container, Grid, Input, InputAdornment, IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2),
    },
    search: {
        marginLeft: theme.spacing(2),
        width: '100%'
    },
    button: {
        marginRight: theme.spacing(1),
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <Grid container alignItems="center">
                    <Grid item xs={3}>
                        <Logo />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            placeholder="Find items, users and activities"
                            className={classes.search}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button className={classes.button}>Home</Button>
                        <Button className={classes.button}>Activity</Button>
                        <Button>Explore</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}