import { html } from '@skhemata/skhemata-base'
import { SkhemataCrowdfundingManagerSection } from './SkhemataCrowdfundingManagerSection';

export class SkhemataCrowdfundingManagerRewards extends SkhemataCrowdfundingManagerSection{
  
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
    const repeatedFields = [
      {
        type: 'textbox',
        attributes: {
          name: "amount",
          label: 'Contribution Amount',
          description: 'Set your reward amount you want to receive from backers.',
          required: 'true',
          placeholder: "0",
          type: "number"
        }
      },
      {
        type: 'textbox',
        attributes: {
          name: "name",
          label: 'Name',
          description: 'Create a title that best describes your reward is offering.',
          required: 'true',
          placeholder: "Title for your reward",
        } 
      },
      {
        type: 'quill',
        attributes: {
          name: "description",
          label: 'Description',
          description: 'Describe the details of your reward. You can specify your info about what the backers will be receiving after they claim this reward.',
          required: 'true',
        } 
      },
    ];

    return html`
      <sf-form id="form" horizontal>
        <div class="panel is-primary">
          <p class="panel-heading">
            Rewards
          </p>
          <div class="panel-block">
            <sf-toggle
              class="control"
              description="Choose whether to use pagination for the rewards"
              onText="Toggle pagination rewards ON"
              offText="Toggle pagination rewards OFF"
              label="Pagination Rewards"
              name="pagination_rewards"
            >
            </sf-toggle>
          </div>
          <div class="panel-block">
            <sf-repeat
              description="Please enter your reward or pledge levels for this project. Note that you can add as many reward levels as you wish. The reward levels are either non-tangible or tangible, (physical and shippable)."
              label="Rewards"
              name="rewards"
              rowName="Reward"
              addRowButtonText="Add Reward"  
              removeRowButtonText="Remove Reward"  
              .repeatedFields=${repeatedFields}
              rowLimit="5"
            >
            </sf-repeat>
          </div>
        </div>
      </sf-form>
    `;
  }
}