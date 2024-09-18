import SEO from '../components/SEO'
import {useTranslation} from '../localization'
import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 20%;
`

const Home = () => {
	const {t} = useTranslation()

	return (
		<>
			<SEO page="home"/>
			<Main>
				<h1>{t('Hi I am Lenka')}</h1>
			</Main>
		</>
	)
}

export default Home