import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    user: {
        id: null,
        email: {
            value: null,
            verified: false
        },
        phone: {
            value: null,
            verified: false
        },
        profilePhoto: null
    },
    openPhoneValidationForm: false,
    openChangePasswordForm: false,
    changingPasswordError: null,
    addingNumber: false,
    loading: false,
    error: null
}

const handleUser = user => {
    return {
        id: user.id,
        email: {
            value: user.email,
            verified: true,
        },
        phone: {
            value: '+17867693202',
            verified: true
        },
        profilePhoto: user.profile_photo
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACCOUNT_FETCH_INFO_START:
            return updateObject(state, { loading: true, error: null })
        case actionTypes.ACCOUNT_FETCH_INFO_FAILED:
            return updateObject(state, { loading: false, error: action.error })
        case actionTypes.ACCOUNT_FETCH_INFO_SUCCEED:
            return updateObject(state, { user: handleUser(action.user), loading: false, error: null })

        case actionTypes.ACCOUNT_OPEN_PHONE_VALIDATION:
            return updateObject(state, { openPhoneValidationForm: true })
        case actionTypes.ACCOUNT_PHONE_VALIDATION_START:
            return updateObject(state, { loading: true })
        case actionTypes.ACCOUNT_PHONE_VALIDATION_FAILED:
            return updateObject(state, { loading: false })
        case actionTypes.ACCOUNT_PHONE_VALIDATION_SUCCEED:
            return updateObject(state, { loading: false, openPhoneValidationForm: false })

        case actionTypes.ACCOUNT_OPEN_CHANGE_PASSWORD:
            return updateObject(state, { openChangePasswordForm: action.open })
        case actionTypes.ACCOUNT_CHANGE_PASSWORD_FAILED:
            return updateObject(state, { changingPasswordError: action.error })
        case actionTypes.ACCOUNT_CHANGE_PASSWORD_SUCCEED:
            return updateObject(state, { changingPasswordError: null, openChangePasswordForm: false })
        default:
            return state
    }
}

export default reducer