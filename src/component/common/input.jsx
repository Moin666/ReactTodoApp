import React from 'react';

const Input = ({type="text",getInput,value,placeholder}) => {


    return ( 
        <input
        type={type}
        className="w-75 rounded  borderClas"
        style={{ height: "35px" }}
        onChange={getInput}
        value={value}
        placeholder = {placeholder}   
      />

     );
}
 
export default Input;