import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import products from '../product-data'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "1em",
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Products() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {
                    products.map(product => (
                        <Grid item xs={12} sm={6} md={3} lg={2} >
                            <Product key={product.id} product={product}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}
