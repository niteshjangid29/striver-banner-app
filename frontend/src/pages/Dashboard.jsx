import React, { useState } from 'react';
import BannersTable from '../components/BannersTable';
import Modal from '../components/Modal';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDataUpdated, setIsDataUpdated] = useState(false);
    const [editBanner, setEditBanner] = useState(null);

    const handleCreateButton = () => {
        setEditBanner(null);
        setIsModalOpen(true);
    };
    const handleEditButton = (banner) => {
        setEditBanner(banner);
        setIsModalOpen(true);
    };
    return (
        <div className="dashboard p-5">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-blue-800">Dashboard</h1>
                <button className="mt-5 rounded-md font-medium px-4 py-2 transition-all duration-300 bg-red-600 hover:bg-red-700 text-white border-none" onClick={handleCreateButton}>
                    Create New Banner
                </button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={() => setIsDataUpdated(!isDataUpdated)} editBanner={editBanner} />
                <BannersTable isDataUpdated={isDataUpdated} setIsDataUpdated={setIsDataUpdated} onEdit={handleEditButton} />
                <p>Note: At the moment, only one banner is visible at a time. If you want to see another banner, you need to close the current one.</p>
            </div>
        </div>
    );
};

export default Dashboard;