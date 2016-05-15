import {Component, Input} from '@angular/core';

import {GameStateService} from "../../services/game-state.service";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'control-panel',
  template: require('./control-panel.component.html'),
  styles: [require('./control-panel.component.css')],
  directives: [
    IconComponent
  ]
})
export class ControlPanelComponent {
  @Input() timeSpent: number = 0;
  @Input() minesCount: number = 0;
  
  gameStateService: GameStateService;

  constructor(gameStateService: GameStateService) {
    this.gameStateService = gameStateService;
  }
  
  startNewGame(): void {
    this.gameStateService.startNewGame();
  }

  openSettings(): void {
    this.gameStateService.openSettings();
  }
}
