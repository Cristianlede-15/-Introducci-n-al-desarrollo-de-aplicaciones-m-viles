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
import './Tab3.css';

const unidades: { [key: number]: string } = {
  0: 'cero',
  1: 'uno',
  2: 'dos',
  3: 'tres',
  4: 'cuatro',
  5: 'cinco',
  6: 'seis',
  7: 'siete',
  8: 'ocho',
  9: 'nueve',
  10: 'diez',
  11: 'once',
  12: 'doce',
  13: 'trece',
  14: 'catorce',
  15: 'quince',
  20: 'veinte',
  30: 'treinta',
  40: 'cuarenta',
  50: 'cincuenta',
  60: 'sesenta',
  70: 'setenta',
  80: 'ochenta',
  90: 'noventa',
  100: 'cien',
  200: 'doscientos',
  300: 'trescientos',
  400: 'cuatrocientos',
  500: 'quinientos',
  600: 'seiscientos',
  700: 'setecientos',
  800: 'ochocientos',
  900: 'novecientos',
  1000: 'mil'
};

const numberToWords = (n: number): string => {
  if (n <= 15 || [20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].includes(n)) {
    return unidades[n]!;
  }

  if (n < 20) {
    return 'dieci' + unidades[n - 10];
  }
  if (n < 30) {
    return n === 21
      ? 'veintiuno'
      : 'veinti' + unidades[n - 20];
  }
  if (n < 100) {
    const dec = Math.floor(n / 10) * 10;
    const uni = n % 10;
    return uni === 0
      ? unidades[dec]
      : unidades[dec] + ' y ' + unidades[uni];
  }
  if (n < 200) {
    return n === 100
      ? 'cien'
      : 'ciento ' + numberToWords(n - 100);
  }
  if (n < 1000) {
    const cen = Math.floor(n / 100) * 100;
    const resto = n % 100;
    return resto === 0
      ? unidades[cen]
      : unidades[cen] + ' ' + numberToWords(resto);
  }
  // solo hasta 1000
  return 'mil';
};

const Tab3: React.FC = () => {
  const [num, setNum] = useState<number | undefined>(undefined);
  const [texto, setTexto] = useState<string>('');

  const traducir = () => {
    if (num && num >= 1 && num <= 1000) {
      setTexto(numberToWords(num));
    } else {
      setTexto('Introduce un número entre 1 y 1000');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Traductor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Número (1–1000)</IonLabel>
          <IonInput
            type="number"
            value={num}
            onIonChange={e => setNum(parseInt(e.detail.value!, 10))}
          />
        </IonItem>
        <IonButton expand="block" className="ion-margin-top" onClick={traducir}>
          Traducir
        </IonButton>
        {texto && (
          <IonText className="ion-margin-top">
            <h2>{texto}</h2>
          </IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
