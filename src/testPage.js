import React from 'react';
import FormBuilder from "./components/forms/builder"
const FormJson = require("./json/form")
const Home = <FormBuilder {...FormJson[0]} />
const Product = <h1>Product Page</h1>
const About = <h1>About Page</h1>
const Contact = <h1>Contact Page</h1>

export {Home,Product,About,Contact}