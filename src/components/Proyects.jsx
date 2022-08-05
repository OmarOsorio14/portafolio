import React from 'react'
import Card from './Card'
import Title from './Title'
import { proyects } from '../assets/proyects'

export default function Proyects({reference}) {
	return (
		<div ref={reference} className="pt-14">
			<Title title="Proyectos" />
			<div className="flex flex-wrap my-8">
				{proyects.map((proyect, index) => <Card key={index} proyect={proyect} />)}
			</div>
		</div>
	)
}
