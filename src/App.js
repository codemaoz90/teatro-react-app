import jsonLocal from "./data.json";
import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;
const Button = styled.button`
	font-size: 1.5em;
	width: 50%;
	text-align: center;
	color: gray;
`;
const Paragraph = styled.p`
	background: pink;
`;
export default function App() {
	const [contador, setContador] = useState(0);
	console.log(typeof contador);
	const data = jsonLocal.map((dato, index) =>
		contador === index ? (
			<Paragraph key={index}>{dato}</Paragraph>
		) : (
			<p key={index}>{dato}</p>
		)
	);

	return (
		<Container>
			<div style={{ width: "500px" }}>
				<Button
					onClick={() =>
						setContador(contador <= 0 ? jsonLocal.length - 1 : contador - 1)
					}
				>
					PREV
				</Button>
				<Button
					onClick={() =>
						setContador(contador >= jsonLocal.length - 1 ? 0 : contador + 1)
					}
				>
					NEXT
				</Button>
				<br />
				{data}
				{/* <p>{jsonLocal[contador]}</p> */}
			</div>
		</Container>
	);
}
