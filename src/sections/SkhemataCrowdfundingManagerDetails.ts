import { html} from 'lit-element'
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
        </div>
      <sf-form>
    `;
  }
}