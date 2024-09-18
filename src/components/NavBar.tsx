import React from 'react'
import styled from 'styled-components'
import { ButtonHTMLAttributes } from 'react';
import {useLanguage} from '../context/LanguageContext'
import {LocalizationLanguages} from '../types/enums'

interface NavBarProps {
	title?: string
}

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-radius: 8px;
`

const Title = styled.h1`
	font-size: 1.5rem;
	margin: 0;
`

const ButtonGroup = styled.div`
	display: flex;
	gap: 10px;
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isActive: boolean;
}

const LanguageButton = styled.button.withConfig({
	shouldForwardProp: (prop) => prop !== 'isActive',
  })<ButtonProps>`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#007bff' : 'transparent')};
  color: ${({ isActive }) => (isActive ? 'white' : '#007bff')};

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;
const NavBar: React.FC<NavBarProps> = ({title}) => {
	const {lang, setLang} = useLanguage()

	return (
		<Nav>
			<Title>{title}</Title>
			<ButtonGroup>
				<LanguageButton
					isActive={lang === LocalizationLanguages.cs}
					onClick={() => setLang(LocalizationLanguages.cs)}
				>
					CZ
				</LanguageButton>
				<LanguageButton
					isActive={lang === LocalizationLanguages.en}
					onClick={() => setLang(LocalizationLanguages.en)}
				>
					ENG
				</LanguageButton>
				<LanguageButton
					isActive={lang === LocalizationLanguages.de}
					onClick={() => setLang(LocalizationLanguages.de)}
				>
					DE
				</LanguageButton>
				<LanguageButton
					isActive={lang === LocalizationLanguages.esp}
					onClick={() => setLang(LocalizationLanguages.esp)}
				>
					ESP
				</LanguageButton>
			</ButtonGroup>
		</Nav>
	)
}

export default NavBar