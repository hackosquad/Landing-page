import React, { useState } from 'react';
import { Monitor, Shield, Plus, RefreshCw } from 'lucide-react';

export default function Operations() {
  const [selectedTeam, setSelectedTeam] = useState<'red' | 'blue'>('red');

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-black"
    >
      {/* Header Icon */}
      <div className="mb-8">
        <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center">
          <Monitor className="w-10 h-10 text-red-500" strokeWidth={2} />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-white mb-4 text-center">
        Live Cyber <span className={selectedTeam === 'blue' ? 'text-blue-500' : 'text-red-500'}>Operations</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-xl text-center max-w-4xl mb-12 leading-relaxed">
        Engage in real-time red team vs blue team cyber warfare. Attack and defend in 
        live environments with professional-grade scenarios.
      </p>

      {/* Team Selection */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSelectedTeam('red')}
          className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
            selectedTeam === 'red'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
          }`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          </svg>
          <div className="text-left">
            <div className="font-bold">Red Team</div>
            <div className="text-sm opacity-80">Offensive Operations</div>
          </div>
        </button>

        <button
          onClick={() => setSelectedTeam('blue')}
          className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
            selectedTeam === 'blue'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
          }`}
        >
          <Shield className="w-6 h-6" />
          <div className="text-left">
            <div className="font-bold">Blue Team</div>
            <div className="text-sm opacity-80">Defensive Operations</div>
          </div>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
          <Plus className="w-6 h-6" />
          Create Operation
        </button>

        <button className="flex items-center gap-3 px-8 py-4 bg-gray-800 text-red-500 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-colors border border-gray-700">
          <RefreshCw className="w-6 h-6" />
          Refresh
        </button>
      </div>
    </div>
  );
}