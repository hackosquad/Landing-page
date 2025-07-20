import WebSecurityImg from '../assets/websecrurity.png';
import XSSImg from '../assets/cross-site-scripting.png';
import BufferOverflowImg from '../assets/buffer overflow.png';
import RSAImg from '../assets/rsa.png';

const labs = [
  {
    category: 'WEB SECURITY',
    title: 'SQL INJECTION BASICS',
    difficulty: 'EASY',
    color: 'green',
    description:
      'Learn the fundamentals of SQL injection attacks by exploiting a vulnerable login form. Master basic techniques to bypass authentication.',
    features: [
      'Bypass login authentication',
      'Extract user credentials',
      'Access admin panel',
    ],
    time: '1hr',
    points: 50,
    bonus: '+50 POINTS',
    vip: false,
    img: WebSecurityImg,
  },
  {
    category: 'WEB SECURITY',
    title: 'CROSS-SITE SCRIPTING',
    difficulty: 'MEDIUM',
    color: 'yellow',
    description:
      'Execute sophisticated XSS attacks to steal cookies, hijack sessions, and demonstrate the impact of client-side vulnerabilities.',
    features: [
      'Execute stored XSS payload',
      'Steal admin session cookies',
      'Perform DOM manipulation',
    ],
    time: '2hrs',
    points: 100,
    bonus: '+100 POINTS',
    vip: true,
    img: XSSImg,
  },
  {
    category: 'BINARY EXPLOITATION',
    title: 'BUFFER OVERFLOW',
    difficulty: 'HARD',
    color: 'red',
    description:
      'Exploit stack-based buffer overflow vulnerability to gain remote code execution on a Linux system with modern protections.',
    features: [
      'Bypass ASLR protection',
      'Chain ROP gadgets',
      'Achieve code execution',
    ],
    time: '4hrs',
    points: 250,
    bonus: '+250 POINTS',
    vip: true,
    img: BufferOverflowImg,
  },
  {
    category: 'CRYPTOGRAPHY',
    title: 'RSA FACTORIZATION',
    difficulty: 'EXPERT',
    color: 'purple',
    description:
      'Break RSA encryption by exploiting weak prime generation. Use advanced mathematical techniques to factor large composite numbers.',
    features: [
      'Factor 2048-bit RSA key',
      'Decrypt secret message',
      'Extract private key',
    ],
    time: '8hrs',
    points: 500,
    bonus: '+500 POINTS',
    vip: true,
    img: RSAImg,
  },
];

const colorMap: Record<string, string> = {
  green: 'from-green-500/40 to-green-900/60 border-green-500',
  yellow: 'from-yellow-500/40 to-yellow-900/60 border-yellow-400',
  red: 'from-red-500/40 to-red-900/60 border-red-500',
  purple: 'from-purple-500/40 to-purple-900/60 border-purple-500',
};

export default function Labs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 bg-black">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg">
       Explore Labs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4">
        {labs.map((lab) => (
          <div
            key={lab.title}
            className={`rounded-3xl border-2 p-6 flex flex-col justify-between shadow-xl bg-gradient-to-br ${colorMap[lab.color]} relative`}
          >
            {/* Category & Icon */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-black/80 rounded-xl flex items-center justify-center overflow-hidden">
                <img src={lab.img} alt="Lab" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-gray-300 text-lg font-semibold tracking-wide">
                {lab.category}
              </span>
            </div>
            {/* Title */}
            <h3 className="text-2xl font-extrabold mb-2 text-white tracking-wide">
              {lab.title}
            </h3>
            {/* Difficulty */}
            <span
              className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-4 ${
                lab.color === 'green'
                  ? 'bg-green-700 text-green-200'
                  : lab.color === 'yellow'
                  ? 'bg-yellow-700 text-yellow-200'
                  : lab.color === 'red'
                  ? 'bg-red-700 text-red-200'
                  : 'bg-purple-700 text-purple-200'
              }`}
            >
              {lab.difficulty}
            </span>
            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 min-h-[60px]">{lab.description}</p>
            {/* Features */}
            <ul className="mb-6 space-y-1">
              {lab.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-100 text-sm">
                  <span className="text-lg">✔️</span> {feature}
                </li>
              ))}
            </ul>
            {/* Time & Points */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white">{lab.time}</span>
                <span className="text-xs text-gray-400">EST. TIME</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white">{lab.points}</span>
                <span className="text-xs text-gray-400">POINTS</span>
              </div>
            </div>
            {/* VIP/Bonus */}
            <div className="flex justify-between items-center mt-2">
              {lab.vip && (
                <span className="text-xs font-bold bg-yellow-900/80 text-yellow-300 px-3 py-1 rounded-full">
                  VIP{lab.difficulty === 'HARD' || lab.difficulty === 'EXPERT' ? '+' : ''}
                </span>
              )}
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ml-auto ${
                  lab.color === 'green'
                    ? 'bg-green-900/80 text-green-300'
                    : lab.color === 'yellow'
                    ? 'bg-yellow-900/80 text-yellow-300'
                    : lab.color === 'red'
                    ? 'bg-red-900/80 text-red-300'
                    : 'bg-purple-900/80 text-purple-300'
                }`}
              >
                {lab.bonus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 