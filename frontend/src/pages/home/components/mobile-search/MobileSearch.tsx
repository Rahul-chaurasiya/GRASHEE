import React from 'react'

const MobileSearch: React.FC = () => {
    return (
       <div className='py-2 px-4'>
         <div className="flex items-center w-full h-[50px] rounded-lg border border-gray-500 px-2 ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
            <input
                type="search"
                placeholder="Search for Sarees, Kurtis, Cosmetics, etc."
                className="ml-3 w-full bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            />
        </div>
       </div>

    )
}

export default MobileSearch
