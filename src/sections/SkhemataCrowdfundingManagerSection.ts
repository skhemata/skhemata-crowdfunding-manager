import { SkhemataBase, property, CSSResult } from '@skhemata/skhemata-base'
import {
  SkhemataForm,
  SkhemataFormButton,
  SkhemataFormTextbox,
  SkhemataFormDropdown,
  SkhemataFormDropzone,
  SkhemataFormAutocomplete,
  SkhemataFormTextarea,
  SkhemataFormQuill,
  SkhemataFormRepeat,
  SkhemataFormToggle,
  SkhemataFormDatePicker,
  SkhemataFormTime
} from '@skhemata/skhemata-form';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Campaign } from '@skhemata/skhemata-api-client-js/dist/src/Campaign';

import { Bulma } from '@skhemata/skhemata-css';
import { SharedStyles } from '../styles/SharedStyles';

export class SkhemataCrowdfundingManagerSection extends SkhemataBase {
  static get scopedElements() {
    return {
      'sf-form': SkhemataForm,
      'sf-textbox': SkhemataFormTextbox,
      'sf-textarea': SkhemataFormTextarea,
      'sf-dropdown': SkhemataFormDropdown,
      'sf-dropzone': SkhemataFormDropzone,
      'sf-button': SkhemataFormButton,
      'sf-toggle': SkhemataFormToggle,
      'sf-autocomplete': SkhemataFormAutocomplete,
      'sf-quill': SkhemataFormQuill,
      'sf-repeat': SkhemataFormRepeat,
      'sf-date-picker': SkhemataFormDatePicker,
      'sf-time': SkhemataFormTime

    }
  }

  static get styles(): CSSResult[] {
    return <CSSResult[]>[
      Bulma, SharedStyles

    ];
  }

  @property({ type: Object })
  campaign: any = {}

  @property({ type: Object })
  data: any = {}

  @property({ type: Object })
  settings: any = {}

  @property({ type: Object })
  links: any = {}

  @property({ type: HTMLElement })
  form: HTMLElement | null | undefined = null;

  @property({ type: Boolean })
  horizontal = false;

  @property({ type: Object })
  translations: any = {};

  async firstUpdated() {
    await super.firstUpdated();

    this.form = this.shadowRoot?.getElementById('form');
  }
}