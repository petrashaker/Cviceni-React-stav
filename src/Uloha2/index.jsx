import React, { useState } from 'react'

// Děláš počítadlo, kde jde tlačítky zvětšovat nebo zmenšovat hodnota.

// Zadání 1:
// Z proměnné `cislo` udělej stavovou proměnnou.
// Nezapomeň na všechno, co musíš udělat, když chceš použít useState.

// Zadání 2:
// Nastav, aby jednotlivá tlačítka měnila stav `cislo`
// Tlačítko +1 aby přičítalo jedničku, +5 přičítalo pětku,
// tlačítko Vynulovat nastavovalo číslo na nulu apod.

const Pocitadlo = () => {
	const [cislo, setCislo] = useState(0);
	const odecistPet = () => {
		setCislo(cislo - 5);
	}

	const odecistJedna = () => {
		setCislo(cislo - 1);
	}

	const vynulovat = () => {
		setCislo(0);
	}

	const pricistJedna = () => {
		setCislo(cislo + 1);
	}

	const pricistPet = () => {
		setCislo(cislo + 5);
	}


	return (
		<>
			<h3>Počítadlo: {cislo}</h3>
			<button onClick={odecistPet}>-5</button>
			<button onClick={odecistJedna}>-1</button>
			<button onClick={vynulovat}>Vynulovat</button>
			<button onClick={pricistJedna}>+1</button>
			<button onClick={pricistPet}>+5</button>
		</>
	)
}

const Uloha2 = () => {
	return (
		<>
			<Pocitadlo />
			<Pocitadlo />
		</>
	)
}

export default Uloha2;