import {
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonList,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react'
import { airplane } from 'ionicons/icons'
import React from 'react'

const ListPage: React.FC = () => (
	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot='start'>
					<IonMenuButton />
				</IonButtons>
				<IonTitle>List</IonTitle>
			</IonToolbar>
		</IonHeader>

		<IonContent>
			<ListItems />
		</IonContent>
	</IonPage>
)

const markers = [
	{ key: 'marker1', position: [53.9, 27.56], content: 'Первая точка' },
	{ key: 'marker3', position: [53.86, 27.5], content: 'Вторая точка' },
	{ key: 'marker3', position: [53.86, 27.5], content: 'Третяя точка' },
	{ key: 'marker2', position: [53.899574, 27.556942], content: 'Четвертая точка' },
]

const ListItems = () => {
	const items = markers.map((x, index) => (
		<IonItem key={x.key}>
			<IonIcon icon={airplane} slot='start' />
			Место {index}
			<div className='item-note' slot='end'>
				{x.content}
			</div>
		</IonItem>
	))

	return <IonList>{items}</IonList>
}

export default ListPage
