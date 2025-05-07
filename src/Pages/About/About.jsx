import React from 'react';
import { Helmet } from 'react-helmet-async';
import MyMarque from '../../Section/marque/Marque';

const About = () => {
    return (
        <div>
            <Helmet> <title>aboutPage</title> </Helmet>
            <MyMarque></MyMarque>
        </div>
    );
};

export default About;