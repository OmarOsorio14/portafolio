import React from 'react'
import Study from './Study'
import Title from './Title'

export default function Studies({reference}) {
	return (
		<div ref={reference}>
			<Title title="Formacion academica" />
			<ul className="list-disc ml-10 mt-4">
				<Study date="ABRIL 2022 - AGOSTO -2022" title="full stack Developer MERN & Mobile Apps" academy="Mindhub LA" description="+700 Horas full-time utilizando metodologías ágiles (SCRUM),
				simulando un ambiente de trabajo real utilizando tecnologías como
				JavaScript, React.js, Node.js, MongoDB, React Native, HTML, CSS" />
				<Study date="ENERO 2017 - DICIEMBRE 2021" title="INGENIERO EN SISTEMAS" academy="Universidad autónoma de Manizales" description="Enfoque en el desarrollo de software teniendo como centro la
					calidad, la cual se trabaja a través de técnicas de ingeniería
					actualizadas y que responden a las tendencias actuales." />
			</ul>
		</div>
	)
}
