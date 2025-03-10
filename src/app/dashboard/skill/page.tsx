// @ts-nocheck
"use client"
import { useState } from 'react'
import Navbar from '@/components/ui/navbar'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { navigate } from 'next/navigation'; // Import the navigate function



export default function page() {
    const [teachSkills, setTeachSkills] = useState([]);
    const [learnSkills, setLearnSkills] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [loading, setLoading] = useState(false);
  


    const handleCheckboxChange = (e, setSkills) => {
        const value = e.target.value;
        if (e.target.checked) {
            setSkills(prev => [...prev, value]);
        } else {
            setSkills(prev => prev.filter(skill => skill !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Show the preloader

        // Simulate a 1-second delay before redirecting to the dashboard
        setTimeout(() => {
            console.log("Skills you can teach:", teachSkills);
            console.log("Skills you want to learn:", learnSkills);

            // Navigate to the dashboard page
            window.location.href = '/';
        }, 1000);
    };
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 pt-24">
            <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Set Skill</h2>
                <form onSubmit={handleSubmit}>

                    {/* Skills you can teach */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium mb-2">Skills you can teach</h3>
                        <div className="flex flex-col space-y-2">
                            {/* Computer-related Skills */}
                            <div className="flex gap-2 items-center">
                                <Checkbox 
                                    id="programming" 
                                    value="Programming" 
                                    onChange={(e) => handleCheckboxChange(e, setTeachSkills)}
                                />
                                <p>Programming (e.g., Python, JavaScript)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox 
                                    id="webDev" 
                                    value="Web Development" 
                                    onChange={(e) => handleCheckboxChange(e, setTeachSkills)}
                                />
                                <p>Web Development (e.g., HTML, CSS, React)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox 
                                    id="dataAnalysis" 
                                    value="Data Analysis" 
                                    onChange={(e) => handleCheckboxChange(e, setTeachSkills)}
                                />
                                <p>Data Analysis (e.g., Excel, SQL, Python)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox 
                                    id="othersTeach" 
                                    value="Others" 
                                    onChange={(e) => handleCheckboxChange(e, setTeachSkills)}
                                />
                                <p>Others</p>
                            </div>
                        </div>
                    </div>

                    {/* Skills you want to learn */}
                    <div className="mb-6">
                        <h3 className="text-lg font-medium mb-2">Skills you want to learn</h3>
                        <div className="flex flex-col space-y-2">
                            {/* Computer-related Skills */}
                            <div className="flex gap-2 items-center">
                                <Checkbox 
                                    id="machineLearning" 
                                    value="Machine Learning" 
                                    onChange={(e) => handleCheckboxChange(e, setLearnSkills)}
                                />
                                <p>Machine Learning (e.g., TensorFlow, Scikit-learn)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox 
                                    id="cloudComputing" 
                                    value="Cloud Computing" 
                                    onChange={(e) => handleCheckboxChange(e, setLearnSkills)}
                                />
                                <p>Cloud Computing (e.g., AWS, Azure)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox 
                                    id="devOps" 
                                    value="DevOps" 
                                    onChange={(e) => handleCheckboxChange(e, setLearnSkills)}
                                />
                                <p>DevOps (e.g., Docker, Kubernetes)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Checkbox 
                                    id="othersLearn" 
                                    value="Others" 
                                    onChange={(e) => handleCheckboxChange(e, setLearnSkills)}
                                />
                                <p>Others</p>
                            </div>
                        </div>
                    </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                        <Button 
                            type="submit" 
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
                
                {/* Show preloader if loading is true */}
                {loading && (
                    <div className="flex justify-center mt-4">
                        <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}
