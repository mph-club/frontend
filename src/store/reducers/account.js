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
        profile_photo: null
    },
    phoneFeatures: {
        open: false,
        error: null,
        loading: false,
        addingNumber: false
    },
    openChangePasswordForm: false,
    changingPasswordError: null,
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACCOUNT_FETCH_INFO_START:
            return updateObject(state, { loading: true, error: null })
        case actionTypes.ACCOUNT_FETCH_INFO_FAILED:
            return updateObject(state, { loading: false, error: action.error })
        case actionTypes.ACCOUNT_FETCH_INFO_SUCCEED:
            return updateObject(state, { user: action.user, loading: false, error: null })

        case actionTypes.ACCOUNT_OPEN_PHONE_VALIDATION:
            return updateObject(state, { phoneFeatures: { ...state.phoneFeatures, open: action.open, addingNumber: action.addingNumber } })
        case actionTypes.ACCOUNT_CHANGE_PHONE_NUMBER: 
            return updateObject(state, { phoneFeatures: { ...state.phoneFeatures, addingNumber: true}})
        case actionTypes.ACCOUNT_ADD_PHONE_START:
            return updateObject(state, { phoneFeatures: { ...state.phoneFeatures, loading: true } })
        case actionTypes.ACCOUNT_ADD_PHONE_FAILED:
            return updateObject(state, { phoneFeatures: { ...state.phoneFeatures, loading: false, error: action.error } })
        case actionTypes.ACCOUNT_ADD_PHONE_SUCCEED:
            return updateObject(state, { phoneFeatures: { ...state.phoneFeatures, loading: false, addingNumber: false } })

        case actionTypes.ACCOUNT_PHONE_VALIDATION_START:
            return updateObject(state, { phoneFeatures: { ...state.phoneFeatures, loading: true } })
        case actionTypes.ACCOUNT_PHONE_VALIDATION_FAILED:
            return updateObject(state, { phoneFeatures: { ...state.phoneFeatures, loading: false } })
        case actionTypes.ACCOUNT_PHONE_VALIDATION_SUCCEED:
            return updateObject(state, { phoneFeatures: { ...state.phoneFeatures, open: false, loading: false } })

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