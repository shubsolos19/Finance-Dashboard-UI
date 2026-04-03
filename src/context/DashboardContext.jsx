import React, { createContext, useContext, useState, useMemo } from 'react';

const MOCK_TRANSACTIONS = [
    { id: 'INV_000076', icon: 'lucide:smartphone', color: 'blue', title: 'Mobile App Purchase', amount: 25500, status: 'Completed', date: '17 Apr, 2026 03:45 PM', timestamp: 1776332700000 },
    { id: 'INV_000075', icon: 'lucide:hotel', color: 'indigo', title: 'Hotel Booking', amount: 32750, status: 'Pending', date: '15 Apr, 2026 11:30 AM', timestamp: 1776156600000 },
    { id: 'INV_000074', icon: 'lucide:plane-takeoff', color: 'sky', title: 'Flight Ticket Booking', amount: 40200, status: 'Completed', date: '15 Apr, 2026 12:00 PM', timestamp: 1776158400000 },
    { id: 'INV_000073', icon: 'lucide:shopping-cart', color: 'orange', title: 'Grocery Purchase', amount: 50200, status: 'In Progress', date: '14 Apr, 2026 09:15 PM', timestamp: 1776104100000 },
    { id: 'INV_000072', icon: 'lucide:code', color: 'rose', title: 'Software License', amount: 15900, status: 'Completed', date: '10 Apr, 2026 06:00 AM', timestamp: 1775709600000 },
];

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [sortOrder, setSortOrder] = useState('newest');
    const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);

    const processedTransactions = useMemo(() => {
        let result = [...transactions];
        
        if (searchQuery) {
            result = result.filter(t => 
                t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                t.id.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        
        if (filterStatus !== 'All') {
            result = result.filter(t => t.status === filterStatus);
        }

        result.sort((a, b) => {
            if (sortOrder === 'newest') return b.timestamp - a.timestamp;
            if (sortOrder === 'oldest') return a.timestamp - b.timestamp;
            if (sortOrder === 'highest') return b.amount - a.amount;
            if (sortOrder === 'lowest') return a.amount - b.amount;
            return 0;
        });

        return result;
    }, [transactions, searchQuery, filterStatus, sortOrder]);

    const handleDelete = (id) => {
        if (!isAdmin) return;
        setTransactions(transactions.filter(t => t.id !== id));
    };

    return (
        <DashboardContext.Provider value={{
            isAdmin, setIsAdmin,
            searchQuery, setSearchQuery,
            filterStatus, setFilterStatus,
            sortOrder, setSortOrder,
            processedTransactions,
            handleDelete
        }}>
            {children}
        </DashboardContext.Provider>
    );
};
