import React, { useEffect, useState } from 'react';
import { fetchLatestVisibleBanner } from '../services/bannerService';
import { FaExternalLinkAlt } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';

const Banner = () => {
    const [banner, setBanner] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        async function getBanner() {
            try {
                const data = await fetchLatestVisibleBanner();
                setBanner(data[0]);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getBanner();
    }, []);

    const handleExpire = () => {
        setIsExpired(true);
    };

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    // if (!banner) return <p>No banner found</p>;
    // if (isExpired) return <p>Banner has expired</p>;

    return (
        <div className="container  mx-auto my-4">
            <div className="banner-content flex flex-col items-center bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-6 rounded-lg shadow-lg">
                {(isExpired || !banner || loading || error) ?
                    <>
                        {!loading && !error && isExpired && <p className="text-2xl font-bold mb-2">Banner has expired</p>}
                        {error && <p className="text-2xl font-bold mb-2">Error: {error.message}</p>}
                        {!loading && !error && !banner && <p className="text-2xl font-bold mb-2">No banner found</p>}
                        {loading && <p className="text-2xl font-bold mb-2">Loading...</p>}
                    </> : (
                        <>
                            <h1 className="text-3xl font-bold mb-2">{banner.name}</h1>
                            <p className="text-lg mb-4">{banner.description}</p>
                            <CountdownTimer endTime={banner.end_time} onExpire={handleExpire} />
                            <a href={banner.link} target="_blank" title={banner.link} rel="noreferrer" className="flex items-center mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-semibold">
                                Learn More
                                <FaExternalLinkAlt className="ml-2" />
                            </a>
                        </>
                    )}
            </div>
        </div>
    );
};

export default Banner;