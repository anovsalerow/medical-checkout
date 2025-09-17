import healthIcon from "../assets/svg/a_logo_1.svg";
import qualityIcon from "../assets/svg/a_logo_2.svg";
import supportIcon from "../assets/svg/a_logo_3.svg";

const ADVANTAGES = [
    { 
        title: "Best for Health", 
        text: "Good for your health and quality guaranteed", 
        icon: healthIcon 
    },
    { 
        title: "Safe and Quality", 
        text: "The best quality with the best traditional ingredients", 
        icon: qualityIcon 
    },
    { 
        title: "Online Support", 
        text: "Online complaint service for 24 hours without stopping", 
        icon: supportIcon 
    },
];

const ORDER_SUMMARY = [
    {title: 'Capsul White', type: "15 Capsul", color: 'White', amount: '4x', costs: '$140'},
    {title: 'Rainbow Drugs', type: "10 Capsul", color: 'White', amount: '4x', costs: '$140'},
    {title: 'Rainbow Drugs White', type: "5 Capsul", color: 'White', amount: '4x', costs: '$140'},
    {title: 'Zaitun Olive Oil', type: "2 Bottle", color: 'White', amount: '4x', costs: '$140'},
    {title: 'Acetylcysteine Pill', type: "15 Capsul", color: 'White', amount: '4x', costs: '$140'},
];

const CHECKOUT_TOTAL = [
    {title: 'Sub total', costs: '$240'},
    {title: 'Shipping Fee', costs: '$40'},
    {title: 'Total', costs: '$280'},
];

export {ADVANTAGES, ORDER_SUMMARY, CHECKOUT_TOTAL};