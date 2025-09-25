import instLogo from "../assets/svg/instagram_logo.svg";
import facebookLogo from "../assets/svg/facebook_logo.svg";
import twitterLogo from "../assets/svg/twitter_logo.svg";
import searchIcon from "../assets/svg/search_icon_24x24.svg";
import basketIcon from "../assets/svg/busket_icon_20x24.svg";
import profileIcon from "../assets/svg/profile_icom_24x24.svg";
import signupIcon from '../assets/png/registration-32.png';
import signinIcon from '../assets/png/login-30.png';
import signoutIcon from '../assets/png/logout-48.png';

const ENV_VAR = {
    BE_API: 'http://localhost:8080',
}

const NAVBAR_LINKS = [
    {text: 'Homepage', path: '/'},
    {text: 'About', path: '/about'},
    {text: 'Reviews', path: '/reviews'},
    {text: 'Contact', path: '/contact'},
    {text: 'Shop', path: '/shop'},
]

const LINKS = {
    homepage: '/',
    about: '/about',
    reviews: '/reviews',
    contact: '/contact',
    shop: '/shop',
    checkout: '/checkout',
    profile: '/profile',
    login: '/login',
    registration: '/register'
};

const SHOPDOC = {
    "High quality and trusted medical shop service": "/"
};

const ABOUT_US = {
    "Who are we": '/',
    "Vission & Mission": "/",
    "Core Values": "/",
    "Quality Policy": "/",
};

const FAQ = {
    "FAQ": "/"
};

const BLOG = {
    "Blog": "/"
};

const SOCIAL_LIST = [
    {
        name: 'instagram',
        logo: instLogo,
        path: '/'
    },
    {
        name: 'facebook',
        logo: facebookLogo,
        path: '/'
    },{
        name: 'twitter',
        logo: twitterLogo,
        path: '/'
    }
];

const ICON_LINKS = [
    {
        name: 'search',
        icon: searchIcon,
        path: '/',
        redMark: false
    },
    {
        name: 'cart',
        icon: basketIcon,
        path: '/checkout',
        redMark: true
    },{
        name: 'profile',
        icon: profileIcon,
        path: '/profile',
        redMark: false
    }
];

const SIGN_LINKS = {
    signup: {
        name: 'Sign up',
        icon: signupIcon,
        path: '/register'
    },
    signin: {
        name: 'Sign in',
        icon: signinIcon,
        path: '/login'
    },
    signout: {
        name: 'Sign out',
        icon: signoutIcon,
        path: '/'
    }
};

export {ENV_VAR, NAVBAR_LINKS, LINKS, SHOPDOC, ABOUT_US, FAQ, BLOG, SOCIAL_LIST, ICON_LINKS, SIGN_LINKS};