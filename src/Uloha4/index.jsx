import React, { useState } from 'react'
import './carousel.css'

// Tvoříš jednoduchou galerii, kde se jde klikáním
// na tlačítka přesouvat na další nebo předchozí obrázky.

// Zadání 1:
// Nachystej si adresy obrázků uvedené níže do pole.

/*
Adresy obrázků:
https://source.unsplash.com/WLUHO9A_xik/880x500
https://source.unsplash.com/DA1eGglMmlg/880x500
https://source.unsplash.com/kTxL6le0Wgk/880x500
https://source.unsplash.com/7go5UASxmDY/880x500
https://source.unsplash.com/YmATDIFsCmQ/880x500
*/

// Zadání 2:
// Přidej komponentě stavovou proměnnou, ve které bude index
// právě aktivního obrázku. Na začátku to bude 0.

// Zadání 3:
// Pro `src` v tagu `img` použij adresu z pole pod správným indexem.

// Zadání 4:
// Tlačítky ← a → měň index.

// Bonus:
// Pozor na krajní hodnoty. Pokud dojdeš na konec nebo začátek pole,
// tak už v daném směru neměň index, aby ti neutekl mimo položky v poli.
// Nastav tlačítkům atribut `disabled`, pokud v jejich směru už není
// žádný obrázek.

// Tak u te Ulohy 4: Tam si staci drzet v useState jenom index (tzn. cislo 0 - 4 v tomhle pripade). To pak jenom menis a v obrzku jenom pristoupis do pole <img src={obrazky[index]} />

const Uloha4 = () => {
	const obrazky = ["https://source.unsplash.com/WLUHO9A_xik/880x500", 
		"https://source.unsplash.com/DA1eGglMmlg/880x500", 
		"https://source.unsplash.com/kTxL6le0Wgk/880x500", 
		"https://source.unsplash.com/7go5UASxmDY/880x500", 
		"https://source.unsplash.com/YmATDIFsCmQ/880x500"]
	// const i = [0, 1, 2, 3, 4]
	
	// NEFUNGUJE scr="0"
	// const [obrazek, setObrazek] = useState([0]);

	// NEFUNGUJE scr="0"
	// const [obrazek, setObrazek] = useState(0);

	//FUNGUJE, objeví se první obrázek se správným src
	const [obrazek, setObrazek] = useState(obrazky[0]);

	// const [obrazek, setObrazek] = useState(obrazek[i]);
	// 	const predchozi = () => {
	// 	for(let y = 0; y <= obrazky.length; y++) {
	// 		setObrazek(obrazek[y])
	// 	}
	// }

	//NEFUNGUJE, přejde pouze o jeden obrázek a rovnou na index 4
	// const predchozi = () => {
	// 	obrazky.map(obrazek => setObrazek(obrazek))
	// }
	const nasledujici = () => {
		obrazky.map(obrazek => setObrazek(obrazek))
	}

	//NEFUNGUJE, přejde na src="5" 
	// nefunguje ani setObrazek(1) bez hranatých závorek, ani setObrazek(obrazky[i]), setObrazek(obrazek[i])
	// const predchozi = () => {
	// 	for(let i = 0; i <= obrazky.length; i++) {
	// 		setObrazek([i])
	// 	}
	// }

	//FUNGUJE, ale pouze ten konkrétní obrázek
	const predchozi = () => {
		setObrazek(obrazky[2])
	}

	// 

	const vybranyObrazek = obrazky.map(obrazek => {
		return (
			<img className="carousel__image" src={obrazek} alt="" key={obrazek}/>
		)
	})



	return (
		<div className="carousel">
			<button className="carousel__predchozi" aria-label="předchozí" onClick={predchozi}>
				←
			</button>
			<div className="carousel__media">
				<img
					className="carousel__image"
					src={obrazek}
					// src={obrazek[i]}
					alt=""
				/>
				{/* {vybranyObrazek} */}
			</div>
			<button className="carousel__dalsi" aria-label="další" onClick={nasledujici}>
				→
			</button>
		</div>
	)
}

export default Uloha4;