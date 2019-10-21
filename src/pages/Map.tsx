import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'

type Position = [number, number]

const minsk: Position = [53.899574, 27.556942]

type Props = {
	content: string
	position: Position
}

interface MarkerData extends Props {
	key: string
}

const MyPopupMarker = ({ content, position }: Props) => (
	<Marker position={position}>
		<Popup>{content}</Popup>
	</Marker>
)

const MyMarkersList = ({ markers }: { markers: Array<MarkerData> }) => {
	const items = markers.map(({ key, ...props }) => <MyPopupMarker key={key} {...props} />)

	return <>{items}</>
}

const markers: Array<MarkerData> = [
	{ key: 'marker1', position: [53.9, 27.56], content: 'Первая точка' },
	{ key: 'marker2', position: [53.899574, 27.556942], content: 'Четвертая точка' },
	{ key: 'marker3', position: [53.86, 27.5], content: 'Вторая точка' },
]

export const MapPage: React.FC = () => (
	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot='start'>
					<IonMenuButton />
				</IonButtons>
				<IonTitle>Карта</IonTitle>
			</IonToolbar>
		</IonHeader>

		<IonContent>
			<Map center={minsk} zoom={13} className='map'>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<MyMarkersList markers={markers} />
			</Map>
		</IonContent>
	</IonPage>
)
