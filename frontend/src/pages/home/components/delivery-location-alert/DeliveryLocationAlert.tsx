import React from 'react'
import { FaAngleRight, FaLocationDot } from 'react-icons/fa6'

const DeliveryLocationAlert: React.FC = () => {
    return (
        <div className='flex bg-sky-50 items-center p-4 gap-1'>
            <span className='text-sky-500'><FaLocationDot /></span>
            <p className='text-sm font-semibold'>Add delivery location to check extra discount </p>
            <span className="flex">
                <span style={{ animation: 'var(--arrow-blink)', animationDelay: '0s' }}>
                    <FaAngleRight />
                </span>
                <span style={{ animation: 'var(--arrow-blink)', animationDelay: '0.3s' }}>
                    <FaAngleRight />
                </span>
                <span style={{ animation: 'var(--arrow-blink)', animationDelay: '0.6s' }}>
                    <FaAngleRight />
                </span>
            </span>

        </div>
    )
}

export default DeliveryLocationAlert
