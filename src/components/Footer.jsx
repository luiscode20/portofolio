import React from 'react'


const Footer = () => {
return (
<footer className="bg-gray-900 text-gray-100 py-12 mt-12">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="text-lg font-semibold mb-2">Luis Manoppo</div>
<div className="text-sm text-gray-400">© {new Date().getFullYear()} luis. All rights reserved.</div>
</div>
</footer>
)
}


export default Footer