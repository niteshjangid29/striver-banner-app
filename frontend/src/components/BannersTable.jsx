import { useState, useEffect } from 'react';
import { fetchAllBanners, deleteBanner } from '../services/bannerService';
import { FaExternalLinkAlt, FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';

const BannersTable = ({ isDataUpdated, setIsDataUpdated, onEdit }) => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure you want to delete banner with id ${id}?`)) {
            try {
                await deleteBanner(id);
                setIsDataUpdated(!isDataUpdated);
            } catch (error) {
                console.error('Error deleting banner: ', error);
            }
        }
    };

    const checkBannerExpire = (endTime) => {
        const difference = new Date(endTime) - new Date();
        return difference < 0;
    }

    function formatDateTimeWithOffset(utcDateTime) {
        const date = new Date(utcDateTime);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}-${month}-${year}  ${hours}:${minutes}`;
    }

    useEffect(() => {
        async function fetchBanners() {
            try {
                const data = await fetchAllBanners();
                setBanners(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchBanners();
    }, [isDataUpdated]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='container overflow-x-auto mx-auto my-4'>
            <table className='min-w-full bg-gray-200 text-gray-900 rounded-lg shadow-lg border border-gray-200'>
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visible</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expire</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated At</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        banners?.map((banner, index) => (
                            <tr key={index} className='hover:bg-gray-100 transition-all duration-300'>
                                <td className="px-6 py-1 whitespace-nowrap">{banner.id}</td>
                                <td className="px-6 py-1 whitespace-nowrap">{banner.name}</td>
                                <td className="px-6 py-1 whitespace-nowrap">{banner.description}</td>
                                <td className="px-6 py-1 whitespace-nowrap">{formatDateTimeWithOffset(banner.end_time)}</td>
                                <td className="px-6 py-1 whitespace-nowrap"><a href={banner.link} target="_blank" title={banner.link} rel="noreferrer"><FaExternalLinkAlt className="text-blue-500" /></a></td>
                                <td className={`px-6 py-1 whitespace-nowrap ${banner.is_visible ? 'text-green-500' : 'text-red-500'}`}>{banner.is_visible ? "Yes" : "No"}</td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className='w-4 h-4 rounded-full bg-red-500' style={{ backgroundColor: checkBannerExpire(banner.end_time) ? 'red' : 'green' }} title={checkBannerExpire(banner.end_time) ? 'Banner has expired' : 'Banner is active'}></div>
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap">{formatDateTimeWithOffset(banner.created_at)}</td>
                                <td className="px-6 py-1 whitespace-nowrap">{formatDateTimeWithOffset(banner.updated_at)}</td>
                                <td className="px-6 py-1 whitespace-nowrap">
                                    <div className="flex gap-2 justify-between">
                                        <button className="px-2 py-1 bg-blue-50 border border-transparent rounded-md hover:bg-blue-100" title='Edit' onClick={() => onEdit(banner)}>
                                            <FaRegEdit className="text-blue-700" />
                                        </button>
                                        <button className="px-2 py-1 bg-red-50 border border-transparent rounded-md hover:bg-red-100" title='Delete' onClick={() => handleDelete(banner.id)}>
                                            <MdDeleteOutline className="text-red-700" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default BannersTable;