import { Component } from '@angular/core';
declare var $:any;
declare var Pd:any;
declare var webPdExamples:any;
declare var patch:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  patch: any;
  frequency = 220;
  attack: any = 50;
  toggleSound: number = 1;
  delay: boolean = true;
  delayTime: number = 400;
  squeaker: boolean = true;

  hhs1: number;
  hhs5: number;
  hhs9: number;
  hhs13: number;

  hihatpos1: boolean = false;
  hihatpos2: boolean = false;
  hihatpos3: boolean = false;
  hihatpos4: boolean = false;

  hihatpos5: boolean = false;
  hihatpos6: boolean = false;
  hihatpos7: boolean = false;
  hihatpos8: boolean = false;

  hihatpos9: boolean = false;
  hihatpos10: boolean = false;
  hihatpos11: boolean = false;
  hihatpos12: boolean = false;

  hihatpos13: boolean = false;
  hihatpos14: boolean = false;
  hihatpos15: boolean = false;
  hihatpos16: boolean = false;

  ngOnInit() {
    console.log("Init.");
    webPdExamples.init();
  }

  toggleDelay(): void {
    console.log('Delay: ', this.delay);
    let sendDelay = this.delay === true ? 1 : 0;
    Pd.send('delay', [sendDelay]);
  }

  toggleSqueaker(e): void {
    console.log("toggle squeaker");
    console.log(this.squeaker ? 1 : 0);
    console.log(e.checked ? 1 : 0);
    // Pd.send('squeaker', [(this.toggleSqueaker ? 1 : 0)]);
    Pd.send('squeaker', [(e.checked ? 1 : 0)]);
  }

  toggleSoundOnOff(): void {
    this.toggleSound = this.toggleSound !== 1 ? 1 : 0;
    Pd.send('sound', [this.toggleSound]);
  }

  start(): void {
    console.log('Start.');
    Pd.start()
  }

  stop(): void {
    console.log('Stop');
    Pd.stop();
  }

  destroy(): void {
    console.log('Destroy');
    // Pd.stop()
    Pd.destroyPatch();
  }

  load(): void {
    let patchName = "seq_phase08.pd";
    let path = "assets/patches/";
    console.log("Loading patch: " + patchName);

    $.get(path + patchName, function(mainStr) {
      Pd.loadPatch(mainStr)
      webPdExamples.patchLoaded(mainStr) // callback
    })
  }

  onChange(){
    console.log(this.hhs1);
    console.log(this.hihatpos1);
    // console.log(this.toggleSound);
    // console.log(this.frequency);
    // Pd.send('freq', [this.frequency]);
  }

  onInput(event: any) {
    Pd.send('freq', [event.value]);
  }

  phaseFreq(e): void {
    Pd.send('freq', [e.value]);
  }

  hht(n, e): void {
    Pd.send('hhs' + n, [(e.checked ? 1 : 0)]);
  }

  delayInc(): void {
    this.delayTime += 400; 
  }

  delayDec(): void {
    if (this.delayTime > 0){
      this.delayTime -= 400;   
    }
  }

}