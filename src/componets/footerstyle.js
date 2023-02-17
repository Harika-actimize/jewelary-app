import styled from 'styled-components';

// export const Box = styled.div`
// padding: 80px 20px;
// // background: black;
// position: relative;
// bottom: 0;
// width: 100%;


// @media (max-width: 1000px) {
// 	padding: 70px 30px;
// }
// `;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Col = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 0px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 5px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 20px;
text-decoration: none;
font-size: .8125rem;
letter-spacing: .5px;


&:hover {
	color: blue;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 1rem;
color: black;
margin-bottom: 40px;
// font-weight: bold;
letter-spacing: .5px;
line-height: 25px;
border-bottom: 1px solid #c3c6cb;
padding: 0 0 10px;
`;
