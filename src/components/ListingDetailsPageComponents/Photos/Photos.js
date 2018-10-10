import React, { Component } from 'react';
import Footer from '../../Navigation/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/Add';
import { palette, space } from '../../../theme';

import {
    StyledExternalContainer,
    StyledFooterContainer,
    StyledAddButton,
    StyledCardContent
} from './styles';
import PhotoCard from './PhotoCard/PhotoCard';
import Alert from '../../UI/Alert/Alert';

let photoIndex = null

class Photos extends Component {

    state = {
        imagesList: [],
        coverIndex: 0,
        openAlert: false
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

    cardClicked = (index) => {
        this.setState({ coverIndex: index })
    }

    handleCloseAlert = () => {
        this.setState({openAlert: false});
    }

    handleDeletePhoto = () => {
        let array = [...this.state.imagesList]
        array.splice(photoIndex, 1)

        this.setState({
            imagesList: array
        })
    }

    confirmDeletePhoto = (index) => {
        photoIndex = index
        this.setState({openAlert: true})
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
                            <Grid item sm={6} md={4} lg={3.2}>
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
                                                <MoreIcon
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
                            {this.state.imagesList.map((el, index) => (
                                <Grid item key={index} sm={6} md={4} lg={3.2}>
                                    <PhotoCard
                                        cover={this.state.coverIndex === index}
                                        deleteClicked={() => this.confirmDeletePhoto(index)}
                                        clicked={() => this.cardClicked(index)}
                                        index={index} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </StyledExternalContainer>
                <StyledFooterContainer>
                    <Footer />
                </StyledFooterContainer>
                <Alert
                    id="delete-photo"
                    title="Delete photo"
                    text="Are you sure you want to delete this photo?"
                    okTitle="Delete"
                    handleOk={this.handleDeletePhoto}
                    openAlert={this.state.openAlert} 
                    handleClose={this.handleCloseAlert}
                    />
            </React.Fragment>
        );
    }
}

export default Photos