import React, { useState } from 'react'
import './ukazatel-uspechu.css'

// Děláš jednoduchou komponentu, která ukazuje "progress bar",
// proužek, který ukazuje pokrok v nějakém procesu.

// Zadání 1:
// Použij prop `barva` ve style atributu, aby byl proužek barvou
// předanou jako prop do komponenty.

// Zadání 2:
// Přidej komponentě číselný stav od nuly do sta,
// který bude reprezentovat postup.

// Zadání 3:
// Po kliknutí na tlačítko zvětši stav o deset. Nejvýše ale do sta.

// Zadání 4:
// Nastav prvku `ukazatel-uspechu__postup` šířku podle stavové proměnné.


const UkazatelPokroku = ({ barva, stav }) => {
	const [state, setState] = useState(stav)

	return (
		<div className="ukazatel-uspechu">
			<div className="ukazatel-uspechu__ramecek">
				<div
					className="ukazatel-uspechu__postup"
					style={{
						width: `${state}%`,
						backgroundColor: barva,
					}}
				></div>
			</div>
			<button onClick={() => setState(Math.min(100, state + 10))}>
				postoupit o 10 %
			</button>
		</div>
	)
}

export const Uloha7 = () => {
	return (
		<>
			<UkazatelPokroku barva="blue" stav={10}/>
			<UkazatelPokroku barva="green" stav={20}/>
			<UkazatelPokroku barva="purple" stav={30}/>
		</>
	)
}

//verze 2 - delší
// const UkazatelPokroku = ({ barva, stav }) => {
// 	const [zmenaBarvy, setZmenaBarvy] = useState(barva);
// 	const [state, setState] = useState(stav)

// 	const handleClick = () => {
// 		setState(state + 10 );
// 		if(state >= '100') {
// 			setState('100');
// 		}
// 		console.log(state)
// 	}
	

// 	return (
// 		<div className="ukazatel-uspechu">
// 			<div className="ukazatel-uspechu__ramecek">
// 				<div
// 					className="ukazatel-uspechu__postup"
// 					style={{
// 						width: state + '%',
// 						backgroundColor: barva
// 					}}
// 				></div>
// 			</div>
// 			<button onClick={handleClick}>postoupit o 10 %</button>
// 		</div>
// 	)
// }

// const Uloha7 = () => {
// 	return (
// 		<>
// 			<UkazatelPokroku barva="blue" stav={10} />
// 			<UkazatelPokroku barva="green" stav={20}/>
// 			<UkazatelPokroku barva="purple" stav={30}/>
// 		</>
// 	)
// }

export default Uloha7;