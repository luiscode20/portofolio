import React from 'react'
import { motion } from 'framer-motion'
import testimonials from '../data/testimonials'
import { Star } from 'lucide-react'


const Testimonials = () => {
return (
<section id="testimonials" className="py-20 bg-white dark:bg-transparent">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
<p className="mt-3 text-gray-600 dark:text-gray-300">What clients say about working with me.</p>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{testimonials.map((t, i) => (
<motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
<div className="flex items-center gap-3 mb-4">
<img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
<div>
<div className="font-semibold">{t.name}</div>
<div className="text-sm text-gray-600 dark:text-gray-300">{t.role}</div>
</div>
</div>
<p className="text-gray-700 dark:text-gray-200 italic">"{t.content}"</p>
<div className="flex gap-1 mt-4 text-yellow-400">
{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4" />))}
</div>
</motion.div>
))}
</div>
</div>
</section>
)
}


export default Testimonials