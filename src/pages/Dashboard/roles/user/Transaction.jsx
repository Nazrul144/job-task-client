import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaListAlt, FaPlusSquare } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Transaction = () => {
    return (
        <div className='flex ml-2 rounded-lg'>
        {/*This is dashboard side bar content*/}
        <Helmet>
            <title>Bkash | Transaction</title>
        </Helmet>
        <div className="w-64 min-h-full bg-pink-400 rounded-lg">
            <ul className='menu p-4'>
                <li><NavLink to='/dashboard/transactionForm'>
                 <FaPlusSquare />
                 Transaction</NavLink>
                </li>
                <li><NavLink to='/dashboard/balanceInquiry'>
                <FaListAlt />
                BalanceInquiry</NavLink>
                </li>
                <li><NavLink to='/dashboard/transactionHistory'>
                <FaCheckCircle />
                TransactionHistory</NavLink>
                </li>

            </ul>
        </div>
        {/*Dashboard content*/}
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Transaction;