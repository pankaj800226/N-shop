import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <h2>Copyright©N Shop{year}</h2>
        </footer>
    )
}

export default Footer