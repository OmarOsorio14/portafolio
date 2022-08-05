import React from 'react'
import Title from './Title'
import photo from '../assets/photo.jpg'
import Paragraph from './Paragraph'


export default function About({reference}) {
	return (
		<div className="flex flex-col pt-14" ref={reference}>
			<Title title="Acerca de mi" />
			<img src={photo} className="rounded-full shadow-md shadow-red-500/50 my-2 self-center w-[10rem] h-[10rem]" alt="" />
			<Paragraph text="Hola, soy omar osorio, desarrollador de software, con reciente experiencia en el stack MERN (mongo, express, react, nodejs) durante el bootcamp de mindhub trabajando con la metodología ágil scrum.  Donde practique estas tecnologías durante 700 horas en un ambiente laboral simulado. También cuento con bases sólidas en distintos paradigmas de programación tales como: imperativo, declarativo, orientado a objetos y funcional. Además de lenguajes de programación como java, C++, JavaScript, Python y PHP gracias a mi formación universitaria en ingeniería de sistemas."/>
			<Paragraph text="Con estos conocimientos tengo la capacidad de transformar una idea abstracta en un producto de software completo, desde su interfaz gráfica hasta el diseño de la base de datos, pasando por toda la lógica para conectar estos 2 mundos. Generando un producto que cualquier usuario pueda manipular de manera fácil, vistosa e intuitiva."/>
			<Paragraph text="Siempre estoy abierto al aprendizaje de nuevas habilidades que potencien mi carrera profesional y busco un entorno laboral desafiante, donde explotar todos mis conocimiento y creatividad con el fin de crear servicios que tengan un impacto positivo en la sociedad."/>
		</div>
	)
}
