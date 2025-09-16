import instLogo from "../assets/svg/instagram_logo.svg";
import facebookLogo from "../assets/svg/facebook_logo.svg";
import twitterLogo from "../assets/svg/twitter_logo.svg";
import searchIcon from "../assets/svg/search_icon_24x24.svg";
import basketIcon from "../assets/svg/busket_icon_20x24.svg";
import profileIcon from "../assets/svg/profile_icom_24x24.svg";

const NAVBAR_LINKS = [
    {text: 'Homepage', path: '/'},
    {text: 'About', path: '/'},
    {text: 'Reviews', path: '/'},
    {text: 'Contsct', path: '/'},
    {text: 'Shop', path: '/'},
]

const LINKS = {
    homepage: '/',
    checkout: '/',
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
        name: 'basket',
        icon: basketIcon,
        path: '/',
        redMark: true
    },{
        name: 'profile',
        icon: profileIcon,
        path: '/',
        redMark: false
    }
];

export {NAVBAR_LINKS, LINKS, SHOPDOC, ABOUT_US, FAQ, BLOG, SOCIAL_LIST, ICON_LINKS};