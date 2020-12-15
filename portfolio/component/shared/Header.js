import React from 'react'
import Link from 'next/link'


class Header extends React.Component {

    render() {
        return (
            <div>
                <p className = "customClass"> Header p tag Styled with styled jsx </p>
                <Link href = "/" >
                    <a style = {{'fontsize': '20px', 'color': 'seagreen'}}> Home inline-styled </a>
                </Link>
                <Link href = "/portfolio" >
                    <a> Portfolio </a>
                </Link>
                <Link href = "/about" >
                    <a> About </a>
                </Link>
                <Link href = "/cv" >
                    <a> CV </a>
                </Link>
                <style jsx >
                    {`
                        .customClass {
                        color: deeppink;    }
                    
                    `}
                </style>    


            </div>
            
        )
    }

}

export default Header