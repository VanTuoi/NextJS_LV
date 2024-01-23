'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import auth from '@/redux/features/auth-slice'
// import { getStatusAccount } from '../store/selectors'
import './Nav.css'
const Nav = () => {
    // let user = useSelector(getStatusAccount);
    // const navigate = useNavigate();
    let dispatch = useDispatch()
    const router = useRouter()
    let handleLogout = () => {
        dispatch(auth.actions.logoutsuccess())
        router.push('/login')
    }

    return (
        <div className="topnav">
            <Link href="/" >Home</Link>
            <Link href="/news">News</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <button onClick={handleLogout}> logout</button>
        </div>
    )
}

export default Nav