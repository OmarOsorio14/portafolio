import './App.css';
import Header from './components/Header';
import React, {useState} from 'react'
import { logos } from './assets/logos';
import TecnologyLogo from './components/TecnologyLogo'

function App() {
	const [theme, setTheme] = useState("dark")

	const ChangeTheme = ()=>{
		if(theme === "dark"){
			setTheme("light")
		}
		else{
			setTheme("dark")
		}
	}
  return (
		<div className={theme}>
			<Header ChangeTheme={ChangeTheme} theme={theme} />
			
			<button class="m-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Purple to blue
  </span>
</button>
		
			
		<h2 className="text-3xl font-bold underline">Tecnologias</h2>
		<div className="flex">
		{logos.map((logo,index) => <TecnologyLogo key={index} source={logo.source} name={logo.name} />)}

		</div>

		</div>

    
  );
}

export default App;
