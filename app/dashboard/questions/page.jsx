  // components/QuestionsSection.jsx (or a similar file for dashboard/questions route)
  "use client"
  import React, { useState } from 'react';
  import { Search, Filter, Bookmark, PlayCircle } from 'lucide-react'; // Example icons
  import Link from 'next/link';

  // Dummy data for demonstration
  const mockQuestions = [
    { id: 1, text: "Explain the event loop in JavaScript.", type: "Technical", role: "Frontend", difficulty: "Intermediate", tags: ["JavaScript", "Event Loop"] },
    { id: 2, text: "Describe a time you failed and what you learned.", type: "Behavioral", role: "General", difficulty: "Beginner", tags: ["STAR Method", "Soft Skills"] },
    { id: 3, text: "Design a URL shortener.", type: "System Design", role: "Full Stack", difficulty: "Advanced", tags: ["System Design", "Scalability"] },
    { id: 4, text: "What is an API Gateway and why is it used?", type: "Technical", role: "Backend", difficulty: "Intermediate", tags: ["APIs", "Microservices"] },
    { id: 5, text: "How would you test a new feature?", type: "QA", role: "QA Engineer", difficulty: "Beginner", tags: ["Testing", "QA"] },
  ];

  export default function    page() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState('All');
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');

    const filteredQuestions = mockQuestions.filter(question => {
      const matchesSearch = question.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            question.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesRole = selectedRole === 'All' || question.role === selectedRole;
      const matchesDifficulty = selectedDifficulty === 'All' || question.difficulty === selectedDifficulty;
      return matchesSearch && matchesRole && matchesDifficulty;
    });

    const uniqueRoles = ['All', ...new Set(mockQuestions.map(q => q.role))];
    const uniqueDifficulties = ['All', ...new Set(mockQuestions.map(q => q.difficulty))];

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-white">Interview Questions</h1>
        
        {/* Search and Filters */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8 flex flex-wrap gap-4 items-center">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <select
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              {uniqueRoles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>

            <select
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              {uniqueDifficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Questions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map(question => (
              <div key={question.id} className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-purple-600 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-3 text-white">{question.text}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full">{question.role}</span>
                  <span className="text-sm bg-green-600/30 text-green-300 px-3 py-1 rounded-full">{question.difficulty}</span>
                  {question.tags.map(tag => (
                    <span key={tag} className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Link href={`/dashboard/interview/${question.id}`}> {/* Example route for interview practice */}
                    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      <PlayCircle className="w-4 h-4" /> Practice
                    </button>
                  </Link>
                  <button className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-lg col-span-full text-center">No questions found matching your criteria.</p>
          )}
        </div>
      </div>
    );
  }
