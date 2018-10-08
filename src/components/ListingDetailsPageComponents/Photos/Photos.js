import React, { Component } from 'react';
import Footer from '../../Navigation/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
    StyledExternalContainer,
    StyledFooterContainer,
    StyledCard,
    StyledAddButton,
    StyledIcon
} from './styles';
import IconButton from '@material-ui/core/IconButton';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { CardMedia, CardContent } from '@material-ui/core';
import { palette } from '../../../theme';

class Photos extends Component {

    state = {
        imagesList: []
    }

    handleAddButton = () => {
        if (this.state.imagesList.length <= '5') {
            let array = [...this.state.imagesList]
            array.push({
                id: '123dq23',
                img: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ainXQzexQZeXQ4g9jM7-gg.1440x700.jpg'
            })
            this.setState({
                imagesList: array
            })
        }
    }

    handleDeletePhoto = (index) => {
        let array = [...this.state.imagesList]
            array.splice(index, 1)

        this.setState({
            imagesList: array
        })
    }

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
                                <StyledAddButton onClick={this.handleAddButton}>
                                    <CardContent style={{ backgroundColor: palette.grey04 }}>
                                        <div style={{
                                            marginTop: '20%',
                                            justifyContent: 'center',
                                            display: 'grid'
                                        }}>
                                            <Typography variant="body2"> Add Photo</Typography>
                                            <IconButton>
                                                <StyledIcon />
                                            </IconButton>
                                        </div>

                                    </CardContent>
                                </StyledAddButton>
                            </Grid>
                            {this.state.imagesList.map((card, index) => (
                                <Grid item key={index} sm={6} md={4} lg={3}>
                                    <StyledCard>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/totR6CBQQ1qkbq81qjCOgg.1440x700.jpg"
                                            title="Contemplative Reptile"
                                        />
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={() => this.handleDeletePhoto(index)}>Delete</Button>
                                        </CardActions>
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