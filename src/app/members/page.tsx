"use client"
import Navbar from '@/components/ui/navbar'
import React, { useState } from 'react'
import Link from 'next/link'

const membersData = [
  {
    id: 1,
    username: 'Alice',
    profilePic: '/images/alice.jpg',  // Placeholder image
    skills: ['JavaScript', 'React', 'Node.js'],
  },
  {
    id: 2,
    username: 'Bob',
    profilePic: '/images/bob.jpg',  // Placeholder image
    skills: ['Python', 'Django', 'Machine Learning'],
  },
  {
    id: 3,
    username: 'Charlie',
    profilePic: '/images/charlie.jpg',  // Placeholder image
    skills: ['UI/UX Design', 'Figma', 'Adobe XD'],
  },
  {
    id: 4,
    username: 'David',
    profilePic: '/images/david.jpg',  // Placeholder image
    skills: ['Project Management', 'Agile', 'Scrum'],
  },
  // Add more members here
]

export default function MembersPage() {
  const [search, setSearch] = useState('')

  // Filter members based on the search term (search by username)
  const filteredMembers = membersData.filter(member =>
    member.username.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen">
        <div className="container pt-28 mx-auto px-4 py-10">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Search Members</h1>
            <input
              type="text"
              placeholder="Search by username..."
              className="px-4 py-2 w-full max-w-lg border rounded-lg shadow-md"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredMembers.length > 0 ? (
              filteredMembers.map(member => (
                <div key={member.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={member.profilePic}
                      alt={member.username}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <h2 className="text-xl font-semibold">{member.username}</h2>
                  </div>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Skills:</span> {member.skills.join(', ')}
                  </p>
                  <Link href={`/members/${member.id}`} className="text-blue-500 hover:text-blue-700 font-semibold">
                    View Details
                  </Link>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No members found.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
