import { Injectable } from '@angular/core';
import { IPotwory } from './ipotwory';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PotworyService implements IPotwory{
  
  id: number;
  nazwa: string;
  opis: string;
  img: string;

  public Potwory:IPotwory[]=[
    {
      id: 1, nazwa: 'Bazyliszek ', opis: 'Tego straszliwego stwora boją się nawet smoki. Istnieją mity mówiące o jego umiejętności zmieniania ludzi w kamień za pomocą spojrzenia.', img: 'assets/bazy.png'
    },
    {
      id: 2, nazwa: 'Krabopająk ', opis: 'Potwór żyjący na pustyniach i bagnach, wyjątkowo jadowity.', img: 'assets/krabo.png'
    },
    {
      id: 3, nazwa: 'Leszy ', opis: 'Leszy to potwór, zamieszkujący stare lasy. Dzięki swojej magii kontroluje zwierzęta i rośliny, żyjące na jego terenie.', img: 'assets/leszy.png'
    },
    {
      id: 4, nazwa: 'Troll ', opis: 'Jeśli wysoko w górach zobaczysz ruszające się kamienie, nie przecieraj oczu, tylko wyciągnij miecz – najpewniej masz przed sobą skalnego trolla.', img: 'assets/troll.png'
    },
    {
      id: 5, nazwa: 'Widłogon ', opis: 'Nieduży potwór latający, mający grzbiet pokryty łuską. Widłogony zabiły stokrotnie więcej istot niż smoki, z którymi są spokrewnione.', img: 'assets/widlo.png'
    },

  ]
  public myData: BehaviorSubject<IPotwory[]> = new BehaviorSubject<IPotwory[]>(this.Potwory);

  constructor(private storage: Storage) { }

  public load():void{

    this.storage.get('myData').then((data) => {

        this.myData.next(data);

    });

}
}
