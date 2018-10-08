import React, { Component } from 'react';
import Footer from '../../Navigation/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { CardMedia } from '@material-ui/core';
import { palette, space } from '../../../theme';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import {
    StyledExternalContainer,
    StyledFooterContainer,
    StyledCard,
    StyledAddButton,
    StyledIcon,
    StyledCardAction,
    StyledCardContent
} from './styles';

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
                    <div 
                        style={{ 
                            paddingLeft: `${space[3]}`,
                            paddingRight: `${space[3]}`
                        }}>
                        <Typography variant="display1" color="primary" component="h2">Photos</Typography>
                        <div style={{
                            margin: '16px 0',
                            maxWidth: '400px'
                        }}>
                            <Typography variant="body1" color="primary" component="p">
                                You can upload up to 5 photos of your car. Please do not use stock photos. You can pick which photo you would like as your cover image.
                            </Typography>
                        </div>
                    </div>
                    <div 
                        style={{ 
                            marginTop: '32px',
                            paddingLeft: `${space[3]}`,
                            paddingRight: `${space[3]}` 
                        }}>
                        <Grid container spacing={40}>
                            <Grid item sm={6} md={4} lg={3}>
                                {/* <StyledAddButton onClick={this.handleAddButton}>
                                    <CardContent style={{ backgroundColor: palette.grey05 }}>
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
                                </StyledAddButton> */}
                                <StyledAddButton onClick={this.handleAddButton}>
                                    <StyledCardContent>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <Typography 
                                                variant="headline" 
                                                style={{ 
                                                    color: `${palette.grey02}`
                                                }}> 
                                                    Add Photo
                                            </Typography>
                                            <IconButton>
                                                <StyledIcon 
                                                    fontSize="large"
                                                    style={{ 
                                                        color: `${palette.grey02}` 
                                                    }}
                                                 />
                                            </IconButton>
                                        </div>
                                    </StyledCardContent>
                                </StyledAddButton>
                            </Grid>
                            {this.state.imagesList.map((card, index) => (
                                <Grid item key={index} sm={6} md={4} lg={3}>
                                    <StyledCard>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            image="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/totR6CBQQ1qkbq81qjCOgg.1440x700.jpg"
                                            title="Contemplative Reptile"
                                        />
                                        <StyledCardAction>
                                            <Button size="small" style={{ color: `${palette.green}`}} onClick={() => this.handleDeletePhoto(index)}>
                                                <DeleteOutlineIcon fontSize="small" style={{ marginRight: `${space[1]}`}}/>
                                                <span>Delete this photo</span>
                                            </Button>
                                        </StyledCardAction>
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