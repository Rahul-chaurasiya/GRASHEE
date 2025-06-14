import React from 'react'
import backToSchool from '../../../../assets/backToSchool.png'
import kitchenware from '../../../../assets/kitchenware.png'
import cleanware from '../../../../assets/cleanware.png'
import footwear from '../../../../assets/footwear.webp'
import fashion from '../../../../assets/fashion.png'
import toys from '../../../../assets/toys.png'
import clothes from '../../../../assets/clothes.png'
import type { category } from '../../../../types/categories'

const CategoryIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="14" height="14" rx="3" fill="#F9A8D4" />
        <rect x="22" y="4" width="14" height="14" rx="3" fill="#EC4899" />
        <rect x="4" y="22" width="14" height="14" rx="3" fill="#EC4899" />
        <rect x="22" y="22" width="14" height="14" rx="3" fill="#F9A8D4" />
    </svg>
);

const Categories = () => {
    return (
        <div
            className="flex flex-col items-center w-[64px] text-center shrink-0 py-4 pl-3"
        >
            <span className="w-14 h-14 rounded-full object-cover flex items-center justify-center bg-pink-100"><CategoryIcon/></span>
            <span className="text-xs mt-1 truncate w-full">{"Categories"}</span>
        </div>
    )
}


const MobileCategories: React.FC = () => {
    const categories: category[] = [
        {
            name: "Back to school",
            image: backToSchool
        },
        {
            name: "Kitchenware",
            image: kitchenware
        },
        {
            name: "Cleanware",
            image: cleanware
        },
        {
            name: "Footwear",
            image: footwear
        },
        {
            name: "Fashion",
            image: fashion
        },
        {
            name: "Toys",
            image: toys
        },
        {
            name: "Clothes",
            image: clothes
        },
    ]
    return (
        <div className="flex overflow-x-auto flex-nowrap px-2 space-x-3 scrollbar-hide">
            <Categories/>{categories.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center w-[64px] text-center shrink-0 py-4 pl-3"
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover bg-gray-200"
                    />
                    <span className="text-xs mt-1 truncate w-full">{item.name}</span>
                </div>
            ))}
        </div>

    )

}

export default MobileCategories
