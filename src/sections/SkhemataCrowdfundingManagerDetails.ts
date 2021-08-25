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
    const repeatedFields = [
      {
        type: 'textbox',
        attributes: {
          name: "uri",
          label: 'Url',
          placeholder: "Url"
        }
      },
      {
        type: 'textbox',
        attributes: {
          name: "uri_text",
          placeholder: "Link Text",
          label: 'Checkbox'
        }    
      }
    ];
    return html`
      <sf-form id="form" horizontal=${this.horizontal}>
        <div class="panel is-primary">
          <p class="panel-heading">
            Details
          </p>
          <div class="panel-block">
            <sf-quill
              class="control"
              name="description"
              label="Description"
              placeholder="Type something"
              value=${this.campaign.description}
              required
              errormessage="Description is required"
              description=${this.translations.description}
              campaignId=${this.campaign.id}
            ></sf-quill>
          </div>
          <div class="panel-block">
            <sf-repeat
              label="Links (Optional)"
              name="links"
              rowName="Link"
              description="Add links related to your campaign to gain exposure and trust. It is suggested that most of the links are filled out. You can have a maximum of 4 links."
              addRowButtonText="Add Link"  
              removeRowButtonText="Remove Link"  
              .repeatedFields=${repeatedFields}
              rowLimit="3"
            >
            </sf-repeat>
          </div>
          <div class="panel-block">
            <sf-textbox
              class="control"
              name="google_analytics_id"
              maxlength="60"
              label="Google Analytics ID (optional)"
              description="Copy your Google Analytics Tracking ID into this field. For example 'UA-XXXXX-Y'."
            ></sf-textbox>
          </div>
        </div>
      <sf-form>
    `;
  }
}