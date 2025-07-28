import React, { useState } from 'react';
import Riseuplabs from './Riseuplabs'; // make sure this component exists
import Mmu from './Mmu';

const WorkProgressDashboard = () => {
    const [activeTab, setActiveTab] = useState('mmu');

    return (
        <div className="px-6 pt-[100px] bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                        🚀 Work Progress Dashboard
                    </h1>
                </div>

                {/* Association Tabs */}
                <div className="mb-6">
                    <p className="text-gray-700 font-medium mb-2">Associated With:</p>
                    <div className="flex flex-wrap gap-3 border-b border-gray-300 pb-2">
                        {/* MMU Button */}
                        <button
                            onClick={() => setActiveTab('mmu')}
                            className={`flex flex-row items-center justify-center gap-2 px-2 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'mmu'
                                ? 'bg-blue-500 text-white'
                                : 'bg-blue-800 text-white hover:bg-blue-600 border border-blue-900'
                                }`}
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb0p97Wg1afbSHTtcsDrV2AMbikCiNWDyxQ&s"
                                alt="MMU Logo"
                                className="w-6 h-6 rounded-full"
                            />
                            <span className="whitespace-nowrap">MMU</span>
                        </button>

                        {/* Riseup Labs Button */}
                        <button
                            onClick={() => setActiveTab('riseuplabs')}
                            className={`flex flex-row items-center justify-center gap-2 px-2 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'riseuplabs'
                                ? 'bg-blue-600 text-white'
                                : 'bg-red-800 text-white hover:bg-red-700 border border-red-800'
                                }`}
                        >
                            <img
                                src="https://riseuplabs.com/wp-content/themes/rul/images/riseuplabs.svg"
                                alt="Riseup Labs Logo"
                                className="w-6 h-6 rounded-full"
                            />
                            <span className="whitespace-nowrap">Riseup Labs</span>
                        </button>

                        {/* RKU Button */}
                        <button
                            onClick={() => setActiveTab('rku')}
                            className={`flex flex-row items-center justify-center gap-2 px-2 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'rku'
                                ? 'bg-blue-600 text-white'
                                : 'bg-red-500 text-white hover:bg-red-600 border border-red-600'
                                }`}
                        >
                            <img
                                src="https://cdn.universitykart.com//Content/upload/admin/qnb1w1c1.bcm.png"
                                alt="RKU Logo"
                                className="w-6 h-6 rounded-full "
                            />
                            <span className="whitespace-nowrap">RKU</span>
                        </button>
                    </div>



                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === 'mmu' && (
                        <div className="text-gray-800 text-base">
                            <Mmu />
                        </div>
                    )}
                    {activeTab === 'riseuplabs' && (
                        <div>
                            <Riseuplabs />
                        </div>
                    )}
                    {activeTab === 'rku' && (
                        <div className="text-gray-800 text-base">RKU content UPDATING...</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkProgressDashboard;
