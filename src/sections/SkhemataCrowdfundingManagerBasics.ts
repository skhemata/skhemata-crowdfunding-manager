import { html,unsafeHTML } from '@skhemata/skhemata-base'
import { property } from 'lit-element';
import { SkhemataCrowdfundingManagerSection } from './SkhemataCrowdfundingManagerSection';

export class SkhemataCrowdfundingManagerBasics extends SkhemataCrowdfundingManagerSection{
  
  @property({ type: Object})
  files = {};

  @property({ type: Array})
  categories = [];

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

  // Generate links object
  // generate categories 



  render(){
    return html`
        <sf-form id="form">
          <div class="panel is-primary">
            <p class="panel-heading">
              Basics
            </p>
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
              <sf-dropzone
                class="control"
                label="Featured Image"
                name="featured_image"
                horizontal
                imageurl="${this.files['3']}"
                description="This image will be used for the campaign card thumbnail and the featured image on the campaign page if the video url is not defined. Image resolution requirement: 1336 x 1002."
              >
              </sf-dropzone>
            </div>
            <div class="panel-block">
              <sf-textbox
                class="control"
                name="name"
                maxlength="60"
                label="Video (Optional)"
                placeholder="Please enter your campaign video link"
                value=${this.campaign?.name}
                horizontal
                description="Copy & paste your youtube, vimeo or external video link to this field. This will be displayed as the featured video on the campaign page if the link is specified. Note that video link must be accessible publicly."
              ></sf-textbox>
            </div>
            <div class="panel-block">
              <sf-textbox
                class="control"
                name="name"
                maxlength="60"
                label="Thumbnail Video (Optional)"
                placeholder="Please enter your campaign video link"
                value=${this.campaign?.name}
                horizontal
                description="If thumbnail video link is specified it will replace the featured image of the campaign. Thumbnail video can be youtube, vimeo or external video link. Note that video link must be accessible publicly."
              ></sf-textbox>
            </div>
            <div class="panel-block">
              <sf-textarea
                class="control"
                name="blurb"
                label="Blurb"
                placeholder="blurb"
                horizontal
                required
                value=${this.campaign?.blurb}
                description=${this.translations.blurb.description}
              ></sf-textarea>
            </div>
            <div class="panel-block">
              <sf-dropzone
                class="control"
                label="Top Header Image"
                name="top_header_image"
                horizontal
                imageurl="${this.files['5']}"
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
              required
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
              name="city_id"
              label="Location"
              placeholder="Select a location"
              maplabel="name"
              mapvalue="id"
              horizontal
              selected=${this.campaign.cities? this.campaign.cities?.[0].city_full : ''}
              value=${this.campaign.cities?.[0].city_id}
              .api=${this.api}
              description=${this.translations.location.description}
            ></sf-textbox>
            </div>
            <div class="panel-block">
            <sf-dropdown
              class="control"
              label="Category"
              placeholder="Select a category"
              horizontal
              selected="${this.campaign.categories ? this.campaign.categories?.[0].name : ''}"
              value=${this.campaign.categories?.[0].category_id}
              description="Pick a category for your campaign. Do not worry! You can change it later if you decide that it is not the category for you."
              name="category_id"
            >
              ${
                this.categories.map(category => unsafeHTML(`
                <option value="${category.category_id}">
                  ${category.name}
                </option>`))
              }
            </sf-dropdown>
            </div>
          </div>
          <div class="panel is-primary">
          <p class="panel-heading">
            Fundraising
          </p>
          <div class="panel-block">
            <div class="field is-horizontal control">
              <div class="field-label column is-one-quarter" style="text-align: left">
                <label class="label">Funding Goals <span style="color: red">*</span></label>
                <p>${this.translations.fundingGoal.description}</p>
              </div>
              <div class="field-body column">
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
            <div class="field is-horizontal control">
              <div class="field-label column is-one-quarter" style="text-align: left">
                <label class="label">Campaign Funding Duration <span style="color: red">*</span></label>
                <p>${this.translations.fundingDuration.description}</p>
              </div>
              <div class="field-body column">

                <div class="columns">
                  <div class="column is-half">
                    <sf-date-picker
                      class="control"
                      name="start_date"
                      label="Start Date (PDT)"
                      value=${this.campaign?.starts_date_time?.slice(0,10)}
                      required
                    ></sf-date-picker>
                  </div>
                  <div class="column is-half">
                    <sf-time
                      class="control"
                      label="Time"
                      name="start_time"
                      required
                      value=${this.campaign?.starts_date_time?.slice(11,16)}
                    >
                    </sf-time>
                    
                  </div>
                </div>


                <div class="columns">
                  <div class="column is-half">
                    <sf-date-picker
                      class="control"
                      name="end_date"
                      label="End Date (PDT)"
                      value=${this.campaign?.ends_date_time?.slice(0,10)}
                      required
                    ></sf-date-picker>
                  </div>
                  <div class="column is-half">
                    <sf-time
                      class="control"
                      label="Time"
                      name="end_time"
                      required
                      value=${this.campaign?.ends_date_time?.slice(11,16)}
                    >
                    </sf-time>
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