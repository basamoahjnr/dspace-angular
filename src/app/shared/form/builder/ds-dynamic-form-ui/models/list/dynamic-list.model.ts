import {
  AUTOCOMPLETE_OFF, ClsConfig, DynamicInputModel, DynamicInputModelConfig,
  serializable
} from '@ng-dynamic-forms/core';
import { Observable } from 'rxjs/Observable';
import { PageInfo } from '../../../../../../core/shared/page-info.model';

export const DYNAMIC_FORM_CONTROL_TYPE_LIST = 'TYPELIST';

export interface DynamicListModelConfig extends DynamicInputModelConfig {
  authorityMetadata: string;
  authorityName: string;
  authorityScope: string;
  minChars: number;
  value: any;
}

export class DynamicListModel extends DynamicInputModel {

  @serializable() authorityMetadata: string;
  @serializable() authorityName: string;
  @serializable() authorityScope: string;
  @serializable() minChars: number;
  @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_LIST;

  constructor(config: DynamicListModelConfig, cls?: ClsConfig) {

    super(config, cls);

    this.autoComplete = AUTOCOMPLETE_OFF;
    this.authorityMetadata = config.authorityMetadata;
    this.authorityName = config.authorityName;
    this.authorityScope = config.authorityScope;
    this.minChars = config.minChars;
  }

}
