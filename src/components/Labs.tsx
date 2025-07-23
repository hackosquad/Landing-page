import { motion } from 'framer-motion';
import { Shield, Sword, Cloud, Network, Zap } from 'lucide-react';

// Import images from assets folder
import lab1 from '../assets/lab1.png';
import lab2 from '../assets/lab2.png';
import lab3 from '../assets/lab3.png';
import lab4 from '../assets/lab4.png';

export default function Labs() {
  const labCategories = [
    {
      id: 1,
      title: 'Penetration Testing Labs',
      category: 'Red Team',
      icon: <Sword className="w-8 h-8" />,
      description:
        'Master offensive security through realistic attack scenarios',
      image: lab1,
      skills: [
        'Web Application Security',
        'Network Penetration',
        'Social Engineering',
        'Exploit Development',
      ],
      color: 'red',
      scenarios: [
        'E-commerce Platform Hack',
        'Corporate Network Breach',
        'Mobile App Exploitation',
      ],
    },
    {
      id: 2,
      title: 'Incident Response Labs',
      category: 'Blue Team',
      icon: <Shield className="w-8 h-8" />,
      description:
        'Develop critical defense skills through real incident simulations',
      image: lab2,
      skills: [
        'Threat Hunting',
        'Forensic Analysis',
        'Malware Analysis',
        'SIEM Operations',
      ],
      color: 'blue',
      scenarios: [
        'Ransomware Investigation',
        'APT Detection',
        'Data Breach Response',
      ],
    },
    {
      id: 3,
      title: 'Cloud Security Labs',
      category: 'Multi-Platform',
      icon: <Cloud className="w-8 h-8" />,
      description:
        'Navigate modern cloud security challenges across major platforms',
      image: lab3,
      skills: [
        'AWS Security',
        'Azure Security',
        'Container Security',
        'Serverless Security',
      ],
      color: 'green',
      scenarios: [
        'Cloud Misconfigurations',
        'IAM Exploitation',
        'Container Escapes',
      ],
    },
    {
      id: 4,
      title: 'Network Security Labs',
      category: 'Infrastructure',
      icon: <Network className="w-8 h-8" />,
      description:
        'Deep dive into network protocols and infrastructure security',
      image: lab4,
      skills: [
        'Network Analysis',
        'Protocol Security',
        'Firewall Bypass',
        'Traffic Analysis',
      ],
      color: 'purple',
      scenarios: [
        'Network Reconnaissance',
        'VLAN Hopping',
        'Protocol Attacks',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">HANDS-ON EXPERIENCE</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">
              Immersive
            </h1>
            <h1 className="text-6xl md:text-8xl font-black mb-8 text-white -mt-4">
              Labs
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto mb-16 leading-relaxed">
              Step into <span className="text-green-400 font-semibold">hyper-realistic cyber environments</span> where theory transforms into mastery. 
              Our labs replicate the exact conditions and challenges faced by elite security teams worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lab Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {labCategories.map((lab, index) => (
              <motion.div
                key={lab.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image positioned at top center */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-full object-cover object-[center_8%] group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${
                        lab.color === 'red'
                          ? 'bg-red-500/20 text-red-400 border-red-500/30'
                          : lab.color === 'blue'
                          ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                          : lab.color === 'green'
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                      }`}
                    >
                      {lab.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <div
                      className={`text-4xl opacity-40 ${
                        lab.color === 'red'
                          ? 'text-red-500'
                          : lab.color === 'blue'
                          ? 'text-blue-500'
                          : lab.color === 'green'
                          ? 'text-green-500'
                          : 'text-purple-500'
                      }`}
                    >
                      {lab.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg ${
                        lab.color === 'red'
                          ? 'bg-red-500/10 text-red-400'
                          : lab.color === 'blue'
                          ? 'bg-blue-500/10 text-blue-400'
                          : lab.color === 'green'
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-purple-500/10 text-purple-400'
                      }`}
                    >
                      {lab.icon}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">
                      {lab.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {lab.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-300">
                      Core Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {lab.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-gray-300">
                      Example Scenarios
                    </h4>
                    <div className="space-y-1">
                      {lab.scenarios.map((scenario) => (
                        <div key={scenario} className="flex items-center gap-2">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              lab.color === 'red'
                                ? 'bg-red-500'
                                : lab.color === 'blue'
                                ? 'bg-blue-500'
                                : lab.color === 'green'
                                ? 'bg-green-500'
                                : 'bg-purple-500'
                            }`}
                          ></div>
                          <span className="text-gray-400 text-sm">{scenario}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}