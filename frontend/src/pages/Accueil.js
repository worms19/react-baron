import React from 'react';
import Footer2 from "../components/Footer2/Footer2";


const bottom ={
    position: 'absolute',
    bottom: '0',
    width: '100%'
};

const height ={
    display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '80vh'
};


const Accueil = () => (

    <div>
        <div style={height}>
            <span></span>
        </div>
    <div style={bottom}>
        <Footer2
            isOn={false}
            noBack={true}
        />
    </div>
    </div>
);

export default Accueil;
