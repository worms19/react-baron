import React from 'react';
import Footer2 from "../components/Footer2/Footer2";


const bottom ={
    position: 'absolute',
    bottom: '0',
    width: '100%'
};

const Accueil = () => (
    <div style={bottom}>
        <Footer2
            isOn={false}
            noBack={true}
        />
    </div>
);

export default Accueil;
