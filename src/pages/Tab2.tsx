import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText
} from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [num1, setNum1] = useState<number | undefined>(undefined);
  const [num2, setNum2] = useState<number | undefined>(undefined);
  const [resultado, setResultado] = useState<number | null>(null);

  const sumar = () => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      setResultado(num1 + num2);
    } else {
      setResultado(null);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Número 1</IonLabel>
          <IonInput
            type="number"
            value={num1}
            onIonChange={e => setNum1(parseFloat(e.detail.value!))}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Número 2</IonLabel>
          <IonInput
            type="number"
            value={num2}
            onIonChange={e => setNum2(parseFloat(e.detail.value!))}
          />
        </IonItem>
        <IonButton expand="block" onClick={sumar} className="ion-margin-top">
          Calcular
        </IonButton>
        {resultado !== null && (
          <IonText className="ion-margin-top">
            <h2>Resultado: {resultado}</h2>
          </IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
