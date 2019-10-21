import {
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react'
import React from 'react'
import './Home.css'

const HomePage: React.FC = () => (
	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot='start'>
					<IonMenuButton />
				</IonButtons>
				<IonTitle>Эпилог</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent>
			<IonCard className='welcome-card'>
				<img src='/assets/shapes.svg' alt='' />
				<IonCardHeader>
					<IonCardSubtitle>Вы смогли собрать это приложнеие</IonCardSubtitle>
					<IonCardTitle>Поздравляю</IonCardTitle>
				</IonCardHeader>
			</IonCard>
		</IonContent>
	</IonPage>
)

export default HomePage
