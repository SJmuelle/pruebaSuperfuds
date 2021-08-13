import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from '@material-ui/icons';

import Grid from '@material-ui/core/Grid';
import Product from './Product';
import products from '../product-data';
import Slider from 'react-slick';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '1em',
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  containerHome: {
    justifyContent: 'center',
  },
  sliderContainer: {
    width: '96%',
  },
  containerProduct: {
    padding: [[5, 10]],
  },
}));

const SampleNextArrow = ({ className, onClick }) => {
  return (
    <ArrowForwardIosRounded
      className={className}
      style={{ color: '#25c16a' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = ({ className, onClick }) => {
  return (
    <ArrowBackIosRounded
      className={className}
      style={{ color: '#25c16a' }}
      onClick={onClick}
    />
  );
};

export default function Products() {
  const classes = useStyles();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.containerHome}>
        <Slider className={classes.sliderContainer} {...settings}>
          {products.map((product, index) => (
            <Grid item xs={12} className={classes.containerProduct} key={index}>
              <Product key={product.id} product={product} />
            </Grid>
          ))}
        </Slider>
      </Grid>
    </div>
  );
}
