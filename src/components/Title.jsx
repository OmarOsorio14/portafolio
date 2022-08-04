import React from 'react'

export default function Title({title}) {
	return (
		<h2 className="text-2xl sm:text-5xl dark:text-slate-100 font-bold border-b-2 border-red-500 pb-3 w-fit">{title}</h2>
	)
}
