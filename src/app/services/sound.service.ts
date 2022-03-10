import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  constructor() { }

  play(soundFile: string) {
    console.log('Playing sound: ' + soundFile);
    try {
      let audio = new Audio();
      audio.src = soundFile;
      audio.load();
      audio.play().then(() => {
        console.log('playing');
      }).catch(error => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
  silence() {}
}
