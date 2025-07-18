import React, { useState } from 'react';
import { Monitor, Shield } from 'lucide-react';

export default function Operations() {
  const [selectedTeam, setSelectedTeam] = useState<'red' | 'blue'>('red');

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-500"
      style={{
        background:
          selectedTeam === 'red'
            ? 'radial-gradient(circle at top left, rgba(239, 68, 68, 0.3), black)'
            : 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.3), black)',
      }}
    >
      {/* Header Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
          <Monitor className="w-12 h-12 text-red-500" strokeWidth={2} />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
        Live Cyber{' '}
        <span className={selectedTeam === 'blue' ? 'text-blue-500' : 'text-red-500'}>
          Operations
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-xl md:text-2xl text-center max-w-4xl mb-12 leading-relaxed">
        Engage in real-time red team vs blue team cyber warfare. Attack and defend in live
        environments with professional-grade scenarios.
      </p>

      {/* Toggle Team Selection */}
      <div className="flex bg-[#1f1f1f] rounded-full p-3 mb-10 shadow-inner shadow-black/40">
        {/* Red Team Button */}
        <button
          onClick={() => setSelectedTeam('red')}
          className={`flex items-center gap-3 px-8 py-5 rounded-full font-semibold text-base md:text-lg transition-all duration-300
            ${selectedTeam === 'red'
              ? 'bg-red-600 text-white shadow-xl shadow-red-500/20'
              : 'text-gray-300 hover:text-white'}`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          </svg>
          <div className="text-left">
            <div className="font-bold leading-tight">Red Team</div>
            <div className="text-sm opacity-80">Offensive Operations</div>
          </div>
        </button>

        {/* Blue Team Button */}
        <button
          onClick={() => setSelectedTeam('blue')}
          className={`flex items-center gap-3 px-8 py-5 rounded-full font-semibold text-base md:text-lg transition-all duration-300
            ${selectedTeam === 'blue'
              ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/20'
              : 'text-gray-300 hover:text-white'}`}
        >
          <Shield className="w-6 h-6" />
          <div className="text-left">
            <div className="font-bold leading-tight">Blue Team</div>
            <div className="text-sm opacity-80">Defensive Operations</div>
          </div>
        </button>
      </div>

      {/* Team Description */}
      <div className="text-gray-300 text-center text-xl max-w-3xl">
        {selectedTeam === 'red' ? (
          <p>
            Red Team simulates real-world cyber attacks to test and exploit vulnerabilities.
            Their goal is to challenge defenses and improve security.
          </p>
        ) : (
          <p>
            Blue Team defends systems against cyber threats by monitoring, detecting,
            and responding to attacks in real time.
          </p>
        )}
      </div>
    </div>
  );
}
