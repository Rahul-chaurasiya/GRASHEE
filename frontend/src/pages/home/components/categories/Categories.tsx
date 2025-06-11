import React from 'react'
import backToSchool from '../../../../assets/backToSchool.png'
import kitchenware from '../../../../assets/kitchenware.png'
import cleanware from '../../../../assets/cleanware.png'
import footwear from '../../../../assets/footwear.webp'
import fashion from '../../../../assets/fashion.png'
import toys from '../../../../assets/toys.png'
import clothes from '../../../../assets/clothes.png'
import type { category, CategoryProps } from './categories'

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

const Category: React.FC<CategoryProps> = ({ category }) => {
    return (
        <div className='w-40 flex flex-col relative cursor-pointer hover:-translate-y-3 transition-all duration-300 ease-in-out'>
            <section className="flex-1 flex overflow-hidden relative z-10 before:content-[''] 
            before:rounded-tl-[50%] before:-z-10 before:rounded-tr-[50%]
             before:h-[80%] before:absolute before:bg-pink-200 before:bottom-0 before:left-0 before:right-0"
            >
                <img src={category.image} alt="..." className='flex-1' />
            </section>
            <caption className='py-2'>
                {category.name}
            </caption>
        </div>
    )
}

const Categories: React.FC = () => {
    return (
        <div id='categores' className='p-8 flex gap-8 justify-center'>
            {
                categories.map((category, index) => {
                    return <Category category={category} key={index} />
                })
            }
        </div>
    )
}

export default Categories
