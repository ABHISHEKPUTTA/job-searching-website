import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-xl shadow-md bg-white border border-gray-100 cursor-pointer 
                 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl 
                 hover:border-transparent relative overflow-hidden group 
                 hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 hover:ring-offset-white"
    >
      {/* Moving Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                      blur-md scale-125"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <div>
          <h1 className="font-semibold text-lg group-hover:text-blue-900 transition-colors duration-300">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>

        <div className="mt-2">
          <h1 className="font-bold text-xl my-2 group-hover:text-blue-800 transition-colors duration-300">{job?.title}</h1>
          <p className="text-sm text-gray-600 line-clamp-2">{job?.description}</p>
        </div>

        <div className="flex items-center flex-wrap gap-2 mt-4">
          <Badge className="text-blue-700 font-bold bg-blue-100 group-hover:bg-blue-200 transition-all duration-300" variant="ghost">
            {job?.position} Positions
          </Badge>
          <Badge className="text-[#F83002] font-bold bg-red-100 group-hover:bg-red-200 transition-all duration-300" variant="ghost">
            {job?.jobType}
          </Badge>
          <Badge className="text-[#7209b7] font-bold bg-purple-100 group-hover:bg-purple-200 transition-all duration-300" variant="ghost">
            {job?.salary} LPA
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default LatestJobCards
