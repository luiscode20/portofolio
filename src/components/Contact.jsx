import React from 'react'
import { motion } from 'framer-motion'


const Contact = () => {
return (
<section id="contact" className="py-20 bg-gray-50 dark:bg-transparent">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
<p className="mt-3 text-gray-600 dark:text-gray-300">Have a project? Let's talk.</p>
</div>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
<h3 className="text-xl font-semibold mb-4">Contact Info</h3>
<p className="text-gray-700 dark:text-gray-200 mb-4">luismanoppo1@gmail.com</p>
<p className="text-gray-700 dark:text-gray-200">github.com/yourname</p>
</motion.div>


<motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
<div className="mb-4">
<label className="block text-sm mb-2">Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700" placeholder="Your name" />
</div>
<div className="mb-4">
<label className="block text-sm mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700" placeholder="you@example.com" />
</div>
<div className="mb-4">
<label className="block text-sm mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700" rows="4" placeholder="Tell me about your project..."></textarea>
</div>
<button className="w-full py-3 bg-indigo-600 text-white rounded-lg">Send Message</button>
</motion.form>
</div>
</div>
</section>
)
}


export default Contact