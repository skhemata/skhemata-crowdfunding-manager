import { html } from '@skhemata/skhemata-base';
import { SkhemataCrowdfundingManagerSection } from './SkhemataCrowdfundingManagerSection';

export class SkhemataCrowdfundingManagerDetails extends SkhemataCrowdfundingManagerSection{

  constructor(){
    super();
    this.translations = {
      description: 'Share more about what you are raising funds to do and how you plan to pull it off. It is up to you to make the case for your project.'
    }
  }

  render(){
    return html`
      <sf-form id="form" horizontal=${this.horizontal}>
        <div class="panel is-primary">
          <p class="panel-heading">
            Details
          </p>
          <div class="panel-block">
            <sf-quill
              class="control"
              name="name"
              label="Description"
              placeholder="Type something"
              value=${this.campaign.description}
              required
              errormessage="Description is required"
              description=${this.translations.description}
            ></sf-quill>
          </div>
          <div class="panel-block">
            <sf-repeat
              label="Links (Optional)"
              name="repeat"
              description="Add links related to your campaign to gain exposure and trust. It is suggested that most of the links are filled out. You can have a maximum of 4 links."
              addRowButtonText="Add Link"  
              removeRowButtonText="Remove Link"  
              rowLimit="3"
            >
              <sf-textbox
                name="url"
                maxlength="60"
                label="Url"
                placeholder="Url"
              >
              </sf-textbox>
              <sf-textbox
                name="text"
                maxlength="60"
                label="Text"
                placeholder="Link Text"
              ></sf-textbox>
            </sf-repeat>
          </div>
        </div>
      <sf-form>
    `;
  }
}