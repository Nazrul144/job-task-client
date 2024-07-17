import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { RiAdminFill } from "react-icons/ri";
import { FaHome, FaUsers } from 'react-icons/fa';

import { MdSupportAgent } from 'react-icons/md';
const Dashboard = () => {

    //TODO: get isAdmin value from the database:
    // const [isAdmin] = useAdmin()
    const isAdmin = true;
    return (
        <div className='flex'>
         
            {/*This is dashboard side bar content*/}
            <div className=" lg:w-64 lg:min-h-screen bg-orange-400 ">
                <ul className='menu lg:p-4'>

                                <li><NavLink to='/'>
                                    <FaHome />
                                    Home</NavLink>
                                </li>
                                <div className='divider'></div>
                                <li><NavLink to='/dashboard/admin'>
                                    <RiAdminFill />
                                    Admin</NavLink>
                                </li>

                                <li><NavLink to='/dashboard/transaction'>
                                    <FaUsers />
                                     User</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/agent'>
                                    <MdSupportAgent />
                                    Agent</NavLink>
                                </li>
                                <div className='divider'></div>
                           

                </ul>
            </div>
            {/*Dashboard content*/}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;