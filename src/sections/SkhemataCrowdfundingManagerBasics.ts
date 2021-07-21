import { html } from 'lit-element'
import { SkhemataCrowdfundingManagerSection } from './SkhemataCrowdfundingManagerSection';

export class SkhemataCrowdfundingManagerBasics extends SkhemataCrowdfundingManagerSection{
  
  constructor(){
    super();
    this.translations = {
      name: {
        description: 'Create a unique title for your campaign to engage users.',
      },
      blurb: {
        description: 'The campaign blurb will appear in your campaign\'s thumbnail and at the top of your campaign page.',
      },
      location: {
        description: 'Choose the location of your campaign.'
      },
      fundingMode: {
        description: `
        Choose between the two funding modes of your choice. If the campaign has no end date (continuous), the Keep it all funding mode will be the default.
        Keep it all - Keep all the funds contributed even if the goal isn't met.
        All or nothing - Keep the funds contributed if the funded goal is met`
      }
    };
  }
 
  render(){
    return html`
          <sf-form id="form" horizontal>
          <div class="panel is-primary">
            <p class="panel-heading">
              Basics
            </p>
            <div class="panel-block">
              <sf-dropzone
                class="control"
                label="Featured Image"
                name="featured_image"
                description="This image will be used for the campaign card thumbnail and the featured image on the campaign page if the video url is not defined. Image resolution requirement: 1336 x 1002."
              >
              </sf-dropzone>
            </div>
            <div class="panel-block">
            <sf-textbox
              class="control"
              name="name"
              maxlength="60"
              label="Title"
              placeholder="title"
              value=${this.campaign.name}
              required
              errormessage="Title is required"
              description=${this.translations.name.description}
            ></sf-textbox>
            </div>
            <div class="panel-block">
            <sf-textbox
              class="control"
              name="blurb"
              label="Blurb"
              placeholder="blurb"
              value=${this.campaign.blurb}
              description=${this.translations.blurb.description}
            ></sf-textbox>
            </div>
            <div class="panel-block">
            <sf-dropdown
              class="control"
              name="raise_mode_id"
              label="Funding Mode"
              placeholder=""
              value=${this.campaign.raise_mode_id}
              description=${this.translations.fundingMode.description}
            >
              <option value="1">Keep it All Funding Mode</option>
              <option value="2">All  or Nothing Funding Mode</option>
            </sf-dropdown>
            </div>
            <div class="panel-block">
            <sf-autocomplete
              class="control"
              name="location"
              label="Location"
              placeholder="Select a location"
              api=${`${this.api}/service/restv1/location/cities`}
              description=${this.translations.location.description}
            ></sf-textbox>
            </div>
            <div class="panel-block">
            <sf-dropdown
              class="control"
              label="Category"
              description="Pick a category for your campaign. Do not worry! You can change it later if you decide that it is not the category for you."
              name="category"
            >
            </sf-dropdown>
            </div>
          </panel>
          </sf-form>
    `;
  }
}