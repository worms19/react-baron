
import React from 'react';
import '../CSS/encart.css';

const EncartBlanc = ({ text1, text2, size }) => (
  <section className={size === 1 ? 'breadcumb-area' : 'whitePage'}>
    <div className="bradcumbContent ">
      <p>{text1}</p>
      <h2>{text2}</h2>
    </div>
  </section>
);

export default EncartBlanc;
