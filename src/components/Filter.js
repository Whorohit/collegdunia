import React from 'react'

const Filter = ({ filteroption, order, handleoption, handleorder,handleserach,searchcollege }) => {
    return (
        <div className='flex   md:flex-row flex-col   justify-normal gap-10 md:w-[95%] items-center p-6 bg-white  w-full  mx-auto  mb-1  '>
            <div className='basis-[1/2]'>
                <input type="text" placeholder='Serach College name  ' className='focus:outline-none focus:border-gray-300 focus:ring  rounded-md  border-2 border-gray-200   p-1 md:w-[25rem] w-full '
                 value={searchcollege} onClick={handleserach} />
            </div>
            <div className='flex flex-row  gap-2 text-gray-500 w-fit  basis-[1/2]   '>
                <div className='flex justify-center gap-2 items-center basis-1/2' >
                    <label htmlFor="order" className=''>Order</label>
                    <select name="order" id="order" className='focus:outline-none focus:border-gray-300 focus:ring  rounded-md  border-2 border-gray-200   w-full ' onChange={handleorder} value={order}>
                        <option value="asc">Ascending </option>
                        <option value="dsc">Descending</option>
                    </select>
                </div>
                <div className='flex justify-center gap-2 items-center  w-fit basis-1/2' >
                    <label htmlFor="order" className='w-fit'>Sort </label>
                    <select name="order" id="order" className='focus:outline-none focus:border-gray-300 focus:ring  rounded-md  border-2 border-gray-200   w-full ' onChange={handleoption} value={filteroption} >
                        <option value="cd_rank">Ranking </option>
                        <option value="fees">Fees</option>
                        <option value="review_rating">Review</option>
                    </select>
                </div>

            </div>

        </div>
    )
}

export default Filter