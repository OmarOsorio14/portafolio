import React from 'react'
import { logos } from '../assets/logos';
import TecnologyLogo from '../components/TecnologyLogo'
import Title from './Title';

export default function Tecnologies() {
	return (
		<div>
			<Title title="Tecnologias"/>
			<div className="flex flex-wrap">
				{logos.map((logo,index) => <TecnologyLogo key={index} source={logo.source} name={logo.name} />)}
			</div>
		</div>
	)
}
