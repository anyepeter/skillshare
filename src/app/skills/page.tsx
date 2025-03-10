// @ts-nocheck
"use client"
import Navbar from '@/components/ui/navbar'
import React, { useState } from 'react'
import Link from 'next/link'

const skillsData = [
  { id: 1, name: 'JavaScript', members: 120, creator: 'John Doe', membersList: ['Alice', 'Bob', 'Charlie'] },
  { id: 2, name: 'Python', members: 150, creator: 'Jane Smith', membersList: ['John', 'David', 'Emma'] },
  { id: 3, name: 'UI/UX Design', members: 80, creator: 'Alice Johnson', membersList: ['Sophia', 'James', 'Mia'] },
  { id: 4, name: 'Project Management', members: 90, creator: 'Chris Lee', membersList: ['Lucas', 'Olivia', 'Amelia'] },
  // Add more skill data here
]

export default function SkillsPage() {
  const [search, setSearch] = useState('')
  const [selectedSkill, setSelectedSkill] = useState(null)

  // Filter skills based on the search term
  const filteredSkills = skillsData.filter(skill =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  )

  // Handle skill selection
  const handleSkillChange = (e) => {
    const skillId = e.target.value
    const skill = skillsData.find((skill) => skill.id === parseInt(skillId))
    setSelectedSkill(skill || null)
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen">
        <div className="container mx-auto px-4 py-10">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Browse Skills</h1>
            <input
              type="text"
              placeholder="Search for a skill..."
              className="px-4 py-2 w-full max-w-lg border rounded-lg shadow-md"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="skill" className="text-white font-semibold mb-2 block">
              Select a skill to see members:
            </label>
            <select
              id="skill"
              className="px-4 py-2 w-full max-w-lg border rounded-lg shadow-md"
              onChange={handleSkillChange}
              value={selectedSkill ? selectedSkill.id : ''}
            >
              <option value="">Select a skill</option>
              {filteredSkills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.name}
                </option>
              ))}
            </select>
          </div>

          {selectedSkill && (
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Members under {selectedSkill.name}:</h2>
              <ul>
                {selectedSkill.membersList.map((member, index) => (
                  <li key={index} className="text-gray-600">{member}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {filteredSkills.length > 0 ? (
              filteredSkills.map(skill => (
                <div key={skill.id} className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Members:</span> {skill.members}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Creator:</span> {skill.creator}
                  </p>
                  <Link href={`/skills/${skill.id}`} className="text-blue-500 hover:text-blue-700 font-semibold">
                    View Skill
                  </Link>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No skills found.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
