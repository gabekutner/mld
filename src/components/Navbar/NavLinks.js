import React from 'react';
import { HashLink } from 'react-router-hash-link';


const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold navbar-link" smooth to="/#about">
                About
            </HashLink>
            {/* <HashLink className="px-4 font-extrabold navbar-link" smooth to="/">
                Calendar
            </HashLink> */}
            <HashLink className="px-4 font-extrabold navbar-link" to="/">
                Camp
            </HashLink>
            {/* <HashLink className="px-4 font-extrabold navbar-link" to="/">
                Membership
            </HashLink> */}
            <HashLink className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/">
                Membership
            </HashLink>
        </>
    )
}

export default NavLinks;
