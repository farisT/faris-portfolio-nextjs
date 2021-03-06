import React from 'react';
import Link from 'next/link';

const NavLink = props => (
    <Link href={props.href}>
        <a className={props.className}>{props.text || props.children}</a>
    </Link>
);

export default NavLink