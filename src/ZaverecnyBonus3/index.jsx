import React, { useState } from 'react'
import { useCasVSekundach } from './hodiny'

// Zadání:
// Pomocí předchystané stavové proměnné, která se mění každou sekundu,
// zobraz aktuální čas ve formátu 7:49:05.

const ZaverecnyBonus3 = () => {
	const casVSekundach = useCasVSekundach()
	const [hodiny, setHodiny] = useState(Math.floor(casVSekundach / 60 / 60));
	const [minuty, setMinuty] = useState(Math.floor(casVSekundach / 60) - ((Math.floor(casVSekundach / 60 / 60)) * 60));
	const [vteriny, setVteriny] = useState(casVSekundach % 60)

	return (
		<>
			Čas právě teď: <b>{casVSekundach}</b>
			<br />
			Čas v hodinách: {hodiny.toString().padStart(2, '0')} : {minuty.toString().padStart(2, '0')} : {vteriny.toString().padStart(2, '0')}
		</>
	)
}

export default ZaverecnyBonus3;