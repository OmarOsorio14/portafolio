import React from 'react'

export default function TecnologyLogo({source, name}) {
	return (
		<img src={source} class="w-14 h-14 m-2 mt-4 transition ease-in-out hover:-translate-y-2 hover:scale-120 duration-300" alt={name} title={name} />
	)
}
