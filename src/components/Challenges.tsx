import { motion } from 'framer-motion';
import { Trophy, Target, Zap, Users, Flag, Shield, Sword, Globe } from 'lucide-react';

// Import images from assets folder
import lab5 from '../assets/lab5.png';
import lab6 from '../assets/lab6.png';
import challenges1 from '../assets/challenges.png';
import challenges2 from '../assets/challengs1.png';

export default function Challenges() {
  const challengeFormats = [
    {
      id: 1,
      title: "Capture The Flag (CTF)",
      type: "Individual & Team",
      icon: <Flag className="w-8 h-8" />,
      description: "Classic cybersecurity competitions with diverse problem categories",
      image: challenges1,
      categories: ["Web Security", "Cryptography", "Forensics", "Reverse Engineering", "Binary Exploitation"],
      format: "Multi-category challenges with point-based scoring",
      color: "purple"
    },
    {
      id: 2,
      title: "Red vs Blue Tournaments",
      type: "Team Battle",
      icon: <Target className="w-8 h-8" />,
      description: "Live attack and defense scenarios with real-time competition",
      image: challenges2,
      categories: ["Network Defense", "Incident Response", "Threat Hunting", "Attack Simulation"],
      format: "Real-time attack and defense with live scoring",
      color: "red"
    },
    {
      id: 3,
      title: "Bug Bounty Simulations",
      type: "Individual Hunt",
      icon: <Zap className="w-8 h-8" />,
      description: "Hunt vulnerabilities in realistic application environments",
      image: lab5,
      categories: ["Web Applications", "Mobile Apps", "API Security", "Cloud Infrastructure"],
      format: "Vulnerability discovery with severity-based rewards",
      color: "green"
    },
    {
      id: 4,
      title: "Global Championships",
      type: "Elite Competition",
      icon: <Globe className="w-8 h-8" />,
      description: "International tournaments featuring the world's best cybersecurity talent",
      image: lab6,
      categories: ["Advanced Persistent Threats", "Zero-Day Research", "Nation-State Simulation"],
      format: "Multi-stage elimination with live broadcasts",
      color: "gold"
    }
  ];

  const competitiveFeatures = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Dynamic Scoring",
      description: "Advanced algorithms that reward skill and creativity"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Leaderboards",
      description: "Compete against elite hackers worldwide"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Realistic Scenarios",
      description: "Challenges based on actual security incidents"
    },
    {
      icon: <Sword className="w-6 h-6" />,
      title: "Live Competitions",
      description: "Real-time battles with instant feedback"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Elite <span className="text-purple-500">Challenges</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12">
              Compete in world-class cybersecurity competitions that push the boundaries of 
              offensive and defensive capabilities. Where legends are born.
            </p>
          </motion.div>

          {/* Competitive Features */}
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {competitiveFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <div className="text-purple-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge Formats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Competition Formats</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Diverse competitive formats designed to test every aspect of cybersecurity expertise
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {challengeFormats.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={challenge.image} 
                    alt={challenge.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      challenge.color === 'purple' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                      challenge.color === 'red' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                      challenge.color === 'green' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {challenge.type}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <div className={`text-4xl opacity-30 ${
                      challenge.color === 'purple' ? 'text-purple-500' :
                      challenge.color === 'red' ? 'text-red-500' :
                      challenge.color === 'green' ? 'text-green-500' :
                      'text-yellow-500'
                    }`}>
                      {challenge.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${
                      challenge.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                      challenge.color === 'red' ? 'bg-red-500/10 text-red-400' :
                      challenge.color === 'green' ? 'bg-green-500/10 text-green-400' :
                      'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {challenge.icon}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                      {challenge.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {challenge.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-300">Competition Categories</h4>
                    <div className="flex flex-wrap gap-1">
                      {challenge.categories.map((category) => (
                        <span key={category} className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                    <h4 className="text-sm font-semibold mb-1 text-white">Format</h4>
                    <p className="text-gray-400 text-sm">{challenge.format}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Philosophy */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Beyond Traditional CTFs
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Our challenges don't just test knowledge—they simulate the pressure, complexity, 
              and unpredictability of real-world cyber warfare. Every competition is designed 
              to push participants beyond their comfort zone and into elite-level thinking.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
                <h3 className="font-bold text-lg mb-2 text-purple-400">Real Stakes</h3>
                <p className="text-gray-400">Competitions mirror actual cyber incidents with realistic consequences and time pressure.</p>
              </div>
              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
                <h3 className="font-bold text-lg mb-2 text-purple-400">Adaptive Difficulty</h3>
                <p className="text-gray-400">Challenges evolve based on participant performance, ensuring optimal challenge levels.</p>
              </div>
              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
                <h3 className="font-bold text-lg mb-2 text-purple-400">Industry Recognition</h3>
                <p className="text-gray-400">Top performers gain recognition from leading cybersecurity organizations worldwide.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
