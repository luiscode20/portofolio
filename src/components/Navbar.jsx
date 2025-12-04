import React, { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'


const Navbar = () => {
const [open, setOpen] = useState(false)
const { dark, setDark } = useTheme()


return (
<header className="fixed w-full top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 border-b border-gray-200 dark:border-gray-800">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Luis_Portofolio</div>
</div>


<nav className="hidden md:flex gap-6 items-center text-gray-700 dark:text-gray-200">
{['home', 'about', 'skills', 'projects', 'services', 'testimonials', 'contact'].map(s => (
<a key={s} href={`#${s}`} className="capitalize hover:text-indigo-600 transition-colors">
{s}
</a>
))}
</nav>


<div className="flex items-center gap-3">
<button onClick={() => setDark(!dark)} className="p-2 rounded-md">
{dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
</button>


<button onClick={() => setOpen(!open)} className="md:hidden p-2">
{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>
</div>
</div>


{open && (
<motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
<div className="px-6 py-4 flex flex-col gap-3">
{['home', 'about', 'skills', 'projects', 'services', 'testimonials', 'contact'].map(s => (
<a key={s} href={`#${s}`} onClick={() => setOpen(false)} className="capitalize text-lg">
{s}
</a>
))}
</div>
</motion.div>
)}
</header>
)
}


export default Navbar