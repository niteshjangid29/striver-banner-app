import React, { useEffect, useState } from 'react';
import { createBanner, updateBanner } from '../services/bannerService';
import { MdClose } from 'react-icons/md';

const Modal = ({ isOpen, onClose, editBanner, onSuccess }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [endTime, setEndTime] = useState('');
    const [visible, setVisible] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (editBanner) {
            setName(editBanner.name);
            setDescription(editBanner.description);
            setLink(editBanner.link);
            setEndTime(editBanner.end_time);
            setVisible(editBanner.is_visible);
        }
    }, [editBanner]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSuccess(null);

        const data = {
            name,
            description,
            link,
            end_time: endTime,
            is_visible: visible
        };

        try {
            let response;
            if (editBanner) {
                response = await updateBanner(editBanner.id, data);
            } else {
                response = await createBanner(data);
            }
            setSuccess(response.message);
            setTimeout(() => {
                onClose();
                onSuccess();
                setSuccess(null);
            }, 1000);
        }
        catch (error) {
            setError(error.message);

            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    }

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
                <div className='bg-white p-8 rounded-lg min-w-[400px]'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl font-semibold'>{editBanner ? 'Edit Banner' : 'Create New Banner'}</h2>
                        <button className='hover:bg-gray-200 rounded-md' onClick={onClose}><MdClose className='text-2xl' /></button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col my-4'>
                            <label htmlFor='name' className='font-medium'>Name</label>
                            <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required placeholder='Title' className='border border-gray-300 rounded-md p-2' />
                        </div>
                        <div className='flex flex-col my-4'>
                            <label htmlFor='description' className='font-medium'>Description</label>
                            <textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)} required placeholder='Description' className='border border-gray-300 rounded-md p-2'></textarea>
                        </div>
                        <div className='flex flex-col my-4'>
                            <label htmlFor='link' className='font-medium'>Link</label>
                            <input type='text' id='link' value={link} onChange={(e) => setLink(e.target.value)} required placeholder='https://example.com' className='border border-gray-300 rounded-md p-2' />
                        </div>
                        <div className='flex flex-col my-4'>
                            <label htmlFor='end_time' className='font-medium'>End Time</label>
                            <input type='datetime-local' id='end_time' value={endTime} onChange={(e) => setEndTime(e.target.value)} required className='border border-gray-300 rounded-md p-2' />
                        </div>
                        <div className='flex my-4 gap-2'>
                            <input type='checkbox' id='visible' checked={visible} onChange={(e) => setVisible(e.target.checked)} className='border border-gray-300 rounded-md p-2' />
                            <label htmlFor='visible' className='text-md'>Do you want to make this banner visible?</label>
                        </div>
                        <button type='submit' className='rounded-md font-medium px-4 py-2 transition-all duration-300 bg-red-600 hover:bg-red-700 text-white border-none' disabled={success || error}>{editBanner ? 'Update' : 'Create'}</button>
                    </form>
                    {success && <p className='text-green-500'>{success}</p>}
                    {error && <p className='text-red-500'>{error}</p>}
                </div>
            </div>
        </div>
    )
}

export default Modal;