import React from "react";

export function Error({message}){
    return(
            <p style={{
                color: 'red',
                padding: '0.7rem',
                marginLeft: '2rem'
            }}>{message}</p>
    )
}