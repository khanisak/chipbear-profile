import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import style from './style';
import AvailablePlaystore from '../../assets/img/available-playstore.png';
import AvailableAppstore from '../../assets/img/available-appstore.png';

class Showcase extends React.Component {
    render() {
        const { classes } = this.props;
        const urlPlaystore = this.props.urlPlaystore ? <a href={this.props.urlPlaystore} target="_blank">
            <img src={AvailablePlaystore} alt={this.props.name} style={{ height: 40 }} />
        </a> : null;
        return (
            <>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Kalkulator Finansial"
                            className={classes.cardMedia}
                            image={this.props.image}
                            title="Kalkulator Finansial"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {urlPlaystore}
                        {/* <a href="#">
                                <img src={AvailableAppstore} alt="fireSpot" style={{ height: 40 }} />
                            </a> */}
                        {/* <Button size="small" color="primary">
                            Go TO 
                        </Button> */}
                    </CardActions>
                </Card>
            </>
        )
    }
}

export default withStyles(style)(Showcase)