import React from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import { ExternalLink } from 'lucide-react'


const Projects = () => {
return (
<section id="projects" className="py-20 bg-white dark:bg-transparent">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
<p className="mt-3 text-gray-600 dark:text-gray-300">A selection of projects I have worked on.</p>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{projects.map((p, i) => (
<motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
<img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">{p.title}</h3>
<p className="text-gray-600 dark:text-gray-300 mb-4">{p.description}</p>
<div className="flex flex-wrap gap-2 mb-4">
{p.tags.map((t, idx) => (
<span key={idx} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">{t}</span>
))}
</div>
<a href={p.link} className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-300">View <ExternalLink className="w-4 h-4" /></a>
</div>
</motion.div>
))}
</div>
</div>
</section>
)
}


export default Projects