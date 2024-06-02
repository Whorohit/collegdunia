import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import InfiniteScroll from "react-infinite-scroll-component";

const Table = ({ tabledta = [], fetchMoreData, hasMore }) => {
    return (
        <div className='flex justify-normal md:w-[95%] w-full bg-white overflow-x-auto mx-auto p-6'>
            <InfiniteScroll
                dataLength={tabledta.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4 className="text-center w-full">Loading...</h4>}
                scrollableTarget="scrollableDiv"
            >
                <table className="min-w-full text-left text-sm font-light border-[1px] border-gray-200">
                    <thead className="border-b font-medium bg-[#88bdc4] text-white capitalize">
                        <tr>
                            <th scope="col" className="px-4 py-3 border-[1px] w-[7rem] border-gray-200">CD Ranking</th>
                            <th scope="col" className="px-4 py-3 border-[1px] w-[50rem] md:w-[40rem] border-gray-200">Colleges</th>
                            <th scope="col" className="px-4 py-3 border-[1px] w-[10rem] border-gray-200">Course Fees</th>
                            <th scope="col" className="px-4 py-3 border-[1px] w-[10rem] border-gray-200">Placements</th>
                            <th scope="col" className="px-4 py-3 border-[1px] border-gray-200">User Review</th>
                            <th scope="col" className="px-4 py-3 border-[1px] border-gray-200">Ranking</th>
                        </tr>
                    </thead>
                    <tbody className='min-w-full text-sm font-light text-center'>
                        {tabledta.map(({
                            cdrank,
                            name,
                            location,
                            approval,
                            courses,
                            rating,
                            reviews,
                            bestIn,
                            rank,
                            rankingSource,
                        }, index) => (
                            <tr key={index} className='bordert-[1px] border-gray-200'>
                                <td className='font-bold text-gray-700 border-[1px] border-gray-200'>#{cdrank}</td>
                                <td className='flex flex-col h-[20rem] md:h-[7rem] justify-center gap-1 border-[1px] border-gray-200 pt-2 items-start pl-5 py-2 '>
                                    <Link className='text-sky-300 text-sm md:text-base font-normal no-underline' to={"/"}>{name}</Link>
                                    {location}
                                    <div className='flex justify-between gap-4 text-xs md:text-sm'>
                                        <h1 className='flex justify-center gap-1 text-orange-400 items-center truncate'>
                                            <FaArrowRight />
                                            <Link to={'/'} className='text-orange-400 text-sm'>Apply Now</Link>
                                        </h1>
                                        <h1 className='hidden md:flex justify-center gap-1 text-green-500 items-center'>
                                            <FaDownload />
                                            <Link to={'/'} className='text-green-500 text-sm'>Download Brochure</Link>
                                        </h1>
                                        <div className="flex items-center text-black">
                                            <input type="radio" id="squareRadio" name="radioShape" className="hidden" />
                                            <label htmlFor="squareRadio" className="w-3 h-3 flex justify-center items-center border border-gray-400 rounded-none cursor-pointer select-none" />
                                            <span className="ml-2">Compare</span>
                                        </div>
                                    </div>
                                </td>
                                <td className='justify-center gap-1 text-left pl-5 pt-2 items-start border-[1px] border-gray-200'>
                                    <span className='font-medium text-[1rem] text-[#88bdc4]'>{courses.fees}</span>
                                    <h1 className='text-xs my-1'>{courses.courseName}</h1>
                                    <h1 className='text-xs my-1 text-left'>1 year fee</h1>
                                    <h1 className='flex justify-start text-orange-300 items-center gap-2'>
                                        <GoArrowSwitch />compare
                                    </h1>
                                </td>
                                <td className='justify-center gap-1 text-left pl-5 pt-2 items-start border-[1px] border-gray-200'>
                                    <span className='font-medium text-sm text-[#88bdc4]'>{courses.averagePackage}</span>
                                    <h1 className='text-xs my-[1px]'>Avg. Package</h1>
                                    <span className='font-medium text-sm text-[#88bdc4]'>{courses.highestPackage}</span>
                                    <h1 className='text-xs my-[1px]'>High. Package</h1>
                                    <h1 className='flex justify-start text-orange-300 items-center gap-2'>
                                        <GoArrowSwitch />compare
                                    </h1>
                                </td>
                                <td className='text-left pl-2 border-[1px] border-gray-200'>
                                    <h1 className='text-orange-400 font-medium text-base truncate'>{rating}/ 5</h1>
                                    <h1 className='flex justify-start gap-0 items-center text-xs font-light truncate'>
                                        <LuDot size={"20px"} /> Based on {reviews} User Reviews
                                    </h1>
                                    <h1 className='rounded-md text-xs text-rose-400 bg-yellow-100 font-normal mx-auto px-3 w-[75%] text-center truncate'>
                                        Best in {bestIn}
                                    </h1>
                                </td>
                                <td className='font-normal border-[1px] border-gray-200'>
                                    {rank} <sup>th</sup>/<span className='text-orange-300'>1500</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </InfiniteScroll>
        </div>
    );
}

export default Table;
