import {combineReducers} from 'redux';

const INITIAL_STATE = {
    isTalent: true,
    first_name: 'Depika',
    middle_name: '',
    last_name: 'Shukar',
    email: 'dshukar@icloud.com',
    phone: '08041123288',
    address_street: '',
    address_city: 'Bangalor',
    address_state: 'India',
    address_zip: '',
    avatar_path: '',
    video_path: '',
    video_cover_path: '',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...',
    professions: ['Software engineer', 'QA engineer'],
    skills: ['React.js', 'Laravel', 'HTML5', 'CSS3'],
    experiences: [{
        company: 'Microsoft',
        position: 'Software Engineer',
        from: '2002',
        to: '2010'
    }, {
        company: 'Google',
        position: 'Front-end developer',
        from: '2010',
        to: ''
    }],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_IS_TALENT':
            return {...state, isTalent: action.payload};
        case 'SET_FIRSTNAME':
            return {...state, first_name: action.payload};
        case 'SET_MIDDLENAME':
            return {...state, middle_name: action.payload};
        case 'SET_LASTNAME':
            return {...state, last_name: action.payload};
        case 'SET_AVATAR':
            return {...state, avatar_path: action.payload};
        case 'SET_EMAIL':
            return {...state, email: action.payload};
        case 'SET_PHONE':
            return {...state, phone: action.payload};
        case 'SET_ADDRESS_STREET':
            return {...state, address_street: action.payload};
        case 'SET_ADDRESS_CITY':
            return {...state, address_city: action.payload};
        case 'SET_ADDRESS_STATE':
            return {...state, address_state: action.payload};
        case 'SET_ADDRESS_ZIP':
            return {...state, address_zip: action.payload};
        case 'SET_VIDEO':
            return {...state, video_path: action.payload};
        case 'SET_VIDEO_COVER':
            return {...state, video_cover_path: action.payload};
        case 'SET_OVERVIEW':
            return {...state, overview: action.payload};
        case 'SET_PROFILE_SKILL':
            return {...state, skills: action.payload};
        case 'SET_PROFILE_PROFESSION':
            return {...state, professions: action.payload};
        case 'SET_PROFILE_EXPERIENCE':
            return {...state, experiences: action.payload};
        case 'SET_OTP':
            return {...state, otp: action.payload};
        default:
            return state;
    }
}

export default combineReducers({
    store: reducer
});