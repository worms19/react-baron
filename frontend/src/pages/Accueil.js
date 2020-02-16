import React from 'react';
import Footer2 from "../components/Footer2/Footer2";


const pipi ={
    position: 'absolute',
    bottom: '0',
    width: '100%'
};

const Accueil = () => (
    <div style={pipi}>
        <Footer2
        isOn={false}
        noBack={true}
                />
    </div>
);

export default Accueil;
