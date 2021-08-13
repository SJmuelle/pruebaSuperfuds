
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Chip from '@material-ui/core/Chip';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import accounting from 'accounting';

import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
        width: "7em",
        margin: "auto"
    },
    chipText: {
        background: "#009e90",
        color: "#fff",
        marginLeft: "1em"
    },
    subheader: {
        padding: 0,
        color: "#25c16a"
    },
    CardContent:{
        textAlign:"left"
    },
    buttongroup: {
        position: "absolute",
        right: "1em"
    },
    textunits: {
        fontSize: "13px",
        color: "#616161"
    },
    tooltip:{
        color:"#2f75bb"
    }
});
// const useStylesBootstrap = makeStyles((theme) => ({
//     arrow: {
//         color: theme.palette.common.black,
//     },
//     tooltip: {
//         backgroundColor: "#2F75BB",
//     },
// }));
// function BootstrapTooltip(props) {
//     const classes = useStylesBootstrap();

//     return <Tooltip arrow classes={classes} {...props} />;
// }

export default function Product({ CheckoutCard: { id, title, supplier, tax, price_real, image, thumbnail, description, units_sf, slug, category, subcategory, net_content, sellos } }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                >
                    <ButtonGroup
                        orientation="vertical"
                        className={classes.buttongroup}
                        aria-label="vertical    group"
                    >
                        {
                            sellos.map(sello => (
                                <Tooltip  title= {sello.name} arrow    className={classes.tooltip}>
                                    <Button style={{

                                        border: "none",
                                        outline: "none"
                                    }}> <img src={sello.image} alt="sellos" /></Button>
                                </Tooltip >
                            ))
                        }

                    </ButtonGroup>
                </CardMedia>
                <CardContent className={classes.cardcontent} >
                    <Typography  gutterBottom variant="small" component="small">
                        <strong className={classes.subheader}>{supplier}</strong>
                        
                    <Chip className={classes.chipText}

                            size="small"
                            label={net_content}
                        />
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                        <strong>{title.substr(0, 17)}...</strong>
                    </Typography>
                    <Typography variant="h5" >
                        {accounting.formatMoney(price_real)} <small className={classes.textunits}> x {units_sf} {units_sf === 1 ? 'Unidad' : 'Unidades'}</small>
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}
