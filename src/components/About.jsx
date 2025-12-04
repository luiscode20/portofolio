import React from 'react'
import { motion } from 'framer-motion'


const About = () => {
return (
<section id="about" className="py-20 bg-white dark:bg-transparent">
<div className="max-w-6xl mx-auto px-6">
<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
<p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">I have over 5 years of experience building websites and interfaces. I focus on accessible, performant, and delightful user experiences.</p>
</motion.div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
<h3 className="text-2xl font-semibold mb-4">My Journey</h3>
<p className="text-gray-700 dark:text-gray-200 leading-relaxed">Started as a visual designer and transitioned into frontend development. I enjoy building interfaces that are both aesthetically pleasing and easy to use.</p>
</motion.div>


<motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-indigo-50 dark:bg-indigo-900 rounded-lg">React</div>
<div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">UI/UX</div>
<div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">Performance</div>
<div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">Accessibility</div>
</div>
</motion.div>
</div>
</div>
</section>
)
}


export default About