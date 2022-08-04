import './App.css';
import Header from './components/Header';
import React, {useState} from 'react'
import Tecnologies from './components/Tecnologies';
import Proyects from './components/Proyects';
import About from './components/About';
import Estudies from './components/Estudies';


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
			<div className="bg-slate-100 dark:bg-zinc-900 min-h-screen">
				<div className="p-2 max-w-7xl mx-2 sm:mx-20 2xl:mx-auto sm:py-10">
					<About />
					<Proyects />
					<Estudies />
					<Tecnologies />
				</div>
			</div>
			
		
			
		

		</div>

    
  );
}

export default App;
