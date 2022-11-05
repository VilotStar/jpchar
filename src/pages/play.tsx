import { Component, createSignal, Match, onMount, Switch } from "solid-js";
import { jpchars } from "../utils/jpchars";
import { randomNumber } from "../utils/rnd";

const initHiScore = () => {
	let hiScore: number;
	if (typeof localStorage !== "undefined" && localStorage.getItem("hiScore1")) {
		hiScore = parseInt(localStorage.getItem("hiScore1") as string);
	} else {
		hiScore = 0;
	}
	return hiScore;
}

export default function PlayingPage() {
	let [score, setScore] = createSignal(0);
	let [hiScore, setHiScore] = createSignal(initHiScore())

	let [char, setChar] = createSignal(["?", "?"]);
	let getChar = () => {
		let rnd = randomNumber(0, Object.keys(jpchars.hiragana).length);
		let char = Object.entries(jpchars.hiragana).at(rnd);
		if (!char) {
			getChar();
			return;
		}
		let chosen = [];
		console.log(char, rnd);
		if (Array.isArray(char[1])) {
			chosen = [char[0], char[1][randomNumber(0, char.length)]];
		} else {
			chosen = [char[0], char[1]];
		}
		setChar(chosen);
	};
	onMount(() => {
		getChar();
	});
	let [state, setState] = createSignal(0);
	let inputRef: HTMLInputElement | undefined = undefined;
	let butRef: HTMLButtonElement | undefined = undefined;

	let [entered, setEntered] = createSignal<string | undefined>();
	let SetPlayState = () => {
		getChar();
		setState(0);
	};
	let Check = () => {
		if (!inputRef) return;
		let input = inputRef.value
			.replaceAll(/([^A-Za-z])*/gim, "")
			.toLowerCase();
		let okays = Object.entries(jpchars.hiragana)
			.filter(([k, v]) =>
				Array.isArray(v) ? v.includes(char()[1]) : v == char()[1]
			)
			.map((v) => v[0]);
		console.log(input, okays);
		if (okays.includes(input)) {
			setState(1);
			inputRef!.value = "";
			setScore(score() + 1);
			if (hiScore() < score()) {
				setHiScore(score());
				localStorage.setItem("hiScore1", score().toString());
			}
			setTimeout(() => {
				SetPlayState();
				setTimeout(() => {
					inputRef?.focus();
					
				}, 200);
			}, 2000);
		} else {
			setState(2);
			let e = jpchars.hiragana[input as string]
			setEntered(Array.isArray(e) ? e[0] : e);
			if (entered()?.trim()?.length == 0 || entered() == undefined) setEntered('?')
			inputRef!.value = "";
			setScore(0);
			setTimeout(() => {
				butRef?.scrollIntoView()
			}, 300);
		}
	};
	return (
		<>
			<div class="flex flex-col space-y-7 items-center justify-center mt-8">
				<div class='relative'>

					<div class="sticky">

						<div class="flex flex-col items-center justify-center mb-8">
							<h3 class="text-neutral-200 text-2xl tracking-widest">
								HIGH-SCORE
							</h3>
							<h3 class="text-pink-200 text-md">{hiScore()}</h3>
							<br></br>
							<h3 class="text-neutral-200 text-2xl tracking-widest">
								SCORE
							</h3>
							<h3 class="text-pink-200 text-md">{score()}</h3>
						</div>
					</div>
				</div>

				<div
					class={`text-7xl border border-solid ${
						state() == 0
							? "border-zinc-700"
							: state() == 1 
								? "border-emerald-300"
								: 'border-rose-300'
					} rounded-xl p-7 bg-zinc-800 shadow-xl`}
				>
					<p class="text-white">{char()[1]}</p>
				</div>
				<div class="w-30 flex flex-col justify-center">
					<h3 class="text-xl text-neutral-200">
						What is this Hiragana character?
					</h3>
					<input
						ref={inputRef}
						class="w-full appearance-none text-neutral-200 placeholder-zinc-400 transition-colors bg-neutral-900 focus:outline-none text-center focus:ring-pink-400 focus:border-pink-400 border-neutral-600 focus:ring-1 rounded-lg px-2 py-2 shadow-sm border"
						lang="jp"
						onSubmit={Check}
						disabled={state() != 0}
						onkeydown={(e) => (e.key == "Enter" ? Check() : "")}
					/>
					<button
						class="ml-auto py-2 shadow-sm px-12 transition-colors hover:bg-pink-600 text-gray-100 bg-pink-500 disabled:bg-pink-600/50 mt-2 rounded-lg w-full"
						onSubmit={Check}
						disabled={state() != 0}
						onClick={Check}
					>
						Ok
					</button>
				</div>
				<div class="text-neutral-200 flex-col items-center flex align-middle">

				<Switch>
					<Match when={state() == 0}>Playing</Match>
					<Match when={state() == 1}>Yayayayayay correct!</Match>
					<Match when={state() == 2}>
						{/* <div class="text-neutral-200 flex-col items-center flex align-middle"> */}
							<p>FAILURE</p>
							<br/>
							<p>
								{char()[0]} was the correct letters, You entered
							</p>
						{/* </div> */}

						<div class="mb-24 mt-8 text-7xl border border-solid border-zinc-700 rounded-xl p-7 bg-zinc-800 shadow-xl">
							<p class="text-white">{entered()}</p>
						</div>
						<div class=" w-screen pt-12 relative">
							
						<button
							class="ml-auto py-2 shadow-sm px-12 transition-colors hover:bg-pink-600 text-gray-100 bg-pink-500 disabled:bg-pink-600/50 mt-2 absolute bottom-0 w-full"
							onSubmit={SetPlayState}
							onClick={SetPlayState}
							ref={butRef}
							>
							<p>Continue?</p>
						</button>
							</div>
					</Match>
				</Switch>
				</div>
			</div>
		</>
	);
}
