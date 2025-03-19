import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Content from './components/Content';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  const handleSymLinkClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-screen bg-zinc-900 text-white flex overflow-hidden">
      {/* 왼쪽 - 로고 영역 */}
      <motion.div
        className="flex flex-col gap-1 items-center justify-center w-full h-full text-4xl font-bold"
        initial={{ x: 0 }}
        animate={{ x: isLoaded ? '-20%' : '0%' }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/minheum.jpg"
          alt="MinHeum"
          className="w-32 h-32 rounded-4xl mr-4"
          whileHover={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.15 }}
        />
        <motion.span
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate="visible"
        >
          MinHeum
        </motion.span>
      </motion.div>

      {/* 가운데 - 내용 영역 */}
      <motion.div
        className={`h-full overflow-y-auto p-6 w-12/6 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <Content />
      </motion.div>

      {/* 오른쪽 - 목차 (Symlink 스타일) */}
      <motion.div
        className={`h-full p-6 border-l border-zinc-800 ${isLoaded ? 'w-2/6' : 'w-0'} bg-zinc-950`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-lg font-semibold mb-4">Index</h2>

        <ul className="space-y-2">
          <motion.li
            className="hover:text-zinc-400 cursor-pointer"
            onClick={() => handleSymLinkClick('about')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            📜 About
          </motion.li>
          <motion.li
            className="hover:text-zinc-400 cursor-pointer"
            onClick={() => handleSymLinkClick('projects')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            💻 Projects
          </motion.li>
          <motion.li
            className="hover:text-zinc-400 cursor-pointer"
            onClick={() => handleSymLinkClick('contact')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            📩 Contact
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
}
