import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonItem,
  IonLabel
} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Página Inicial</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonItem lines="none">
          <IonImg
            src="/assets/fotofoto.jpg"
            style={{ width: '100px', height: '100px', borderRadius: '8px' }}
          />
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Nombre:</h2>
            <p>Cristian</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Apellido:</h2>
            <p>Ledesma</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Matricula:</h2>
            <p>2023-0967</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Correo:</h2>
            <p>20230967@itla.edu.do</p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
