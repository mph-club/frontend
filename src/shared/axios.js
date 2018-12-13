import axios from 'axios';
import {connect } from 'react-redux';

const instance = (props) => {
    
    axios.defaults.headers.common['Authorization'] = props.accessToken;
    axios.defaults.baseURL = 'http://mphclub.ngrok.io/api/v1/';

    return axios
}

const mapStateToProps = state => {
    return {
        accessToken: state.auth.session.AccessToken
    }
}


export default connect(mapStateToProps)(instance)