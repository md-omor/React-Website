import React from 'react'
import Errors from '../src/Images/error2.jpg'

const Error = () => {
    return (
        <>
            <div className="col-md-12">
                <img src={Errors} alt="Error" width='100%' className="error_img"/>
            </div>
        </>
    )
}

export default Error
