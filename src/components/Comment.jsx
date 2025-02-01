import React from 'react';

const Comment = (props) => {
    const { singleComment } = props;
    const { authorDisplayName, authorProfileImageUrl, textOriginal, updatedAt } = singleComment?.snippet?.topLevelComment?.snippet;

    return (
        <div className='max-w-2xl mx-auto px-4 py-2 my-2 flex flex-col sm:flex-row items-start sm:items-center border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300'>
            <img
                className='h-12 w-12 rounded-full border-2 border-gray-200'
                alt="profile"
                src={authorProfileImageUrl}
            />
            <div className='mt-2 sm:mt-0 sm:ml-4 flex-1'>
                <h1 className='font-bold text-lg text-gray-800'>{authorDisplayName}</h1>
                <p className='text-sm text-gray-600 mt-1'>{textOriginal}</p>
                <p className='text-xs text-gray-500 mt-2'>{new Date(updatedAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default Comment;