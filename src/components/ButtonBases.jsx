import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import hamburgercat from '../assets/img/categoryComida/hamburgercat.jpg'
import desacat from '../assets/img/categoryComida/desacat.jpg'
import paninis from '../assets/img/categoryComida/paninis.jpg'
import infantil from '../assets/img/categoryComida/infantil.jpg'
import parapicar from '../assets/img/categoryComida/parapicar.jpg'
import caldo2 from '../assets/img/categoryComida/caldo2.jpg'
import pizzacat from '../assets/img/categoryComida/pizzacat.jpg'
import postre from '../assets/img/categoryComida/postrecat.jpg'
import bebida from '../assets/img/categoryComida/beboda.jpg'
import tacos from '../assets/img/categoryComida/taquitos.jpg'
import especialidad from '../assets/img/categoryComida/especialidad.jpg'
import ceviche from '../assets/img/categoryComida/ceviche.jpg'



const images = [
  {
    url: desacat,
    title: 'Desayunos',
    width: '25%',
  },
  {
    url:  hamburgercat,
    title: 'Hamburguesas',
    width: '25%',
  },

  {
    url:  paninis,
    title: 'paninis',
    width: '25%',
  },
  {
    url:  infantil,
    title: 'Menú Infantil',
    width: '25%',
  },
  {
    url:  parapicar,
    title: 'Para Picar',
    width: '25%',
  },
  {
    url:  caldo2,
    title: 'Comida Típica',
    width: '25%',
  },

  {
    url:  pizzacat,
    title: 'Pizzas',
    width: '25%',
  },

  {
    url:  postre,
    title: 'Postres',
    width: '25%',
  },

{
    url:  bebida,
    title: 'Bebidas',
    width: '25%',
  },
{
    url:  tacos,
    title: 'Tacos mexicanos',
    width: '25%',
  },
  {
    url:  especialidad,
    title: 'Especialidad',
    width: '25%',
  },
 {
    url:  ceviche,
    title: 'Ceviches',
    width: '25%',
  }, 
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}