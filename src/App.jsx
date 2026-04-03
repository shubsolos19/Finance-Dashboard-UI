import React from 'react';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { DashboardProvider, useDashboard } from './context/DashboardContext';
import './index.css';

const SPENDING_BREAKDOWN_DATA = [
    { name: 'Shopping', value: 50200, color: '#f97316' },
    { name: 'Travel', value: 72950, color: '#3b82f6' },
    { name: 'Software', value: 15900, color: '#e11d48' },
    { name: 'Other', value: 25500, color: '#10b981' }
];

function DashboardContent() {
    const {
        isAdmin, setIsAdmin,
        searchQuery, setSearchQuery,
        filterStatus, setFilterStatus,
        sortOrder, setSortOrder,
        processedTransactions,
        handleDelete
    } = useDashboard();

    return (
        <div className="min-h-screen bg-[#F5F6F8] p-4 md:p-8 lg:p-12">
            <div className="max-w-[1440px] mx-auto space-y-8">
                <div className="flex justify-between items-center bg-white p-6 rounded-[32px] card-shadow animate-fade-in-up">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white">
                            <iconify-icon icon="lucide:user" className="text-xl"></iconify-icon>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Welcome back, Shubham!</h2>
                            <p className="text-sm text-gray-500">Here's what's happening with your finances today.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
                        <button
                            onClick={() => setIsAdmin(false)}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${!isAdmin ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
                            Viewer View
                        </button>
                        <button
                            onClick={() => setIsAdmin(true)}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${isAdmin ? 'bg-orange-50 text-orange-600 shadow-sm border border-orange-100' : 'text-gray-500 hover:text-gray-700'}`}>
                            <iconify-icon icon="lucide:shield-check"></iconify-icon> Admin View
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 bg-white rounded-[32px] p-8 card-shadow flex flex-col justify-between transition-all duration-300 hover:shadow-2xl group animate-fade-in-up delay-100">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-gray-500 font-medium">Total Balance</h3>
                                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 cursor-pointer hover:bg-gray-100 hover:border-gray-200 active:scale-95 transition-all duration-300">
                                    <iconify-icon icon="twemoji:flag-united-states" className="text-lg"></iconify-icon>
                                    <span className="text-sm font-semibold text-gray-700">USD</span>
                                    <iconify-icon icon="lucide:chevron-down" className="text-gray-400"></iconify-icon>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-4 mb-2">
                                <h1 className="text-4xl font-bold text-gray-900 leading-none tracking-tight">$689,372.00</h1>
                            </div>
                            <p className="text-emerald-500 font-medium flex items-center gap-1 mb-8">
                                <iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
                                5% <span className="text-gray-400 font-normal">than last month</span>
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <a href="#" className="bg-zinc-900 text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 font-medium hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-900/20 active:scale-95 transition-all duration-300">
                                    <iconify-icon icon="lucide:arrow-right-left"></iconify-icon> Transfer
                                </a>
                                <a href="#" className="border-2 border-gray-100 py-3.5 rounded-2xl flex items-center justify-center gap-2 font-medium hover:bg-white hover:-translate-y-1 hover:shadow-lg hover:border-gray-200 active:scale-95 transition-all duration-300 text-gray-700">
                                    <iconify-icon icon="lucide:arrow-down-to-line"></iconify-icon> Request
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                                Wallets <span className="text-gray-200">|</span> <span className="text-gray-900 font-medium">Total 6 wallets</span>
                            </h4>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 transition-all duration-300 hover:bg-emerald-50 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer hover:border-emerald-200">
                                    <div className="flex justify-between items-start mb-2">
                                        <iconify-icon icon="twemoji:flag-united-states" className="text-xl"></iconify-icon>
                                    </div>
                                    <p className="text-[15px] font-bold text-gray-900">$22,678.00</p>
                                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider mt-2 inline-block">Active</span>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-sm hover:border-gray-200 cursor-pointer">
                                    <div className="flex justify-between items-start mb-2">
                                        <iconify-icon icon="twemoji:flag-germany" className="text-xl"></iconify-icon>
                                    </div>
                                    <p className="text-[15px] font-bold text-gray-900">€18,345.00</p>
                                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider mt-2 inline-block">Active</span>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 opacity-70 transition-all duration-300 hover:opacity-100 hover:bg-white hover:-translate-y-0.5 hover:shadow-sm hover:border-gray-200 cursor-pointer">
                                    <div className="flex justify-between items-start mb-2">
                                        <iconify-icon icon="twemoji:flag-united-kingdom" className="text-xl"></iconify-icon>
                                    </div>
                                    <p className="text-[15px] font-bold text-gray-400">£15,000.00</p>
                                    <span className="text-[10px] text-orange-600 font-bold bg-orange-100 px-2 py-0.5 rounded-full uppercase tracking-wider mt-2 inline-block">Inactive</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-2 gap-4 animate-fade-in-up delay-100">
                        <div className="col-span-1 bg-gradient-to-br from-orange-500 to-orange-400 rounded-[32px] p-6 text-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/30 cursor-pointer">
                            <div className="flex justify-between items-start">
                                <p className="text-sm font-medium opacity-90">Total Earnings</p>
                                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                                    <iconify-icon icon="lucide:wallet" className="text-lg"></iconify-icon>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mb-2">$950</h2>
                                <p className="text-xs flex items-center gap-1 opacity-90"><iconify-icon icon="lucide:arrow-up-right"></iconify-icon> 7% <span className="opacity-70">This month</span></p>
                            </div>
                        </div>
                        <div className="col-span-1 bg-white rounded-[32px] p-6 card-shadow flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                            <div className="flex justify-between items-start">
                                <p className="text-sm font-medium text-gray-500">Total Spending</p>
                                <div className="bg-gray-100 p-2 rounded-xl"><iconify-icon icon="lucide:shopping-bag" className="text-lg text-gray-800"></iconify-icon></div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">$700</h2>
                                <p className="text-xs flex items-center gap-1 text-red-500 font-medium"><iconify-icon icon="lucide:arrow-down-right"></iconify-icon> 5% <span className="text-gray-400 font-normal">This month</span></p>
                            </div>
                        </div>
                        <div className="col-span-1 bg-white rounded-[32px] p-6 card-shadow flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                            <div className="flex justify-between items-start">
                                <p className="text-sm font-medium text-gray-500">Total Income</p>
                                <div className="bg-gray-100 p-2 rounded-xl"><iconify-icon icon="lucide:database" className="text-lg text-gray-800"></iconify-icon></div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">$1,050</h2>
                                <p className="text-xs flex items-center gap-1 text-emerald-500 font-medium"><iconify-icon icon="lucide:arrow-up-right"></iconify-icon> 8% <span className="text-gray-400 font-normal">This month</span></p>
                            </div>
                        </div>
                        <div className="col-span-1 bg-white rounded-[32px] p-6 card-shadow flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                                <div className="bg-gray-100 p-2 rounded-xl"><iconify-icon icon="lucide:pie-chart" className="text-lg text-gray-800"></iconify-icon></div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">$850</h2>
                                <p className="text-xs flex items-center gap-1 text-emerald-500 font-medium"><iconify-icon icon="lucide:arrow-up-right"></iconify-icon> 4% <span className="text-gray-400 font-normal">This month</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 bg-white rounded-[32px] p-8 card-shadow hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-200 flex flex-col">
                        <div className="flex flex-col mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">Total Income</h3>
                            <p className="text-sm text-gray-400">View your income in a certain period of time</p>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-sm font-bold text-gray-900">Profit and Loss</h4>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                    <span className="text-xs font-medium text-gray-600">Profit</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gray-900"></span>
                                    <span className="text-xs font-medium text-gray-600">Loss</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-48 w-full flex-1 border-b border-gray-100">
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-6">
                                <div className="border-t border-gray-100 w-full relative"><span className="absolute -left-10 -top-2 text-[10px] text-gray-400 font-medium">50k</span></div>
                                <div className="border-t border-gray-100 w-full relative"><span className="absolute -left-10 -top-2 text-[10px] text-gray-400 font-medium">30k</span></div>
                                <div className="border-t border-gray-100 w-full relative"><span className="absolute -left-10 -top-2 text-[10px] text-gray-400 font-medium">10k</span></div>
                            </div>
                            <svg className="w-full h-full absolute inset-0 py-6 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,40 C10,25 20,25 28.5,45 C35,60 40,40 42.9,35 C50,25 55,20 57.1,20 C65,20 68,15 71.4,15 C80,15 82,30 85.7,30 C92,30 95,40 100,40" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M0,60 C10,65 20,65 28.5,55 C35,45 40,65 42.9,70 C50,75 55,65 57.1,60 C65,55 68,50 71.4,50 C80,50 82,60 85.7,65 C92,70 95,65 100,60" fill="none" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 2" />
                            </svg>
                            <div className="absolute inset-0 py-6">
                                <div className="absolute w-2.5 h-2.5 bg-blue-500 border-2 border-white rounded-full shadow-sm" style={{ left: '0%', top: '40%', transform: 'translate(-50%, -50%)' }}></div>
                                <div className="absolute w-2.5 h-2.5 bg-blue-500 border-2 border-white rounded-full shadow-sm" style={{ left: '42.9%', top: '35%', transform: 'translate(-50%, -50%)' }}></div>
                                <div className="absolute w-2.5 h-2.5 bg-blue-500 border-2 border-white rounded-full shadow-sm" style={{ left: '100%', top: '40%', transform: 'translate(-50%, -50%)' }}></div>

                                <div className="absolute w-2 h-2 bg-zinc-900 border-2 border-white rounded-full shadow-sm" style={{ left: '0%', top: '60%', transform: 'translate(-50%, -50%)' }}></div>
                                <div className="absolute w-2 h-2 bg-zinc-900 border-2 border-white rounded-full shadow-sm" style={{ left: '57.1%', top: '60%', transform: 'translate(-50%, -50%)' }}></div>
                                <div className="absolute w-2 h-2 bg-zinc-900 border-2 border-white rounded-full shadow-sm" style={{ left: '100%', top: '60%', transform: 'translate(-50%, -50%)' }}></div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-3 text-[10px] text-gray-400 font-medium">
                            <span>Jan</span>
                            <span>May</span>
                            <span>Aug</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in-up delay-200">
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-[32px] p-8 card-shadow transition-shadow duration-300 hover:shadow-2xl">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Monthly Spending Limit</h3>
                            <div className="space-y-4">
                                <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                                    <div className="bg-[#FF6B35] h-full rounded-full progress-stripe" style={{ width: '25.45%' }}></div>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <p className="text-gray-900 font-bold">$1,400.00 <span className="text-gray-400 font-normal">spent out of</span></p>
                                    <p className="text-gray-400 font-medium">$5,500.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-[32px] p-6 card-shadow">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-gray-100 p-2 rounded-xl">
                                        <iconify-icon icon="lucide:credit-card" className="text-lg text-gray-800"></iconify-icon>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">My Cards</h3>
                                </div>
                                <a href="#" className="text-[#FF6B35] text-sm font-bold flex items-center gap-1 transition-all duration-300 hover:scale-[1.05] active:scale-95">
                                    + Add new
                                </a>
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                                <div className="flex-shrink-0 w-[240px] h-[150px] bg-zinc-900 rounded-3xl p-5 text-white relative overflow-hidden flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <iconify-icon icon="lucide:rss" className="text-xl rotate-45"></iconify-icon>
                                        <span className="bg-white/10 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-widest">Active</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#EB001B] opacity-80"></div>
                                        <div className="w-6 h-6 rounded-full bg-[#F79E1B] -ml-5 opacity-80"></div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] opacity-40 uppercase tracking-tighter">Card Number</p>
                                        <p className="text-sm font-medium tracking-widest">**** **** 6782</p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-[220px] h-[150px] bg-gradient-to-br from-[#FF6B35] to-[#FF8C61] rounded-3xl p-5 text-white relative flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <iconify-icon icon="lucide:rss" className="text-xl rotate-45"></iconify-icon>
                                    </div>
                                    <div>
                                        <p className="text-[10px] opacity-70 uppercase tracking-tighter">Card Number</p>
                                        <p className="text-sm font-medium tracking-widest">**** **** 4356</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 bg-white rounded-[32px] p-8 card-shadow flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Spending Breakdown</h3>
                            <div className="p-2 bg-purple-50 text-purple-500 rounded-xl"><iconify-icon icon="lucide:pie-chart"></iconify-icon></div>
                        </div>
                        <div className="flex-1 flex flex-col lg:flex-row items-center gap-4">
                            <div className="w-full lg:w-1/2 h-[160px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={SPENDING_BREAKDOWN_DATA} innerRadius={45} outerRadius={70} paddingAngle={2} dataKey="value">
                                            {SPENDING_BREAKDOWN_DATA.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip formatter={(value) => `$${value}`} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col gap-3">
                                {SPENDING_BREAKDOWN_DATA.map(d => (
                                    <div key={d.name} className="flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></span> <span className="text-gray-500">{d.name}</span></div>
                                        <span className="font-bold text-gray-900">${d.value.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 bg-gradient-to-tr from-gray-900 to-zinc-800 rounded-[32px] p-8 card-shadow shadow-xl text-white relative overflow-hidden flex flex-col justify-center group cursor-pointer hover:shadow-zinc-900/40 hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                        <div className="flex flex-col gap-6 items-start relative z-10">
                            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm shrink-0">
                                <iconify-icon icon="lucide:lightbulb" className="text-3xl text-yellow-400"></iconify-icon>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">AI Financial Insight</h3>
                                <p className="text-[15px] text-gray-300 leading-relaxed font-light">Your <strong className="text-white">grocery spending</strong> is up 12% this month. If you maintain this trend, you'll exceed your budget by $200. Consider reviewing subscriptions.</p>
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <iconify-icon icon="lucide:arrow-right" className="text-white/50 text-2xl"></iconify-icon>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white rounded-[32px] p-8 card-shadow transition-shadow duration-300 hover:shadow-2xl animate-fade-in-up delay-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <h3 className="text-xl font-bold text-gray-900 shrink-0">Recent Activities</h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="relative">
                                    <iconify-icon icon="lucide:search" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></iconify-icon>
                                    <input
                                        type="text"
                                        placeholder="Search details..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="bg-gray-50 border border-gray-100 rounded-2xl py-2 pl-11 pr-4 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-orange-500/50 shadow-sm transition-all"
                                    />
                                </div>

                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="bg-white border border-gray-100 px-4 py-2 rounded-2xl text-sm font-semibold text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 cursor-pointer shadow-sm">
                                    <option value="All">All Status</option>
                                    <option value="Completed">Completed</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Pending">Pending</option>
                                </select>

                                <select
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                    className="bg-white border border-gray-100 px-4 py-2 rounded-2xl text-sm font-semibold text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 cursor-pointer shadow-sm">
                                    <option value="newest">Sort: Newest</option>
                                    <option value="oldest">Sort: Oldest</option>
                                    <option value="highest">Sort: Highest Amt</option>
                                    <option value="lowest">Sort: Lowest Amt</option>
                                </select>
                            </div>
                        </div>

                        <div className="overflow-x-auto min-h-[300px]">
                            <table className="w-full">
                                <thead className="text-left border-b border-gray-50">
                                    <tr>
                                        <th className="pb-4 font-semibold text-gray-400 text-xs uppercase tracking-wider px-4">Order ID</th>
                                        <th className="pb-4 font-semibold text-gray-400 text-xs uppercase tracking-wider px-4">Activity</th>
                                        <th className="pb-4 font-semibold text-gray-400 text-xs uppercase tracking-wider px-4">Price</th>
                                        <th className="pb-4 font-semibold text-gray-400 text-xs uppercase tracking-wider px-4">Status</th>
                                        <th className="pb-4 font-semibold text-gray-400 text-xs uppercase tracking-wider px-4">Date</th>
                                        <th className="pb-4 font-semibold text-gray-400 text-xs uppercase tracking-wider pr-4 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {processedTransactions.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="py-12 text-center text-gray-400 font-medium">No transactions found matching criteria.</td>
                                        </tr>
                                    ) : processedTransactions.map((tx) => (
                                        <tr key={tx.id} className="transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] cursor-pointer hover:-translate-y-0.5 relative z-0 hover:z-10 group">
                                            <td className="py-5 px-4 font-semibold text-gray-900 text-sm whitespace-nowrap">{tx.id}</td>
                                            <td className="py-5 px-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-9 h-9 bg-${tx.color}-50 text-${tx.color}-500 rounded-xl flex items-center justify-center shrink-0`}>
                                                        <iconify-icon icon={tx.icon} className="text-lg"></iconify-icon>
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-900">{tx.title}</span>
                                                </div>
                                            </td>
                                            <td className="py-5 px-4 text-sm font-bold text-gray-900">${tx.amount.toLocaleString()}</td>
                                            <td className="py-5 px-4 text-sm whitespace-nowrap">
                                                <span className={`flex items-center gap-1.5 font-bold ${tx.status === 'Completed' ? 'text-emerald-600' : tx.status === 'Pending' ? 'text-red-500' : 'text-orange-500'}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Completed' ? 'bg-emerald-500' : tx.status === 'Pending' ? 'bg-red-500' : 'bg-orange-500'}`}></span>
                                                    {tx.status}
                                                </span>
                                            </td>
                                            <td className="py-5 px-4 text-xs font-medium text-gray-400 whitespace-nowrap">{tx.date}</td>
                                            <td className="py-5 pr-4 text-center">
                                                {isAdmin ? (
                                                    <button onClick={(e) => { e.stopPropagation(); handleDelete(tx.id); }} className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-semibold text-xs border border-transparent hover:border-red-100 flex items-center justify-center gap-1 shadow-sm">
                                                        <iconify-icon icon="lucide:trash-2"></iconify-icon> Delete
                                                    </button>
                                                ) : (
                                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors group-hover:bg-gray-200/50 hover:!bg-gray-200">
                                                        <iconify-icon icon="lucide:more-horizontal" className="text-gray-500"></iconify-icon>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default function App() {
    return (
        <DashboardProvider>
            <DashboardContent />
        </DashboardProvider>
    );
}
