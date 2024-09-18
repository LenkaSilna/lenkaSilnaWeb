import React from 'react'
import styled from 'styled-components'
import {useTranslation} from '../localization'
import NavBar from './NavBar'

interface LayoutProps {
	children: React.ReactNode
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: 100vh;
	padding: 20px;
`

const Content = styled.main`
	width: 100%;
	max-width: 1200px;
	padding: 20px;
	border-radius: 8px;
`

const Layout: React.FC<LayoutProps> = ({children}) => {
	const {t} = useTranslation()
	return (
		<Container>
			<NavBar />
			<Content>{children}</Content>
		</Container>
	)
}

export default Layout