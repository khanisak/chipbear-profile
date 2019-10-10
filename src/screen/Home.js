import React from 'react';
import {
    Container,
    Grid,
    Hidden
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Description } from '../components/Description'
import { Showcase } from '../components/Showcase'

const products = [{
    name: 'Dompet Manager',
    description: 'Dompet Manager is a simple application that is useful to help record, monitor and manage your finances. Get a report on your expenses and income for the period you want.',
    image: 'https://lh3.googleusercontent.com/5lMfB8qtr7ASZiVx01WjBoAi8AY9zm8j2nRygr5Wh44ieBogkYrtgHGrVHTBhGwnXw=s180-rw',
    urlPlaystore: 'https://play.google.com/store/apps/details?id=dompetmanager.chipbear.com.myapplication&hl=en'
}, {
    name: 'Kalkulator Finansial',
    description: 'Kalkulator Finansial is a simple application that can help you to simulate your loan or credit details so you can make better decisions.',
    image: 'https://lh3.googleusercontent.com/mNyxrJTE88tMYBo4MO8vdQcpMq-4xYeodHICm0VLTDY3-4uiRtkGBvm37dGG5Q9U1xDE=s180-rw',
    urlPlaystore: 'https://play.google.com/store/apps/details?id=com.chipbear.kalkulatorfinansial&hl=en'
}, {
    name: 'Indonesia Kalender Note',
    description: 'Indonesia Kalender Note is an application that includes Public Holiday in Indonesia and Allow you to a make a simple note.',
    image: 'https://lh3.googleusercontent.com/lxQ9zoYwc8QPxyAWC3Bs-iRqT2w1ql-5kNc2BbxQy4s8SqUgP1C8SRQn5Lw8_CbjOuY=s180-rw',
    urlPlaystore: 'https://play.google.com/store/apps/details?id=com.chipbear.kalendarInd&hl=en'
}, {
    name: 'Weelog BMI & Berat Badan Tracker',
    description: 'Weelog helps you heal weight and BMI over time. This application can finds ideal weight according to your height, gender and age.',
    image: 'https://lh3.googleusercontent.com/__c6_xlJcM6AnLyHRnbqybk1YLf76Msyha0eMV-0fRX39bOri10HfmqahFXjisCYQYkh=s180-rw',
    urlPlaystore: 'https://play.google.com/store/apps/details?id=com.chipbear.weelog&hl=en'
}, {
    name: 'Dongengku',
    description: 'Dongengku is a simple application that provide you a collection of various fairy tales entertaining and educating stories from various sources. Our collection of stories is suitable for all ages, from children to adults.',
    image: 'https://lh3.googleusercontent.com/mJTgQXMCVfGx5JgaMZktGfvInhfRIbOJMoGh8BEPHjomQOoseze45l2P35Hc3KEV-A=s180-rw',
    urlPlaystore: 'https://play.google.com/store/apps/details?id=com.chipbear.android.ceritamotivasi.dongeng&hl=en'
}, {
    name: 'Motivasiku',
    description: 'Motivasiku is a simple application that provide you collection of various motivational and inspirational stories from various sources.',
    image: 'https://lh3.googleusercontent.com/d33MWBkMYHDZlhDy2hyjNtCGWISYjzbCIJVexJK5Gi6p8iITgun_4DE3i_qIdE35JMwz=s180-rw',
    urlPlaystore: 'https://play.google.com/store/apps/details?id=com.chipbear.android.ceritamotivasi&hl=en'
}];

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.Container}>
                <Grid container className={classes.Grid}>
                    <Hidden smDown>
                        <Grid item md={2} lg={2}></Grid>
                    </Hidden>
                    <Grid item xs={12} lg={8}>
                        <Grid item>
                            <Description />
                            <br /><br /><br />
                            <h3>Our Products</h3>
                            <Grid container spacing={10}>
                                {products.map(item => {
                                    return (
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={item.name}>
                                            <Showcase name={item.name} description={item.description} image={item.image} urlPlaystore={item.urlPlaystore} />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={false} lg={2}></Grid>
                    </Hidden>
                </Grid>
            </Container>
        )
    }
}

const styles = {
    Container: {
        marginBottom: 100
    },
    Grid: {
        marginTop: 30
    }
};

export default withStyles(styles)(Home);