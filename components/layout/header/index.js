import React from 'react';
import { headerSelector } from '../../../lib'
import { withRouter } from 'next/router'
import Link from 'next/link'

const Header = (props) => {
    return(
    <header className='header--fixed' >
        <ul className='header__list' >
            <li>
                <Link href='/'>
                    <a className={'header__link' + headerSelector(props.router.pathname) }> Faris</a>
                </Link>
            </li>
            <li>
                <Link  href='/projects'>
                    <a className={'header__link' + headerSelector(props.router.pathname)} >PROJECTS</a>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <a className={'header__link' + headerSelector(props.router.pathname) } >ABOUT</a>
                </Link>
            </li>
        </ul>
    </header>
    )
}
export default withRouter(Header);