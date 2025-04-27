import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from "lucide-react";

const Job = ({ job }) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    if (!job) return <div>Loading...</div>;

    return (
        <div className='p-6 rounded-2xl shadow-xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>
                    {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
            </div>

            <div className='flex items-center gap-4 my-4'>
                <Button className="p-3" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-semibold text-xl text-gray-800'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-2xl text-gray-900 mt-2'>{job?.title}</h1>
                <p className='text-sm text-gray-700 mt-1'>{job?.description}</p>
            </div>

            <div className='flex items-center gap-4 mt-4'>
                <Badge className={'text-blue-700 font-semibold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-semibold'} variant="ghost">{job?.jobType}</Badge> {/* Updated here */}
                <Badge className={'text-[#7209b7] font-semibold'} variant="ghost">₹{job?.salary}LPA</Badge>
            </div>

            <div className="flex items-center gap-4 mt-6 justify-between w-full">
                <Button
                    onClick={() => navigate(`/description/${job?._id}`)}
                    className="w-full relative overflow-hidden flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold group hover:scale-105 active:scale-95"
                    aria-label={`Apply for ${job?.title}`}
                >
                    <span className="flex items-center">
                        <span className="mr-2">APPLY NOW</span>
                        <ArrowRight
                            size={22}
                            className="transform translate-x-[-10px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                    </span>
                </Button>
            </div>
        </div>
    )
}

export default Job
