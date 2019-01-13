import React from 'react'
import {Home,Product,About,Contact} from "./../../testPage"

const LinkList = [
    {
        to: "/",
        icon: "home",
        title: "home"
    },
    {
        to: "/about",
        icon: "warning",
        title: "about",
        collapse:[
            {
                to: "/",
                icon: "home",
                title: "home"
            },
            {
                to: "/about",
                icon: "warning",
                title: "about"
            },
            {
                to: "/product",
                icon: "assignment",
                title: "product"
            },
            {
                to: "/contact",
                icon: "phone",
                title: "contact"
            },
        ]
    },
    {
        to: "/product",
        icon: "assignment",
        title: "product"
    },
    {
        to: "/contact",
        icon: "phone",
        title: "contact"
    },
];

const RouteList = [
    {
        exact:true,
        path: "/",
        Component: () => Home
    },
    {
        path: "/product",
        Component: () => Product
    },
    {
        path: "/about",
        Component: () => About
    },
    {
        path: "/contact",
        Component: () => Contact
    }
]

export { LinkList, RouteList }