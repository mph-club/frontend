import React, { Component } from 'react';
import Footer from '../../components/Navigation/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
    StyledExternalContainer,
    StyledFooterContainer,
    StyledCard,
    StyledAddButton
} from './styles';
import tileData from '../CarsCollection/tileData';
import { CardMedia, CardContent } from '@material-ui/core';

class Photos extends Component {

    render() {
        return (
            <React.Fragment>
                <StyledExternalContainer>
                    <Typography variant="display1" color="primary" component="h2">Photos</Typography>
                    <div style={{
                        margin: '16px 0',
                        maxWidth: '400px'
                    }}>
                        <Typography variant="body1" color="primary" component="p">You can upload up to 5 photos of your car. Please do not use stock photos. Drag and drop to reorder</Typography>
                    </div>

                    <div style={{ marginTop: '32px' }}>
                        <Grid container spacing={40}>
                            <Grid item sm={6} md={4} lg={3}>
                                <StyledAddButton>
                                    <CardContent>

                                    </CardContent>
                                </StyledAddButton>
                            </Grid>
                            {tileData.map(card => (
                                <Grid item key={card.img} sm={6} md={4} lg={3}>
                                    <StyledCard>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/totR6CBQQ1qkbq81qjCOgg.1440x700.jpg"
                                            title="Contemplative Reptile"
                                        />
                                    </StyledCard>
                                </Grid>
                            ))}
                        </Grid>
                    </div>

                </StyledExternalContainer>
                <StyledFooterContainer>
                    <Footer />
                </StyledFooterContainer>
            </React.Fragment>
        );
    }
}

export default Photos