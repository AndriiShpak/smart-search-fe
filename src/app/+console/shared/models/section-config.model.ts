import { ConsoleRoutesEnum } from '@console-shared/enums';

export interface SectionConfigModel {
  text: string;
  icon: string;
  route?: ConsoleRoutesEnum;
}
