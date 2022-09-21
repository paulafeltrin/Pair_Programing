import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <>
            <h1>Esta é a Home</h1>
            <Link to='page'><button>Vá para página</button></Link>
        </>
    )
}