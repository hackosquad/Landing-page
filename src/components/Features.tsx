import { motion } from 'framer-motion';
import { Shield, Sword, Zap, Target, Eye, Activity } from 'lucide-react';
import redteam from "../assets/redteam.png";
import blueteam from "../assets/blueteam.png";
import purpleteam from "../assets/purpleteam (1).png";



const Features = () => {
  const teamFeatures = [
    {
      id: 1,
      title: "Red Team",
      subtitle: "Offensive Operations",
      icon: <Sword className="w-6 h-6" />,
      image: redteam,
      color: "red",
      description: "Master ethical hacking through advanced penetration testing and exploit development.",
      skills: ["Penetration Testing", "Social Engineering", "Exploit Development"],
      gradient: "from-red-600 to-rose-600"
    },
    {
      id: 2,
      title: "Blue Team",
      subtitle: "Defensive Operations", 
      icon: <Shield className="w-6 h-6" />,
      image: blueteam,
      color: "blue",
      description: "Develop critical defense skills through incident response and threat hunting.",
      skills: ["Threat Detection", "Incident Response", "Security Monitoring"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Purple Team",
      subtitle: "Unified Strategy",
      icon: <Zap className="w-6 h-6" />,
      image: purpleteam,
      color: "purple",
      description: "Bridge offensive and defensive capabilities through collaborative exercises.",
      skills: ["Red-Blue Collaboration", "Strategic Planning", "Process Improvement"],
      gradient: "from-purple-600 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-purple-500/3 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content - Single Screen */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm font-medium">ELITE CYBER TRAINING</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Cyber Warfare
              </span>
              <span className="block text-white">Excellence</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform theory into <span className="text-red-400 font-semibold">battlefield-ready expertise</span> through 
              immersive simulations that replicate real-world cyber operations.
            </p>
          </motion.div>
        </div>

        {/* Team Showcase Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {teamFeatures.map((team, index) => (
            <motion.div
              key={team.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${team.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500 overflow-hidden">
                {/* Compact Image Section */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={team.image}
                    alt={team.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Team badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border ${
                      team.color === 'red' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                      team.color === 'blue' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                      'bg-purple-500/20 text-purple-300 border-purple-500/30'
                    } font-medium text-sm`}>
                      {team.icon}
                      <span>{team.title}</span>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-lg">
                      <div className={`w-2 h-2 rounded-full ${
                        team.color === 'red' ? 'bg-red-400' :
                        team.color === 'blue' ? 'bg-blue-400' :
                        'bg-purple-400'
                      } animate-pulse`}></div>
                      <span className="text-white text-sm font-medium">Available</span>
                    </div>
                  </div>
                </div>

                {/* Compact Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{team.title}</h3>
                    <p className="text-gray-400 text-sm">{team.subtitle}</p>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {team.description}
                  </p>

                  {/* Compact Skills */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                        Key Focus Areas
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {team.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            team.color === 'red' ? 'bg-red-500' :
                            team.color === 'blue' ? 'bg-blue-500' :
                            'bg-purple-500'
                          }`}></div>
                          <span className="text-gray-300 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Training Ready Indicator */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-500 text-sm">Training Ready</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className={`w-1.5 h-6 rounded-full ${
                          team.color === 'red' ? 'bg-red-500' :
                          team.color === 'blue' ? 'bg-blue-500' :
                          'bg-purple-500'
                        } animate-pulse`} style={{animationDelay: `${i * 0.2}s`}}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Features */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Real-Time</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Simulations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Expert</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Guidance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">Hands-On</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default Features;