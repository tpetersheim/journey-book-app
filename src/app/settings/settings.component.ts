import { Component } from '@angular/core';
import { SettingsService } from './../core/settings.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {
  private fontIndex: number;

  constructor(private settings: SettingsService) {
    this.loadSettings();
  }

  incrementFont() {
    if (this.fontIndex < 7) {
      this.fontIndex++;
      this.settings.setFontIndex(this.fontIndex);
    }
  }

  decrementFont() {
    if (this.fontIndex > 1) {
      this.fontIndex--;
      this.settings.setFontIndex(this.fontIndex);
    }
  }

  private loadSettings() {
    this.settings.getFontIndex().subscribe(index => this.fontIndex = index);
  }
}
