import { html, css, CSSResult, property, SkhemataBase, unsafeHTML } from '@skhemata/skhemata-base';


import { Bulma } from '@skhemata/skhemata-css';
import { Skhemata } from '@skhemata/skhemata-api-client-js';
import { Campaign } from '@skhemata/skhemata-api-client-js/dist/src/Campaign';
import { BulmaSteps}  from './styles/BulmaSteps';

import { SkhemataCrowdfundingManagerBasics } from './sections/SkhemataCrowdfundingManagerBasics';
import { SkhemataCrowdfundingManagerDetails } from './sections/SkhemataCrowdfundingManagerDetails';
import { SkhemataCrowdfundingManagerProfile } from './sections/SkhemataCrowdfundingManagerProfile';
import { SkhemataCrowdfundingManagerRewards } from './sections/SkhemataCrowdfundingManagerRewards';



export class SkhemataCrowdfundingManager extends SkhemataBase {

  @property({ type: Number }) campaignId?: number

  // @property({ type: String }) api?: string

  @property({ type: Campaign }) campaign?: Campaign;
  @property({ type: Object})
  data = {};

  @property({ type: Boolean}) error = false;

  testCampaign = {
    "entry_id": 1,
    "entry_status_id": 2,
    "raise_mode_id": 2,
    "profile_type_id": 1,
    "currency_id": 30,
    "duration_type_id": 1,
    "name": "test",
    "blurb": "test",
    "description": "<p>test</p>",

  }

  // @property({ type: Skhemata }) skhemata?: Skhemata;

  currentStep = 'basics';
  steps = [
    {
      name: 'basics',
      text: 'Basics',
      component: 'skhemata-crowdfunding-manager-basics'
    },
    {
      name: 'details',
      text: 'Details',
      component: 'skhemata-crowdfunding-manager-details'
    },
    {
      name: 'profile',
      text: 'Profile',
      component: 'skhemata-crowdfunding-manager-profile'
    },
    {
      name: 'rewards',
      text: 'Rewards',
      component: 'skhemata-crowdfunding-manager-rewards'
    }
  ]

  static get scopedElements(){
    return {
      'skhemata-crowdfunding-manager-basics': SkhemataCrowdfundingManagerBasics,
      'skhemata-crowdfunding-manager-details': SkhemataCrowdfundingManagerDetails,
      'skhemata-crowdfunding-manager-profile': SkhemataCrowdfundingManagerProfile,
      'skhemata-crowdfunding-manager-rewards': SkhemataCrowdfundingManagerRewards,
    }
  }

  static styles = <CSSResult[]>[
    Bulma,
    BulmaSteps,
    css`
      .visible {
        display: block;
      }
      .hidden {
        display: none;
      }
    `
  ]

  constructor(){
    super();
    this.addEventListener('on-submit', () => {
      // this.handleSubmit();
    })
  }

  getCampaign = () => {
    fetch(`${this.api}/service/restv1/campaign/${this.campaignId}`)
    .then(res => res.json())
    .then(campaign => {
      this.campaign = campaign;

    }).catch(() => {
      this.error = true;
    })
  }

  saveCampaign = () => {
    const data: any = {};
    if(this.validateCampaign()){
      for(const section of this.sections){
        Object.entries(section.form.data).forEach(([name, value]) => {
          if(name === 'featured_image'){
            // upload the image
          } else {
            data[name] = value
          }
        })
      }
      this.campaign?.save(data)
    }
  }

  validateCampaign() {
    let valid = true;
    for(const section of this.sections){
      console.log(section);
      section.form.validate();
      if(!section.form.valid){
        valid = false;
      }
    }
    return valid
  }

  get sections() {
    const elements: any[] = [];
    let children = [];
    const slot = this.shadowRoot ? this.shadowRoot.querySelector('slot') : null;
    const childNodes = slot ? slot.assignedNodes({ flatten: true }) : null;
    children = childNodes
      ? Array.prototype.filter.call(
          childNodes,
          node => node.nodeType === Node.ELEMENT_NODE
        )
      : [];
    const getChildren = (element: any) => {
      const elementChildren = element.childNodes
      ? Array.prototype.filter.call(
          element.childNodes,
          node => node.nodeType === Node.ELEMENT_NODE
        )
      : [];
      if(elementChildren.length > 0){
        for(const child of element.childNodes){
          getChildren(child)
        }
      } else if (element.form){
        elements.push(element);
      }
    }
    for(const child of children){
      getChildren(child);
    }
    return elements;
  }

  async performUpdate(){

    if(!this.campaign && this.api){
      // if(this.api){
        this.skhemata = new Skhemata(this.api.url);
        await this.skhemata.init()

        // .then(() => {
          if(this.campaignId){
            const campaign = await this.skhemata?.getCampaign(this.campaignId)
            // .then((campaign: Campaign ) => {
              this.campaign = campaign;
              console.log(this.campaign)
              this.data = campaign.data;
              // for(const section of this.sections){
              //   section.campaign = this.campaign?.data;
              // }
              this.requestUpdate()
            // }).catch((e) => console.log(e));
          }
        // });
      // }  
    }  
    super.performUpdate();

  }

  setCurrentStep(name: string) {
    this.currentStep = name;
    this.requestUpdate();
  }

  renderComponent (name: String, stepName: String) {
    const templateString = `
    <div class="block ${stepName == this.currentStep ? 'visible' : 'hidden'}">
      <${name} .campaign=${this.campaign}"></${name}>
    <div>
    `;
    return html`
    <div class="block ${"basics" == this.currentStep ? 'visible' : 'hidden'}">
  <skhemata-crowdfunding-manager-basics .campaign=${this.campaign}></skhemata-crowdfunding-manager-basics>
  <div>`;
  }

  render() {
    return html`
    <ul class="steps has-content-centered">
      ${ this.steps.map((step, i) => 
        html`
        <li class="steps-segment  ${step.name == this.currentStep ? 'is-active' : ''}" @click=${() => this.setCurrentStep(step.name)}>
          <span class="steps-marker">${i+1}</span>
          <div class="steps-content">
            <p class="is-size-4">${step.text}</p>
          </div>
        </li>`
        )
      }

    </ul>
    <div class="block ${"basics" == this.currentStep ? 'visible' : 'hidden'}">
    <skhemata-crowdfunding-manager-basics .campaign=${this.data}></skhemata-crowdfunding-manager-basics>
    <div>
    <div class="block ${"details" == this.currentStep ? 'visible' : 'hidden'}">
      <skhemata-crowdfunding-manager-details .campaign=${this.data}></skhemata-crowdfunding-manager-details>
    <div>
     
     
      <div class="block is-pulled-right">
        <button class="button is-primary" @click=${this.saveCampaign}>Save</button>
      </div>
    `;
  }
}

// <div class="block ${"basics" == this.currentStep ? 'visible' : 'hidden'}">
// <skhemata-crowdfunding-manager-basics .campaign=${this.campaign ? this.campaign.data : {}}></skhemata-crowdfunding-manager-basics>
// <div>
// <div class="block ${"details" == this.currentStep ? 'visible' : 'hidden'}">
  // <skhemata-crowdfunding-manager-details .campaign=${this.campaign ? this.campaign.data : {}}}></skhemata-crowdfunding-manager-details>
// <div>
// 
// ${ this.steps.map((step) => 
  // this.renderComponent(step.component, step.name)
  //  )
//  }