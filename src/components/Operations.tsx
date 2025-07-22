import { useState } from 'react';
import { Monitor, Shield, Sword, Users, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Operations() {
  const [selectedTeam, setSelectedTeam] = useState<'red' | 'blue'>('red');

  const redTeamFeatures = [
    { icon: <Sword className="w-5 h-5" />, text: 'Penetration Testing' },
    { icon: <Target className="w-5 h-5" />, text: 'Vulnerability Assessment' },
    { icon: <Zap className="w-5 h-5" />, text: 'Social Engineering' },
    { icon: <Users className="w-5 h-5" />, text: 'Advanced Persistent Threats' },
  ];

  const blueTeamFeatures = [
    { icon: <Shield className="w-5 h-5" />, text: 'Threat Detection' },
    { icon: <Monitor className="w-5 h-5" />, text: 'Security Monitoring' },
    { icon: <Target className="w-5 h-5" />, text: 'Incident Response' },
    { icon: <Users className="w-5 h-5" />, text: 'Forensic Analysis' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 transition-colors duration-500 relative overflow-hidden"
        style={{
          background:
            selectedTeam === 'red'
              ? 'radial-gradient(circle at top left, rgba(239, 68, 68, 0.3), black)'
              : 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.3), black)',
        }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div
            className={`absolute top-0 right-0 w-96 h-96 ${
              selectedTeam === 'red' ? 'bg-red-500/20' : 'bg-blue-500/20'
            } rounded-full blur-3xl transition-colors duration-500`}
          ></div>
          <div
            className={`absolute bottom-0 left-0 w-96 h-96 ${
              selectedTeam === 'red' ? 'bg-red-600/20' : 'bg-blue-600/20'
            } rounded-full blur-3xl transition-colors duration-500`}
          ></div>
        </div>

        {/* Header Icon */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center border-2 border-gray-700 shadow-xl">
            <Monitor
              className={`w-12 h-12 ${
                selectedTeam === 'red' ? 'text-red-500' : 'text-blue-500'
              } transition-colors duration-300`}
              strokeWidth={2}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Live Cyber{' '}
          <span
            className={`${
              selectedTeam === 'blue' ? 'text-blue-500' : 'text-red-500'
            } transition-colors duration-300`}
          >
            Operations
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 text-lg sm:text-xl md:text-2xl text-center max-w-4xl mb-12 leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Engage in real-time red team vs blue team cyber warfare. Attack and defend in live
          environments with professional-grade scenarios.
        </motion.p>

        {/* Toggle Team Selection */}
        <motion.div
          className="flex bg-[#1f1f1f] rounded-full p-3 mb-10 shadow-2xl border border-gray-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={() => setSelectedTeam('red')}
            className={`flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300
              ${
                selectedTeam === 'red'
                  ? 'bg-red-600 text-white shadow-xl shadow-red-500/30 scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
          >
            <Sword className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="text-left">
              <div className="font-bold leading-tight">Red Team</div>
              <div className="text-xs opacity-80">Offensive Operations</div>
            </div>
          </button>

          <button
            onClick={() => setSelectedTeam('blue')}
            className={`flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300
              ${
                selectedTeam === 'blue'
                  ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/30 scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
          >
            <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="text-left">
              <div className="font-bold leading-tight">Blue Team</div>
              <div className="text-xs opacity-80">Defensive Operations</div>
            </div>
          </button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="max-w-5xl w-full"
          key={selectedTeam}
          initial={{ opacity: 0, x: selectedTeam === 'red' ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {(selectedTeam === 'red' ? redTeamFeatures : blueTeamFeatures).map((feature, index) => (
              <motion.div
                key={feature.text}
                className={`bg-black/50 backdrop-blur-sm border ${
                  selectedTeam === 'red' ? 'border-red-500/30' : 'border-blue-500/30'
                } rounded-lg p-4 text-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className={`${
                    selectedTeam === 'red' ? 'text-red-500' : 'text-blue-500'
                  } mb-2 flex justify-center`}
                >
                  {feature.icon}
                </div>
                <p className="text-white text-sm font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Team Description */}
          <div className="text-gray-300 text-center text-lg sm:text-xl max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
            {selectedTeam === 'red' ? (
              <div>
                <h3 className="text-red-500 font-bold text-xl mb-4">Red Team Operations</h3>
                <p className="mb-4">
                  Red Team simulates real-world cyber attacks to test and exploit vulnerabilities.
                  Their goal is to challenge defenses and improve security posture through ethical hacking.
                </p>
                <p className="text-red-400 text-sm">
                  Master the art of penetration testing, social engineering, and advanced attack vectors.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-blue-500 font-bold text-xl mb-4">Blue Team Operations</h3>
                <p className="mb-4">
                  Blue Team defends systems against cyber threats by monitoring, detecting,
                  and responding to attacks in real time through advanced security operations.
                </p>
                <p className="text-blue-400 text-sm">
                  Develop expertise in threat hunting, incident response, and security monitoring.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
