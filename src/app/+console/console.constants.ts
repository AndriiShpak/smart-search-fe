import { SectionConfigModel } from './models';
import { ConsoleRoutesEnum } from './enums';

export const INTENTS_SECTION: SectionConfigModel = {
  text: 'intents.title',
  icon: 'emoji_objects',
  route: ConsoleRoutesEnum.INTENTS,
};
export const FILTER_SECTION: SectionConfigModel = {
  text: 'filters.title',
  icon: 'account_tree',
  route: ConsoleRoutesEnum.FILTERS,
};
export const SETTINGS_SECTION: SectionConfigModel = {
  text: 'settings.title',
  icon: 'settings',
  route: ConsoleRoutesEnum.SETTINGS,
};
export const ANALYTICS_SECTION: SectionConfigModel = {
  text: 'analytics.title',
  icon: 'trending_up',
  route: ConsoleRoutesEnum.ANALYTICS,
};
export const VALIDATION_SECTION: SectionConfigModel = {
  text: 'validations.title',
  icon: 'spellcheck',
  route: ConsoleRoutesEnum.VALIDATIONS,
};
export const ACCOUNT_SECTION: SectionConfigModel = {
  text: 'account.title',
  icon: 'account_circle',
  route: ConsoleRoutesEnum.ACCOUNT,
};

export const SIDE_MENU_MAIN_SECTIONS: SectionConfigModel[] = [
  INTENTS_SECTION,
  FILTER_SECTION,
  SETTINGS_SECTION,
];
export const SIDE_MENU_VALIDATION_SECTIONS: SectionConfigModel[] = [
  ANALYTICS_SECTION,
  VALIDATION_SECTION,
];
export const SIDE_MENU_ACCOUNT_SECTIONS: SectionConfigModel[] = [
  ACCOUNT_SECTION,
];
