import React from 'react'
import { motion } from 'framer-motion';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";



const features = [
  {
    icon: "🔥",
    title: "Live Cyber Ranges",
    image: img2 , // replace with your local asset
    description:
      "Dive into simulated breach environments built to mirror real-world attacks. Analyze logs, exploit systems, and test your skills in dynamic red vs blue team scenarios with real-time feedback.",
  },
  {
    icon: "🧪",
    title: "Guided Lab Missions",
    image: img3, // replace with your local asset
    description:
      "Progress through hands-on labs designed for beginner to advanced learners. Learn exploitation, enumeration, and privilege escalation with built-in hints and live targets.",
  },
  {
    icon: "🎯",
    title: "Skill Path Progression",
    image: img4, // replace with your local asset
    description:
      "Level up your hacker profile by completing challenges, earning badges, and climbing the ranks. Skill-based unlocking ensures you're always challenged — and always growing.",
  },
];

const Features = () => {
  return (
    <div>
     {/* Decorative separation line at the top */}
     <section className="min-h-screen text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
      
      {/* Left Side */}
      <div className="max-w-xl space-y-6">
        <div className="inline-block px-4 py-1 text-sm font-medium bg-red-900 text-white rounded-full shadow-md">
          Level Up Your Cyber Skills
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="block">Practical</span>
          <span className="block text-red-600">cyber defense</span>
          <span className="block">training</span>
        </h1>

        <p className="text-gray-300 text-lg">
          We deliver an interactive platform where concepts come to life through real-world scenarios.
          Gain critical hands-on exposure to strengthen your cybersecurity instincts.
        </p>

        <p className="text-red-600 font-medium">
          Our belief: <span className="text-white italic">practice fuels mastery.</span>
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-md shadow-lg"
        >
          Begin Your Journey
        </motion.button>
      </div>

      {/* Right Side (optional image/animation can be placed here) */}
      <div className="hidden md:block mt-10 md:mt-0">
        <motion.img
          src={img1}
          alt="Cyber Training Illustration"
          className="max-w-2xl rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
      
    </section>
    <section className="py-20 px-6 md:px-24 text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          What Makes <span className="text-red-600">HackoSquad</span> Stand Out?
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Unique features crafted to push your cybersecurity skills beyond limits.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-red-900/10 border border-red-700 rounded-xl overflow-hidden shadow-lg hover:shadow-red-600/40 transition-all"
          >
            <motion.img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />

            <div className="p-6 space-y-4">
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-gray-300 text-md">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};
  

export default Features