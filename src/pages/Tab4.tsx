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
  IonList,
  IonText
} from '@ionic/react';
import './Tab4.css';

const Tab4: React.FC = () => {
  const [numero, setNumero] = useState<number | undefined>(undefined);
  const [tabla, setTabla] = useState<number[]>([]);

  const generarTabla = () => {
    if (typeof numero === 'number' && !isNaN(numero)) {
      const resultados: number[] = [];
      for (let i = 1; i <= 13; i++) {
        resultados.push(i * numero);
      }
      setTabla(resultados);
    } else {
      setTabla([]);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Ingresa un número</IonLabel>
          <IonInput
            type="number"
            value={numero}
            onIonChange={e => setNumero(parseInt(e.detail.value!, 10))}
          />
        </IonItem>
        <IonButton expand="block" onClick={generarTabla} className="ion-margin-top">
          Mostrar Tabla
        </IonButton>

        {tabla.length > 0 && (
          <>
            <IonText className="ion-margin-top">
              <h2>Tabla del {numero}</h2>
            </IonText>
            <IonList>
              {tabla.map((resultado, idx) => (
                <IonItem key={idx}>
                  <IonText>
                    {numero} × {idx + 1} = {resultado}
                  </IonText>
                </IonItem>
              ))}
            </IonList>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
