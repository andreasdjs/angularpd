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
  toggleSound: number = 1;
  delay: boolean = true;

  ngOnInit() {
    console.log("Init.");
    webPdExamples.init();
  }

  toggleDelay(): void {
    console.log('Delay: ', this.delay);
    let sendDelay = this.delay === true ? 1 : 0;
    Pd.send('delay', [sendDelay]);
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
    // console.log(patch);
    Pd.destroyPatch();
  }

  load(): void {
    console.log('Load patch');

    let patchName = "phasor8.pd";
    let path = "assets/patches/";

    console.log("Patchname: " + patchName);

    $.get(path + patchName, function(mainStr) {
      // let patch = Pd.loadPatch(mainStr)
      Pd.loadPatch(mainStr)
      webPdExamples.patchLoaded(mainStr) // callback
    })

  }

  onChange(){
    // console.log(this.toggleSound);
    // console.log(this.frequency);
    // Send freq to PD
    // Pd.send('freq', [this.frequency]);
  }

  onInput(event: any) {
    // console.log(event.value);
    //Send freq to PD live
    Pd.send('freq', [event.value]);
  }

}