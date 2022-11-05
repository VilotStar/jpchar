import {createSignal} from "solid-js";
import {randomNumber} from "../utils/rnd";
import {jpchars} from "../utils/jpchars";

export default function PlayingPage() {
	let [score, setScore] = createSignal(0);

	let [GChars, setGChars] = createSignal([["?", "?"], ["?", "?"], ["?", "?"]]);
	let getChars = (selectionAmount: number) => {
		let rnds: number[] = [];
		while (rnds.length < selectionAmount) {
			let rnd = randomNumber(0, Object.keys(jpchars.hiragana).length);
			if (rnds.indexOf(rnd) === -1) rnds.push(rnd);
		}
		let chars = [];
		for (let i=0;i<selectionAmount;i++) {
			chars.push(Object.entries(jpchars.hiragana).at(rnds[i]));
		}
		for (let i=0;i<selectionAmount;i++) {
			let chosen = [];
			if (Array.isArray(chars[i]?.[1])) {
				chosen = [chars[i]?.[0], chars[i]?.[1][randomNumber(0, 2)]];
			} else {
				chosen = [chars[i]?.[0], chars[i]?.[1]];
			}
			let tmpGChars = GChars();
			tmpGChars[i] = chosen;
			setGChars()
		}
		//let chars = [Object.entries(jpchars.hiragana).at(rnds[0]), Object.entries(jpchars.hiragana).at(rnds[1]), Object.entries(jpchars.hiragana).at(rnds[2])];
	}
}