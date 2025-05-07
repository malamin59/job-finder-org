import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Motion, spring } from 'react-motion';
const Contact = () => {
    return (
        <div>
            <Helmet> <title>ContactPage </title> </Helmet>


            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }} >
                {value => <div>{value.x}</div>}
        
            </Motion>

            
        </div>
    );
};

export default Contact;






