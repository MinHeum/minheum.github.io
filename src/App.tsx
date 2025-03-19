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
    <div className="h-screen w-screen bg-zinc-900 text-white flex flex-col md:flex-row overflow-hidden">
      {/* 왼쪽 - 로고 영역 */}
      <motion.div
        className="flex flex-col gap-1 items-center justify-center w-full h-1/3 md:h-full md:w-1/3 text-2xl md:text-4xl font-bold"
        initial={{ x: 0 }}
        animate={{ x: isLoaded ? '-20%' : '0%' }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/minheum.jpg"
          alt="MinHeum"
          className="w-24 h-24 md:w-32 md:h-32 rounded-4xl mr-4"
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
          className="relative group"
        >
          MinHeum
          <motion.img
            src="/qrcode.png"
            alt="QR Code"
            className="absolute top-0 left-full ml-4 w-24 h-24 md:w-32 md:h-32 hidden group-hover:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>
      </motion.div>

      {/* 가운데 - 내용 영역 */}
      <motion.div
        className={`h-2/3 md:h-full overflow-y-auto p-4 md:p-6 w-full md:w-2/3 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <Content />
      </motion.div>

      {/* 오른쪽 - 목차 (Symlink 스타일) */}
      <motion.div
        className={`h-auto md:h-full p-4 md:p-6 border-t md:border-t-0 md:border-l border-zinc-800 ${isLoaded ? 'w-full md:w-1/3' : 'w-0'} bg-zinc-950`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
          Index
        </h2>

        <ul className="space-y-1 md:space-y-2">
          <motion.li
            className="hover:text-zinc-400 cursor-pointer text-sm md:text-base"
            onClick={() => handleSymLinkClick('about')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            📜 About
          </motion.li>
          <motion.li
            className="hover:text-zinc-400 cursor-pointer text-sm md:text-base"
            onClick={() => handleSymLinkClick('projects')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            💻 Projects
          </motion.li>
          <motion.li
            className="hover:text-zinc-400 cursor-pointer text-sm md:text-base"
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
