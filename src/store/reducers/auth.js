import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    openSignUp: false,
    openSignIn: false,
    openWelcomeDialog: false,
    openValidationWrapper: false,
    openWelcomeEndedDialog: false,
    user: null,
    password: '',
    error: null,
    loading: false,
    completed: 25,
    activeStep: 0,
    addingNumber: true,
    session: {
        IdToken: null,
        AccessToken: null,
        RefreshToken: null,
        isValid: false,
    },
};

const handleNext = state => {
    return updateObject(state, {
        activeStep: state.activeStep + 1,
        completed: state.completed + Math.round(state.completed * (state.activeStep + 1))
    }
    )
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNIN_OPEN:
            return updateObject(state, { openSignIn: action.open })
        case actionTypes.SIGNIN_START:
            return updateObject(state, { loading: true, error: null })
        case actionTypes.SIGNIN_FAIL:
            return updateObject(state, { loading: false, error: action.error })
        case actionTypes.SIGNIN_SUCCESS:
            return updateObject(state, { loading: false, error: null, openSignIn: false })
        case actionTypes.SIGNIN_AUTH_STATE_CHECKED:
            return updateObject(state, { session: action.session })
        case actionTypes.SIGNIN_LOGOUT: 
            return updateObject(state, { })

        case actionTypes.SIGNUP_START:
            return updateObject(state, { error: null, loading: true })
        case actionTypes.SIGNUP_SUCCESS:
            return updateObject(state, { user: action.user, password: action.password, error: null, loading: false, openSignUp: false, openWelcomeDialog: true })
        case actionTypes.SIGNUP_FAIL:
            return updateObject(state, { error: action.error, loading: false })
        case actionTypes.SIGNUP_OPEN:
            return updateObject(state, { openSignUp: action.open })
        case actionTypes.SIGNUP_ON_BOARDING_GET_STARTED:
            return updateObject(state, { openWelcomeDialog: false, openValidationWrapper: true })
        case actionTypes.SIGNUP_ON_BOARDING_ENDED:
            return updateObject( state, { openValidationWrapper: false, openWelcomeEndedDialog: true })
        case actionTypes.SIGNUP_CHANGE_EMAIL:
            return updateObject(state, { openValidationWrapper: false, openSignUp: true })
        case actionTypes.SIGNUP_CONFIRM_EMAIL_START:
            return updateObject(state, { loading: true, error: null })
        case actionTypes.SIGNUP_CONFIRM_EMAIL_FAILED:
            return updateObject(state, { loading: false, error: action.error })
        case actionTypes.SIGNUP_CONFIRM_EMAIL_SUCCEED:
            return updateObject(state, { loading: false, error: null, password: null, session: action.session })

        case actionTypes.SIGNUP_HANDLE_NEXT_VALIDATION_STEP:
            return handleNext(state)
        case actionTypes.SIGNUP_AUTHENTICATION_FAILED:
            return updateObject(state, { loading: false, error: null, openValidationWrapper: false })
        case actionTypes.SIGNUP_ADD_PHONE_START:
            return updateObject(state, { loading: true, error: null })
        case actionTypes.SIGNUP_ADD_PHONE_SUCCEED:
            return updateObject(state, { loading: false, error: null, addingNumber: false })
        case actionTypes.SIGNUP_ADD_PHONE_FAILED:
            return updateObject(state, { loading: false, error: action.error })
        case actionTypes.SIGNUP_RESEND_PHONE_CODE_FAILED:
            return updateObject(state, { error: action.error })
        case actionTypes.SIGNUP_CHANGE_PHONE_NUMBER:
            return updateObject(state, { loading: false, error: null, addingNumber: true })
        case actionTypes.SIGNUP_VALIDATE_PHONE_START: 
            return updateObject( state, { loading: true, error: null })
        case actionTypes.SIGNUP_VALIDATE_PHONE_FAILED: 
            return updateObject( state, { loading: false, error: action.error })
        case actionTypes.SIGNUP_VALIDATE_PHONE_SUCCEED: 
            return updateObject( state, { loading: false, error: null })
        case actionTypes.SIGNUP_CLOSE_ON_ENDED_DIALOG:
            return updateObject(state, { openWelcomeEndedDialog: false })
        default:
            return state
    }
}

export default reducer