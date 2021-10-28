import React, {useState} from 'react'
import dice1Url from './1.svg'
import dice2Url from './2.svg'
import dice3Url from './3.svg'
import dice4Url from './4.svg'
import dice5Url from './5.svg'
import dice6Url from './6.svg'
import './kostka.css'

const diceUrls = [dice1Url, dice2Url, dice3Url, dice4Url, dice5Url, dice6Url]

// Tvoříš komponentu, která zobrazuje hrací kostku, kterou
// jde kliknutím posunout na další číslo na kostce.

// Zadání 1:
// Z proměnné `cisloNaKostce` udělej stavovou proměnnou.

// Zadání 2:
// Po kliku na tlačítko zvětši číslo na kostce o jedna.
// Po šetce by měla následovat jednička.

// Zadání 3:
// Vypiš v textu `<p>`, jaké číslo kostka ukazuje.

// Zadání 4:
// Vypiš v atributu `alt` u obrázku správné číslo.

const Uloha3 = () => {
	const [cisloNaKostce, setCisloNaKostce] = useState(1);/* jedna až šest */
	const handleClick = () => {
		// setCisloNaKostce(cisloNaKostce + 1);
		// if(cisloNaKostce === 6) {
		// 	setCisloNaKostce(1);
		setCisloNaKostce(cisloNaKostce === 6 ? 1 : (cisloNaKostce + 1))
	}

	return (
		<div className="kostka">
			<img
				src={diceUrls[cisloNaKostce - 1]} /* indexy se číslují od nuly */
				width={60}
				height={60}
				// alt="Kostka s číslem @TODO"
				alt={cisloNaKostce}
				className="kostka__ikona"
			/>
			<p className="kostka__text">Na kostce je číslo {cisloNaKostce}</p>
			<button className="kostka__akce" onClick={handleClick}>další</button>
		</div>
	)
}

export default Uloha3;
