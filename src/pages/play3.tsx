import {createSignal} from "solid-js";
import {randomNumber} from "../utils/rnd";
import {jpchars} from "../utils/jpchars";

export default function PlayingPage() {
	let [score, setScore] = createSignal(0);

	let [cahrs, setChars] = createSignal([["?", "?"], ["?", "?"], ["?", "?"]]);
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
		//let chars = [Object.entries(jpchars.hiragana).at(rnds[0]), Object.entries(jpchars.hiragana).at(rnds[1]), Object.entries(jpchars.hiragana).at(rnds[2])];
	}
}