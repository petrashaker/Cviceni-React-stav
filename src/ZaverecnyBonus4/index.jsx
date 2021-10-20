import React, { useState } from 'react'

// Zadání:
// Pomocí dvou stavových proměnných s výchozí hodnotou 0,
// které se budou měnit podle vstupních políček,
// vypiš do `<output></output>` jejich součet.

const ZaverecnyBonus4 = () => {
	const [nb, setNb] = useState(0);
	const handleChange = ({target}) => {
		const nb1 = target.value;
		setNb(Number(nb1))
	}

	const [nbInput2, setNbInpu2] = useState(0);
	const handleSecondChange = ({target}) => {
		const nb2 = target.value;
		setNbInpu2(Number(nb2));
	}

	return (
		<>
			<input type="number" defaultValue="0" onChange={handleChange}/> +{' '}
			<input type="number" defaultValue="0" onChange={handleSecondChange} /> = <output>{nb + nbInput2}</output>
		</>
	)
}

export default ZaverecnyBonus4;