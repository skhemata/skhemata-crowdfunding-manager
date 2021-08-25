import { html } from '@skhemata/skhemata-base';
import { SkhemataCrowdfundingManagerSection } from './SkhemataCrowdfundingManagerSection';

export class SkhemataCrowdfundingManagerProfile extends SkhemataCrowdfundingManagerSection{

  profileTypeId = this.campaign.profile_type_id;
  advancedView = this.settings['toggle_profile_type_view_advance'];

  constructor(){
    super();
    this.translations = {
      description: 'Do not worry if you cannot think of anything to say you can change your bio later on.'
    }
  }
  updateSettings(data) {
    this.profileTypeId = data['profile_type_id'];
    this.advancedView = data['toggle_profile_type_view_advance'];
    console.log(data);
    this.requestUpdate();
  }

  render(){
    const repeatedFields = [
      {
        type: 'textbox',
        attributes: {
          name: "url",
          label: 'Url',
          placeholder: "Url",
          required: "true"
        }
      },
      {
        type: 'textbox',
        attributes: {
          name: "text",
          placeholder: "Link Text",
          label: 'Checkbox'
        }    
      }
    ];

    return html`
      <sf-form id="form" horizontal=${this.horizontal} @change=${(e) => this.updateSettings(e.detail.data)} >
        <div class="panel is-primary">
          <p class="panel-heading">
            Profile Settings
          </p>
          <div class="panel-block">
            <sf-dropdown
              class="control"
              description="You can modify your current profile or add a business organization profile for your company."
              name="profile_type_id"
              label="Type"
              value="${this.campaign.profile_type_id}"
            >
              <option value="1">Individual User Profile</option>
              <option value="2">Business Organization Profile</option>
            </sf-dropdown>
          </div>
          <div class="panel-block">
            <sf-toggle
              class="control"
              description="Enable this for more options to control the display of the individual and business organization profile."
              onText="Enable"
              offText="Disable"
              name="toggle_profile_type_view_advance"
              label="Toggle Advanced Display"
              value=${this.advancedView}
            >
            </sf-toggle>
          </div>

            <div class="panel-block ${this.advancedView ? 'visible': 'hidden'}">
              <sf-dropdown
                class="control"
                name="profile_type_view_id"
                label="Display Type"
                value=${this.settings['profile_type_view_id']}
                default="0"
              >
                <option value="0">Show Both Individual User and Business Organization Profile on Campaign</option>
                <option value="1">Only Show Business Organization Profile on Campaign</option>
                <option value="2">Only Show Individual User Profile on Campaign</option>

              </sf-dropdown>
            </div>
        </div>
        ${
          this.profileTypeId == 1 ?
          html`<div class="panel is-primary ">
          <p class="panel-heading">
            Individual Profile
          </p>
          <div class="panel-block">
            <sf-dropzone
              class="control"
              label="Avatar"
              name="individual_profile_image"
              description="Your logo, photo or avatar image.  JPEG, PNG, GIF or BMP - 50MB file limit.  Image should be at least 200x200."
            >
            </sf-dropzone>
          </div>
          <div class="panel-block">
            <sf-textbox
              class="control"
              name="m_fname"
              maxlength="60"
              label="First Name"
              placeholder="First Name"
              value=${this.campaign.managers ? this.campaign.managers[0].first_name : ''}
              required
            ></sf-textbox>
          </div>
          <div class="panel-block">
            <sf-textbox
              class="control"
              name="m_lname"
              maxlength="60"
              label="Last Name"
              placeholder="Last Name"
              horizontal="true"
              value=${this.campaign.managers ? this.campaign.managers[0].last_name : ''}
              required
            ></sf-textbox>
          </div>
          <div class="panel-block">
            <sf-textarea
              class="control"
              name="bio"
              label="Biography (Optional)"
              placeholder="Type something"
              value=${this.campaign.managers ? this.campaign.managers[0].bio : ''}
              required
              errormessage="Description is required"
              description=${this.translations.description}
            ></sf-textarea>
          </div>
          <div class="panel-block">
            <sf-repeat
              label="Links (Optional)"
              name="personal_links"
              rowName="Link"
              description="Add social links to your profile. You can have a maximum of 5 links."
              addRowButtonText="Add Link"  
              removeRowButtonText="Remove Link"  
              .repeatedFields=${repeatedFields}
              rowLimit="5"
            ></sf-repeat>
          </div>
        </div>` :
          html`
          <div class="panel is-primary">
          <p class="panel-heading">
            Company Profile
          </p>
          <div class="panel-block">
            <sf-textbox
              class="control"
              name="c_name"
              maxlength="60"
              label="Company Name"
              placeholder="Name"
              value=${this.campaign.business_organizations ? this.campaign.business_organizations[0].name : ''}
              required
            ></sf-textbox>
          </div>
          <div class="panel-block">
            <sf-dropzone
              class="control"
              label="Avatar"
              name="company_profile_image"
              description="Your logo, photo or avatar image.  JPEG, PNG, GIF or BMP - 50MB file limit.  Image should be at least 200x200."
            >
            </sf-dropzone>
          </div>
          <div class="panel-block">
            <sf-textarea
              class="control"
              name="bio"
              label="Description(Optional)"
              placeholder="Type something"
              value=${this.campaign.business_organizations ? this.campaign.business_organizations[0].description : ''}
              errormessage="Description is required"
              description="Provide a small description about the company"
            ></sf-textarea>
          </div>

          <div class="panel-block">
            <sf-repeat
              label="Links (Optional)"
              name="business_websites"
              rowName="Link"
              description="Add social links to your profile. You can have a maximum of 5 links."
              addRowButtonText="Add Link"  
              removeRowButtonText="Remove Link"  
              .repeatedFields=${repeatedFields}
              rowLimit="5"
            ></sf-repeat>
          </div>
        </div>`
        }
        
      <sf-form>
    `;
  }
}