import { html } from '@skhemata/skhemata-base'
import { property } from 'lit-element';
import { SkhemataCrowdfundingManagerSection } from './SkhemataCrowdfundingManagerSection';

export class SkhemataCrowdfundingManagerBasics extends SkhemataCrowdfundingManagerSection{
  
  @property({ type: String})
  base = null;
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
      fundingGoal: {
        description: `Your funding goal should be the minimum amount needed to complete the project and fulfill all rewards.`
      },
      fundingMode: {
        description: `
        Choose between the two funding modes of your choice. If the campaign has no end date (continuous), the Keep it all funding mode will be the default.
        Keep it all - Keep all the funds contributed even if the goal isn't met.
        All or nothing - Keep the funds contributed if the funded goal is met`
      },
      fundingDuration: {
        description: `Decide how long fundraising for your project will run for.`
      }
    };
  }

  getFeaturedImage() {
    if(this.campaign?.files) {
      for(let i = 0; i< this.campaign.files.length; i++){
        if(this.campaign.files[i].region_id == 3) {
          return this.base + '/image/campaign_detail_large/' + this.campaign.files[i].path_external
        }
      }

    }
    return null
  }

  getHeaderImage() {
    if(this.campaign?.files) {
      for(let i = 0; i< this.campaign.files.length; i++){
        if(this.campaign.files[i].region_id == 5) {
          return this.base + '/image/campaign_top_header_image/' + this.campaign.files[i].path_external
        }

      }

    }
    return null
  }

  render(){
    return html`
        <sf-form id="form">
          <div class="panel is-primary">
            <p class="panel-heading">
              Basics
            </p>
            <div class="panel-block">
              <sf-dropzone
                class="control"
                label="Featured Image"
                name="featured_image"
                horizontal
                imageurl="${this.getFeaturedImage()}"
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
              value=${this.campaign?.name}
              required
              horizontal
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
              horizontal
              value=${this.campaign?.blurb}
              description=${this.translations.blurb.description}
            ></sf-textbox>
            </div>
            <div class="panel-block">
              <sf-dropzone
                class="control"
                label="Top Header Image"
                name="top_header_image"
                horizontal
                imageurl="${this.getHeaderImage()}"
                description="This image will be used for the campaign card thumbnail and the featured image on the campaign page if the video url is not defined. Image resolution requirement: 1336 x 1002."
              >
              </sf-dropzone>
            </div>
            <div class="panel-block">
            <sf-dropdown
              class="control"
              name="raise_mode_id"
              label="Funding Mode"
              placeholder=""
              horizontal
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
              maplabel="name"
              mapvalue="id"
              horizontal
              .api=${this.api}
              description=${this.translations.location.description}
            ></sf-textbox>
            </div>
            <div class="panel-block">
            <sf-dropdown
              class="control"
              label="Category"
              horizontal
              description="Pick a category for your campaign. Do not worry! You can change it later if you decide that it is not the category for you."
              name="category"
            >
            </sf-dropdown>
            </div>
          </div>
          <div class="panel is-primary">
          <p class="panel-heading">
            Fundraising
          </p>
          <div class="panel-block">
            <div class="field is-horizontal">
              <div class="field-label column is-one-quarter" style="text-align: left">
                <label class="label">Funding Goals <span style="color: red">*</span></label>
                <p>${this.translations.fundingGoal.description}</p>
              </div>
              <div class="field-body column is-three-quarters">
                <div class="columns">
                  <div class="column is-half">
                    <sf-textbox
                      class="control"
                      name="funding_goal"
                      maxlength="60"
                      label="Funding Goal"
                      placeholder="0"
                      value=${this.campaign?.funding_goal}
                      required
                      errormessage="Funding goal is required"
                    ></sf-textbox>
                  </div>
                  <div class="column is-half">
                    <sf-dropdown
                      class="control"
                      label="Select your currency"
                      name="currency_id"
                    >
                    </sf-dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="panel-block">
            <div class="field is-horizontal">
              <div class="field-label column is-one-quarter" style="text-align: left">
                <label class="label">Campaign Funding Duration <span style="color: red">*</span></label>
                <p>${this.translations.fundingDuration.description}</p>
              </div>
              <div class="field-body column is-three-quarters">
                <div class="columns">
                  <div class="column is-half">
                    <sf-textbox
                      class="control"
                      name="campaign_duration"
                      maxlength="60"
                      label="Time Period"
                      placeholder="0"
                      value=${this.campaign?.funding_goal}
                      required
                      errormessage="Funding goal is required"
                    ></sf-textbox>
                  </div>
                  <div class="column is-half">
                    <sf-dropdown
                      class="control"
                      label="Type"
                      name="date_format"
                    >
                      <option value="0">Day</option>
                      <option value="1">Week</option>
                      <option value="2">Month</option>
                      <option value="3">Year</option>
                    </sf-dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </sf-form>
  `;
  }
}