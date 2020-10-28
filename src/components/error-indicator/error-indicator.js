import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () =>{
    return(
        <div className='error-indicator'>
            <span className='boom'>BOOM!</span>
            <span>Something has gona terrribly wrong</span>
            <span>
                (but we already sent deoids to fix it)
            </span>
        </div>
    )
}
export default ErrorIndicator;
