import React from 'react'
import { motion } from 'framer-motion'
import servicesData from '../data/services'


const Services = () => {
return (
<section id="services" className="py-20 bg-gray-50 dark:bg-transparent">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold">Services</h2>
<p className="mt-3 text-gray-600 dark:text-gray-300">What I can help you with.</p>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{servicesData.map((s, i) => (
<motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
<div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
{s.icon}
</div>
<h3 className="font-semibold mb-2">{s.title}</h3>
<p className="text-gray-600 dark:text-gray-300">{s.description}</p>
</motion.div>
))}
</div>
</div>
</section>
)
}


export default Services