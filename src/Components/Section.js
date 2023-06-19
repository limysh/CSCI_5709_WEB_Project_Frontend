import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import image1 from '../images/search.png';
import image2 from '../images/book.png';
import image3 from '../images/done.png';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: 'lightblue',
    padding: theme.spacing(10, 0),
    textAlign: 'center',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 24px 1fr 24px 1fr',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    gap: theme.spacing(3),
    marginLeft: theme.spacing(2), 
    marginRight: theme.spacing(2), 
  },
  card: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(1),
    color: '#333',
  },
  image: {
    width: '90px',
    height: '80px',
    marginBottom: theme.spacing(1),
  },
  arrowIcon: {
    fontSize: '2rem',
    color: '#555',
  },
  content: {
    fontSize: '1.2rem',
    color: '#777',
    textAlign: 'center',
  },
}));

const Section = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
          <Typography variant="h4" align="center" gutterBottom>
          Easy Steps to Fulfill Your Requests
      </Typography>
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <img src={image1} alt="Choose a Service" className={classes.image} />
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.title}>
              Choose a Service
            </Typography>
            <Typography variant="body1" className={classes.content}>
              Search for the service you need and pick a provider after viewing customer reviews.
            </Typography>
          </CardContent>
        </Card>
        <ArrowForwardIosIcon className={classes.arrowIcon} />
        <Card className={classes.card}>
          <img src={image2} alt="Book an appointment" className={classes.image} />
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.title}>
              Book an Appointment
            </Typography>
            <Typography variant="body1" className={classes.content}>
              Book an appointment with the service provider by discussing the schedule with the provider.
            </Typography>
          </CardContent>
        </Card>
        <ArrowForwardIosIcon className={classes.arrowIcon} />
        <Card className={classes.card}>
          <img src={image3} alt="Job Done" className={classes.image} />
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.title}>
              Job Done
            </Typography>
            <Typography variant="body1" className={classes.content}>
              Your job is done. You will receive an appointment confirmation soon.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Section;