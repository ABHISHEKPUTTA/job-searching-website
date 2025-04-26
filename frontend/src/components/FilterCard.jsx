import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { RefreshCw } from "lucide-react";

const filterData = [
    {
        filterType: "Location",
        array: ["Bangalore ", "Hyderabad", "Pune", "Chennai", "Mumbai", "Gurgaon", "Noida"]
    },
    {
        filterType: "Industry",
        array: [
            "Frontend Developer",
            "Backend Developer",
            "FullStack Developer",
            "UI/UX Designer",
            "Data Scientist"
        ]
    },
    {
        filterType: "Salary",
        array: [
            "0-40k",
            "40k-1L",
            "1L-3L",
            "3L-5L",
            "5L-10L"
        ]
        
    },
];

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false); // Move here!
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    };

    const clearFilters = () => {
        setIsRefreshing(true);
        setSelectedValue('');
        setTimeout(() => {
            setIsRefreshing(false);
        }, 500); // Half-second spin
    };

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue, dispatch]);

    return (
        <div className="w-full bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center justify-between mb-3 gap-2">
                <h1 className="font-bold text-xl text-gray-800">Filter Jobs</h1>
                <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-md text-blue-700 px-3 py-1 transition-all duration-200 font-bold"
                >
                    <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
                    <span>Clear Filters</span>
                </button>
            </div>
            <hr />
            <RadioGroup value={selectedValue} onValueChange={changeHandler} className="mt-4">
                {filterData.map((data, index) => (
                    <div key={index} className="mt-6">
                        <h2 className="font-bold text-lg text-gray-800 mb-2">{data.filterType}</h2>
                        {data.array.map((item, idx) => {
                            const itemId = `id${index}-${idx}`;
                            return (
                                <div className="flex items-center space-x-2 my-2" key={itemId}>
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId} className="text-gray-800 font-bold">{item}</Label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default FilterCard;
