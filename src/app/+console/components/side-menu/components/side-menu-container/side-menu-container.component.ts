import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  SIDE_MENU_MAIN_SECTIONS,
  SIDE_MENU_VALIDATION_SECTIONS,
  SIDE_MENU_ACCOUNT_SECTIONS,
} from '../../../../console.constants';
import { SectionConfigModel } from '../../../../models';

@Component({
  selector: 'app-side-menu-container',
  templateUrl: './side-menu-container.component.html',
  styleUrls: ['./side-menu-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuContainerComponent {
  public mainSections: SectionConfigModel[] = SIDE_MENU_MAIN_SECTIONS;
  public validationSections: SectionConfigModel[] = SIDE_MENU_VALIDATION_SECTIONS;
  public accountSections: SectionConfigModel[] = SIDE_MENU_ACCOUNT_SECTIONS;

  public logoutSection: SectionConfigModel = {
    text: 'auth.logout',
    icon: 'power_settings_new',
  };
}
