import React from 'react'
import Card from './Card'
import Title from './Title'
import { proyects } from '../assets/proyects'

export default function Proyects() {
	return (
		<>
			<Title title="Proyectos" />
			<div className="flex flex-wrap my-8">
				{proyects.map((proyect, index) => <Card key={index} proyect={proyect} />)}
			</div>
		</>
	)
}
