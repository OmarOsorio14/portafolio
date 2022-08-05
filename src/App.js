import './App.css';
import Header from './components/Header';
import React, {useState, useEffect} from 'react'
import Tecnologies from './components/Tecnologies';
import Proyects from './components/Proyects';
import About from './components/About';
import Studies from './components/Studies';
import Footer from './components/Footer';


function App() {
	const [theme, setTheme] = useState("dark")
	const [refs, setRefs] = useState([]);

	const sections = ["about", "proyects", "studies", "tecnologies"]
	const makeRefs = () => {
		setRefs(sections.reduce((acc, value) => {
			acc[value] = React.createRef();
			return acc;
		}, {}));
	}
	const ChangeTheme = ()=>{
		if(theme === "dark"){
			setTheme("light")
		}
		else{
			setTheme("dark")
		}
	}
	const handleScroll = (id)=>{
		console.log(refs)
		refs[id]?.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
	}
	useEffect(()=>{
			makeRefs()		
	},[])
  return (
		<div className={theme}>
			<Header ChangeTheme={ChangeTheme} handleScroll={handleScroll} theme={theme} />
			<div className="bg-slate-100 dark:bg-zinc-900 min-h-screen">
				<div className="p-2 max-w-7xl mx-2 sm:mx-20 2xl:mx-auto sm:py-10">
					<About reference={refs["about"]}/>
					<Proyects reference={refs["proyects"]} />
					<Studies reference={refs["studies"]} />
					<Tecnologies reference={refs["tecnologies"]}/>

				</div>
			</div>
			<Footer theme={theme} />
		</div>
  );
}

export default App;
