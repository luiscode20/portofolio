import React from 'react'
import { motion } from 'framer-motion'
import skillsData from '../data/skills'


const Skills = () => {
return (
<section id="skills" className="py-20 bg-gray-50 dark:bg-transparent">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
<p className="mt-3 text-gray-600 dark:text-gray-300">Technologies and tools I use frequently.</p>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{skillsData.map((s, i) => (
<motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
<div className="flex justify-between mb-3">
<div className="font-semibold">{s.name}</div>
<div className="font-medium text-indigo-600">{s.level}%</div>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
<div style={{ width: `${s.level}%` }} className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
</div>
</motion.div>
))}
</div>
</div>
</section>
)
}


export default Skills