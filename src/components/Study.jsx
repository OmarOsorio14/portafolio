import React from 'react'

export default function Study({date,title,academy,description}) {
	return (
		<>
		<li className="text-xl font-bold text-gray-600 dark:text-slate-100">{date}</li>
				<p className="text-lg font-bold text-gray-600 dark:text-slate-100">{title}</p>
				<p className='font-bold text-gray-600 dark:text-slate-100'>{academy}</p>
				<p className="text-gray-900 mb-4 dark:text-slate-100">{description}</p>
		</>
	)
}
