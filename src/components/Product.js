import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Chip from '@material-ui/core/Chip';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import accounting from 'accounting';

import Tooltip from '@material-ui/core/Tooltip';
import { actionTypes } from '../reducer';

import { useStateValue } from '../StarteProvider';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)!important',
  },
  media: {
    height: 140,
    width: '7em',
    margin: 'auto',
  },
  chipText: {
    background: '#009e90',
    color: '#fff',
    marginLeft: '1em',
  },
  subheader: {
    padding: 0,
    color: '#25c16a',
  },
  CardContent: {
    textAlign: 'left',
  },
  buttongroup: {
    position: 'absolute',
    right: '1em',
  },
  textunits: {
    fontSize: '13px',
    color: '#616161',
  },
  tooltip: {
    color: '#2f75bb',
  },
  cardactions: {
    background: '#25c16a',

    justifyContent: 'center',
  },
  colorwhite: {
    color: '#fff',
  },
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

export default function Product({
  product: {
    id,
    title,
    supplier,
    tax,
    price_real,
    image,
    thumbnail,
    description,
    units_sf,
    slug,
    category,
    subcategory,
    net_content,
    sellos
  },
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  const [hoverCard, setHoverCard] = useState(false);

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        title,
        supplier,
        tax,
        price_real,
        image,
        thumbnail,
        description,
        units_sf,
        slug,
        category,
        subcategory,
        net_content,
        sellos
      },
    });
    console.log(basket);
  };

  return (
    <Card
      className={classes.root}
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={image}>
          <ButtonGroup
            orientation="vertical"
            className={classes.buttongroup}
            aria-label="vertical    group"
          >
            {sellos.map((sello, index) => (
              <Tooltip
                title={sello.name}
                arrow
                className={classes.tooltip}
                key={index}
              >
                <Button
                  style={{
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  {' '}
                  <img src={sello.image} alt="sellos" />
                </Button>
              </Tooltip>
            ))}
          </ButtonGroup>
        </CardMedia>
        <CardContent className={classes.cardcontent}>
          <Typography gutterBottom component="small">
            <strong className={classes.subheader}>{supplier}</strong>

            <Chip
              className={classes.chipText}
              size="small"
              label={net_content}
            />
          </Typography>
          <Typography gutterBottom style={{ fontSize: 16, lineHeight: 1 }}>
            <strong>{title.substr(0, 17)}...</strong>
          </Typography>
          <Typography variant="h5">
            {accounting.formatMoney(price_real)}{' '}
            <small className={classes.textunits}>
              {' '}
              x {units_sf} {units_sf === 1 ? 'Unidad' : 'Unidades'}
            </small>
          </Typography>
        </CardContent>
      </CardActionArea>
      {hoverCard && (
        <CardActions className={classes.cardactions} onClick={addToBasket}>
          <Button size="small" className={classes.colorwhite}>
            Agregar al Carrito
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
