import { useCallback, useEffect, useState } from 'react';
import './index.css';

function App() {
	const [text, setText] = useState('');
	const [caps, setCaps] = useState(false);

	const addSymbol = useCallback(
		(symbol: string) => {
			if (caps) return setText(text + symbol.toUpperCase());
			else setText(text + symbol.toLowerCase());
		},
		[text, setText, caps]
	);

	const removeSymbol = useCallback(() => {
		setText(text.slice(0, -1));
	}, [text, setText]);

	const handleKey = useCallback(
		(event: KeyboardEvent) => {
			const blocked: string[] = [
				'escape',
				'f1',
				'f2',
				'f3',
				'f4',
				'f5',
				'f6',
				'f7',
				'f8',
				'f9',
				'f10',
				'f11',
				'f12',
				'control',
				'alt',
				'shift',
				'end',
				'pagedown',
				'pageup',
				'pause',
				'scrollock',
				'insert',
				'arrowright',
				'arrowleft',
				'arrowup',
				'arrowdown',
				'contextmenu',
				'graph'
			];
			if (event.key.toLowerCase() === 'backspace') removeSymbol();
			else if (event.key.toLowerCase() === 'capslock') setCaps(!caps);
			else if (event.key.toLowerCase() === 'tab') addSymbol('   ');
			else if (event.key.toLocaleLowerCase() === 'delete') setText('');
			else if (event.key.toLocaleLowerCase() === 'enter') setText('');
			else if (blocked.indexOf(event.key.toLowerCase()) > -1) return;
			else addSymbol(event.key);
		},
		[addSymbol, caps, removeSymbol]
	);

	useEffect(() => {
		window.addEventListener('keydown', handleKey);

		return () => {
			window.removeEventListener('keydown', handleKey);
		};
	}, [handleKey]);

	return (
		<div className="App">
			<textarea className="input" onChange={t => setText(t.target.value)} placeholder="" value={text}></textarea>

			<div className="keyboard">
				<button className="key" onClick={() => addSymbol('~')}>
					~
				</button>
				<button className="key" onClick={() => addSymbol('1')}>
					1
				</button>
				<button className="key" onClick={() => addSymbol('2')}>
					2
				</button>
				<button className="key" onClick={() => addSymbol('3')}>
					3
				</button>
				<button className="key" onClick={() => addSymbol('4')}>
					4
				</button>
				<button className="key" onClick={() => addSymbol('5')}>
					5
				</button>
				<button className="key" onClick={() => addSymbol('6')}>
					6
				</button>
				<button className="key" onClick={() => addSymbol('7')}>
					7
				</button>
				<button className="key" onClick={() => addSymbol('8')}>
					8
				</button>
				<button className="key" onClick={() => addSymbol('9')}>
					9
				</button>
				<button className="key" onClick={() => addSymbol('0')}>
					0
				</button>
				<button className="key" onClick={() => addSymbol('-')}>
					-
				</button>
				<button className="key" onClick={() => addSymbol('+')}>
					+
				</button>
				<button className="key delete" onClick={() => removeSymbol()}>
					Delete
				</button>
				<button name="a" className="key tab" onClick={() => addSymbol('   ')}>
					Tab
				</button>
				<button className="key" onClick={() => addSymbol('Q')}>
					Q
				</button>
				<button className="key" onClick={() => addSymbol('W')}>
					w
				</button>
				<button className="key" onClick={() => addSymbol('E')}>
					E
				</button>
				<button className="key" onClick={() => addSymbol('R')}>
					R
				</button>
				<button className="key" onClick={() => addSymbol('T')}>
					T
				</button>
				<button className="key" onClick={() => addSymbol('Y')}>
					Y
				</button>
				<button className="key" onClick={() => addSymbol('U')}>
					U
				</button>
				<button className="key" onClick={() => addSymbol('I')}>
					I
				</button>
				<button className="key" onClick={() => addSymbol('O')}>
					O
				</button>
				<button className="key" onClick={() => addSymbol('P')}>
					P
				</button>
				<button className="key" onClick={() => addSymbol('[')}>
					[
				</button>
				<button className="key" onClick={() => addSymbol(']')}>
					]
				</button>
				<button className="key backslash" onClick={() => addSymbol('\\')}>
					\
				</button>
				<button className="key capslock" onClick={() => setCaps(!caps)}>
					Caps Lock
				</button>
				<button className="key" onClick={() => addSymbol('A')}>
					A
				</button>
				<button className="key" onClick={() => addSymbol('S')}>
					S
				</button>
				<button className="key" onClick={() => addSymbol('D')}>
					D
				</button>
				<button className="key" onClick={() => addSymbol('F')}>
					F
				</button>
				<button className="key" onClick={() => addSymbol('G')}>
					G
				</button>
				<button className="key" onClick={() => addSymbol('H')}>
					H
				</button>
				<button className="key" onClick={() => addSymbol('J')}>
					J
				</button>
				<button className="key" onClick={() => addSymbol('K')}>
					K
				</button>
				<button className="key" onClick={() => addSymbol('L')}>
					L
				</button>
				<button className="key" onClick={() => addSymbol(';')}>
					;
				</button>
				<button className="key" onClick={() => addSymbol("'")}>
					'
				</button>
				<button className="key return" onClick={() => setText('')}>
					Return
				</button>
				<button className="key leftshift" onClick={() => setCaps(!caps)}>
					<s>Shift</s>
				</button>
				<button className="key" onClick={() => addSymbol('Z')}>
					Z
				</button>
				<button className="key" onClick={() => addSymbol('X')}>
					X
				</button>
				<button className="key" onClick={() => addSymbol('C')}>
					C
				</button>
				<button className="key" onClick={() => addSymbol('V')}>
					V
				</button>
				<button className="key" onClick={() => addSymbol('B')}>
					B
				</button>
				<button className="key" onClick={() => addSymbol('N')}>
					N
				</button>
				<button className="key" onClick={() => addSymbol('M')}>
					M
				</button>
				<button className="key" onClick={() => addSymbol(',')}>
					,
				</button>
				<button className="key" onClick={() => addSymbol('.')}>
					.
				</button>
				<button className="key" onClick={() => addSymbol('/')}>
					/
				</button>
				<button className="key rightshift">
					<s>Shift</s>
				</button>
				<button className="key leftctrl">
					<s>Ctrl</s>
				</button>
				<button className="key">
					<s>Alt</s>
				</button>
				<button className="key command">
					<s>Command</s>
				</button>
				<button className="key space" onClick={() => addSymbol(' ')}>
					Space
				</button>
				<button className="key command">
					<s>Command</s>
				</button>
				<button className="key">
					<s>Alt</s>
				</button>
				<button className="key">
					<s>Ctrl</s>
				</button>
				<button className="key">
					<s>Fn</s>
				</button>
			</div>
		</div>
	);
}

export default App;
