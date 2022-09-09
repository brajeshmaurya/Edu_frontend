import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'src/assets/enum/languages.enum';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  HELLO:string="Hello User"

  @Input() sidebarId: string = "sidebar";
  langs = Languages;
  currentLang = this.langs.en;
  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService,private translateService: TranslateService) {
    super();
  }
  public useLanguage(): void {
    this.translateService.setDefaultLang(this.currentLang);
  }
}
