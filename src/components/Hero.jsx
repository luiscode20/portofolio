import React from 'react'
import { motion } from 'framer-motion'


const Hero = () => {
return (
<section id="home" className="min-h-screen flex items-center pt-24">
<div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
<h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-indigo-600">Luis</span></h1>
<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">A frontend developer & UI/UX designer creating beautiful, accessible, and high-performance web experiences.</p>
<div className="flex gap-4">
<a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-full">View Work</a>
<a href="#contact" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full">Contact</a>
</div>
</motion.div>


<motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
<div className="w-72 h-72 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center shadow-2xl">
<div className="w-64 h-64 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
<div className="text-4xl font-bold text-indigo-600">LM</div>
</div>
</div>
</motion.div>
</div>
</section>
)
}


export default Hero