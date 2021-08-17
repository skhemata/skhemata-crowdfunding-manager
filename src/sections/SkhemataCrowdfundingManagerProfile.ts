import { html } from '@skhemata/skhemata-base';
import { SkhemataCrowdfundingManagerSection } from './SkhemataCrowdfundingManagerSection';

export class SkhemataCrowdfundingManagerProfile extends SkhemataCrowdfundingManagerSection{

  constructor(){
    super();
    this.translations = {
      description: 'Do not worry if you cannot think of anything to say you can change your bio later on.'
    }
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
      <sf-form id="form" horizontal=${this.horizontal}>
        <div class="panel is-primary">
          <p class="panel-heading">
            Profile
          </p>
          <div class="panel-block">
            <sf-dropzone
              class="control"
              label="Avatar"
              name="avatar"
              required="true"
              description="Your logo, photo or avatar image.  JPEG, PNG, GIF or BMP - 50MB file limit.  Image should be at least 200x200."
            >
            </sf-dropzone>
          </div>
          <div class="panel-block">
            <sf-textbox
              class="control"
              name="dname"
              maxlength="60"
              label="Display Name"
              placeholder="Name"
              value=${this.campaign.name}
              required
            ></sf-textbox>
          </div>
          <div class="panel-block">
            <sf-quill
              class="control"
              name="bio"
              label="Biography (Optional)"
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
              name="social_links"
              rowName="Link"
              description="Add social links to your profile. You can have a maximum of 5 links."
              addRowButtonText="Add Link"  
              removeRowButtonText="Remove Link"  
              .repeatedFields=${repeatedFields}
              rowLimit="5"
            ></sf-repeat>
          </div>
        </div>
      <sf-form>
    `;
  }
}