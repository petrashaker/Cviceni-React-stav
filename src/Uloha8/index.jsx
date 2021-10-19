import React, { useState } from 'react'

// Tvoříš komponentu, která zobrazuje vysoce přesnou předpověď
// počasí v Brně.

// Zadání 1:
// Vytvoř stavovou proměnnou s výchozí hodnotou `možná`.

// Zadání 2:
// Proměnnou vypiš místo `ano/ne/možná`.

// Zadání 3:
// Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`,
// případně `ne` na `možná`.

const Uloha8 = () => {
	const [prsi, setPrsi] = useState('možná');
	const handleClick = () => {
		setPrsi(prsi === 'možná' ? 'ano' : 'ne' )
		if(prsi === 'ne') {
			setPrsi('možná')
		}
	}
	return (
		<>
			<h3>Prší v Brně: {prsi}</h3>
			<button onClick={handleClick}>změnit</button>
		</>
	)
}

export default Uloha8;