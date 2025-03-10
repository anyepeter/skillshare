// @ts-nocheck
"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";// ShadCN button component for consistent styling
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"; 
import Navbar from '@/components/ui/navbar';


// Dummy Data
const statsData = {
  groupCreated: 5,
  groupJoint: 3,
  skillSet: ['JavaScript', 'React', 'Node.js'],
  messageCount: 10
}

const messagesData = [
  { id: 1, type: 'groupCreated', content: 'Group Created: Tech Innovators' },
  { id: 2, type: 'groupJoint', content: 'Joined Group: Web Developers' },
  { id: 3, type: 'messageReceived', content: 'New message from John: "Hello, lets collaborate!' }
]

const groupsData = [
    { id: 1, name: 'Group A', members: 10, description: 'This is group A', messages: ['Welcome to Group A!'] },
    { id: 2, name: 'Group B', members: 8, description: 'This is group B', messages: ['Hello Group B!'] },
    { id: 3, name: 'Group C', members: 12, description: 'This is group C', messages: ['Welcome to Group C!'] },
    // Add more groups as needed
];

export default function DashboardPage() {
    const [stats, setStats] = useState(statsData)
    const [messages, setMessages] = useState(messagesData)

    const [groups, setGroups] = useState(groupsData);
    const [showModal, setShowModal] = useState(false);
    const [currentGroup, setCurrentGroup] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    const handleAddGroup = () => {
        // Logic to add a new group (if needed)
    };
  
    const handleReply = (messageId: number) => {
      alert(`Replying to message ID: ${messageId}`)
    }

    const handleViewGroup = (group) => {
        setCurrentGroup(group);
        setShowModal(true);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setCurrentGroup(prevState => ({
                ...prevState,
                messages: [...prevState.messages, newMessage]
            }));
            setNewMessage('');
        }
    };

  
    return (
        <>
        <Navbar />
      <div className="p-6 bg-zinc-100 min-h-screen">
        <div className="container mx-auto text-white pt-16 font-bold  ">

            <h1 className='text-2xl md:text-4xl font-bold pb-6 text-slate-900'>Dashboard</h1>
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className=" bg-purple-500 text-white rounded-md shadow-md border-none">
              <CardHeader className='font-light'>
                <p >Group Created</p>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-semibold">{stats.groupCreated}</p>
              </CardContent>
            </Card>
  
            <Card className=" bg-sky-500 text-white rounded-md shadow-md border-none">
              <CardHeader className='font-light'>
                <p >Group Joint</p>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-semibold">{stats.groupJoint}</p>
              </CardContent>
            </Card>
  
            <Card className=" bg-teal-500 text-white rounded-md shadow-md border-none">
              <CardHeader className='font-light'>
                <p>Skill Set</p>
              </CardHeader>
              <CardContent>
                <h3 className="text-4xl font-semibold">0</h3>
              </CardContent>
            </Card>
  
            <Card className="bg-indigo-500 text-white rounded-md shadow-md border-none">
              <CardHeader className='font-light'>
                <p>Messages</p>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-semibold">{stats.messageCount}</p>
              </CardContent>
            </Card>
          </div>
  
          {/* Messages Section */}
          {/* <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Messages</h2>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="p-4 bg-white text-black rounded-md shadow-md"
                >
                  <p className="font-semibold">{message.content}</p>
                  {message.type === 'messageReceived' && (
                    <Button
                      onClick={() => handleReply(message.id)}
                      className="mt-2 bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Reply
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div> */}

<div>
            <h2 className="text-2xl font-semibold text-black mb-4">Groups</h2>
            <div className="space-y-4">
                <Card className="bg-white text-black rounded-md shadow-md border-none">
                    <div className='flex justify-end w-full p-4'>
                        <Button className='bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md' onClick={handleAddGroup}>Add Group</Button>
                    </div>
                    <div className="space-y-4 flex gap-16">
                        {groups.map(group => (
                            <Card key={group.id} className="bg-white text-black  border-none p-4">
                                <h3 className="text-lg font-semibold">{group.name}</h3>
                                <p className="text-gray-600">Total Members: {group.members}</p>
                                <Button className="mt-2 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md">
                                    View Group
                                </Button>
                            </Card>
                        ))}
                    </div>
                </Card>
            </div>
        </div>

<div className='md:flex md:justify-evenly'>
<div className="mt-20">
            <h2 className="text-2xl font-semibold text-black mb-4">Groups Joined</h2>
            <div className="space-y-4">
                <Card className="bg-white text-black rounded-md shadow-md border-none p-4">
                    <div className="space-y-4 flex gap-16">
                        {groups.map(group => (
                            <Card key={group.id} className="bg-white text-black border-none p-4">
                                <h3 className="text-lg font-semibold">{group.name}</h3>
                                <p className="text-gray-600">Total Members: {group.members}</p>
                                <Button
                                    className="mt-2 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md"
                                    onClick={() => handleViewGroup(group)}
                                >
                                    View Group
                                </Button>
                            </Card>
                        ))}
                    </div>
                </Card>
            </div>
        </div>

        <div className='mt-20'>
            <h2 className="text-2xl font-semibold text-black mb-4">Groups Joined</h2>
            <div className="space-y-4">
                <Card className="bg-white text-black rounded-md shadow-md border-none p-4">
                    <div className="space-y-4 flex gap-16">
                        {groups.map(group => (
                            <Card key={group.id} className="bg-white text-black  border-none p-4">
                                <h3 className="text-lg font-semibold">{group.name}</h3>
                                <p className="text-gray-600">Total Members: {group.members}</p>
                                <Button className="mt-2 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md">
                                    View Group
                                </Button>
                            </Card>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
        </div>

        </div>
      </div>

      {showModal && currentGroup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75">
                    <div className="bg-white rounded-md shadow-lg p-6 w-96">
                        <h2 className="text-xl font-semibold">{currentGroup.name}</h2>
                        <p className="text-gray-700 mb-4">{currentGroup.description}</p>

                        <div className="space-y-4 mb-4">
                            <h3 className="font-semibold">Messages:</h3>
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                {currentGroup.messages?.map((msg, index) => (
                                    <p key={index} className="text-sm text-gray-600">{msg}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2"
                                placeholder="Add a message..."
                            />
                            <Button
                                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md"
                                onClick={handleSendMessage}
                            >
                                Send
                            </Button>
                        </div>

                        <div className="flex justify-end mt-4">
                            <Button
                                className="bg-red-600 text-white hover:bg-red-700 px-6 py-3 rounded-md"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            )}
      </>
    )
  }