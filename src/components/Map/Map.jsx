import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = () => {

  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{key: ''}}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={{ disableDefaultUI: true, 
            zoomControl: true, 
            styles: mapStyles 
          }}
        
        >

        </GoogleMapReact>
      </div>
    </>
  )
}

export default Map