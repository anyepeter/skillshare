"use client"
import Navbar from '@/components/ui/navbar'
import React, { useState } from 'react'
import Link from 'next/link'

const groupsData = [
  { id: 1, name: 'Coding Enthusiasts', members: 150, creator: 'John Doe' },
  { id: 2, name: 'Tech Innovators', members: 120, creator: 'Jane Smith' },
  { id: 3, name: 'Design Masters', members: 80, creator: 'Alice Johnson' },
  { id: 4, name: 'Product Managers', members: 90, creator: 'Chris Lee' },
  { id: 1, name: 'Coding Enthusiasts', members: 150, creator: 'John Doe' },
  { id: 2, name: 'Tech Innovators', members: 120, creator: 'Jane Smith' },
  { id: 3, name: 'Design Masters', members: 80, creator: 'Alice Johnson' },
  { id: 4, name: 'Product Managers', members: 90, creator: 'Chris Lee' },
  { id: 1, name: 'Coding Enthusiasts', members: 150, creator: 'John Doe' },
  { id: 2, name: 'Tech Innovators', members: 120, creator: 'Jane Smith' },
  { id: 3, name: 'Design Masters', members: 80, creator: 'Alice Johnson' },
  { id: 4, name: 'Product Managers', members: 90, creator: 'Chris Lee' },
  { id: 1, name: 'Coding Enthusiasts', members: 150, creator: 'John Doe' },
  { id: 2, name: 'Tech Innovators', members: 120, creator: 'Jane Smith' },
  { id: 3, name: 'Design Masters', members: 80, creator: 'Alice Johnson' },
  { id: 4, name: 'Product Managers', members: 90, creator: 'Chris Lee' },
  { id: 1, name: 'Coding Enthusiasts', members: 150, creator: 'John Doe' },
  { id: 2, name: 'Tech Innovators', members: 120, creator: 'Jane Smith' },
  { id: 3, name: 'Design Masters', members: 80, creator: 'Alice Johnson' },
  { id: 4, name: 'Product Managers', members: 90, creator: 'Chris Lee' },
  { id: 1, name: 'Coding Enthusiasts', members: 150, creator: 'John Doe' },
  { id: 2, name: 'Tech Innovators', members: 120, creator: 'Jane Smith' },
  { id: 3, name: 'Design Masters', members: 80, creator: 'Alice Johnson' },
  { id: 4, name: 'Product Managers', members: 90, creator: 'Chris Lee' },
  { id: 1, name: 'Coding Enthusiasts', members: 150, creator: 'John Doe' },
  { id: 2, name: 'Tech Innovators', members: 120, creator: 'Jane Smith' },
  { id: 3, name: 'Design Masters', members: 80, creator: 'Alice Johnson' },
  { id: 4, name: 'Product Managers', members: 90, creator: 'Chris Lee' },
  // Add more group data here
]

export default function Page() {
  const [search, setSearch] = useState('')

  // Filter groups based on the search term
  const filteredGroups = groupsData.filter(group =>
    group.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen">
        <div className="container pt-28 mx-auto px-4 py-10">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Browse Groups</h1>
            <input
              type="text"
              placeholder="Search for a group..."
              className="px-4 py-2 w-full max-w-lg border rounded-lg shadow-md"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGroups.length > 0 ? (
              filteredGroups.map(group => (
                <div key={group.id} className="bg-white rounded-lg flex justify-between items-center shadow-lg p-6">
                    <div>
                  <h2 className="text-xl font-semibold mb-2">{group.name}</h2>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Members:</span> {group.members}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Creator:</span> {group.creator}
                  </p>
                  </div>
                  <Link href={`/groups/${group.id}`} className="text-blue-500 hover:text-blue-700 font-semibold">
                    View Group
                  </Link>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No groups found.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
