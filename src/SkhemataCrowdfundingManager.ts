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

  @property({ type: Campaign }) campaign?: Campaign;
  @property({ type: Object})
  data = {};

  @property({ type: Boolean}) error = false;

  currentStep = 'basics';
  currentStepId = 0;
  settings = {};

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

    const section = this.shadowRoot.querySelector(`#${this.currentStep}[skhemata]`);

    if(this.validateCampaign()){
      // for(const section of this.sections()){
        Object.entries(section['form'].data).forEach(([name, value]) => {
          // based on the names of the data, do specialty parsing
          if(name === 'featured_image'){
            this.uploadImage(3, value);
          } else if(name === 'top_header_image'){
            this.uploadImage(5, value);
          } else if(name === 'profile_type_view_id' || name === 'toggle_profile_type_view_advance') {

          } else {
            data[name] = value
          }
        })
      // }
      this.campaign?.save(data)
      return true;
    } else {
      return false;
    }
  }

  uploadImage(region_id, value) {
    const formData = new FormData();
    formData.append('resource_content_type', 'image');
    formData.append('region_id', region_id);
    formData.append('resource', <any>value);
    let method = 'post';
    let url = `${this.api.url}/campaign/${this.campaignId}/resource/file/`;
    if(this.data['files']) {
      for(let i = 0; i< this.data['files'].length; i++){
        if(this.data['files'][i].region_id == region_id) {
          url = `${this.api.url}/campaign/${this.campaignId}/resource/file/${this.data['files'][i].id}`
          method = 'put';
        }
      }
    }
    
    fetch(url, {
      method: method,
      headers: {
        'x-auth-token': this.campaign?.api.authToken
      },
      body: formData
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  validateCampaign() {
    let valid = true;

    const section = this.shadowRoot.querySelector(`#${this.currentStep}[skhemata]`);
    section['form'].validate();
    if(!section['form'].valid){
      valid = false;
    }
    return valid
  }

  // get sections() {
  //   const elements: any[] = [];
  //   let children = [];
  //   const slot = this.shadowRoot ? this.shadowRoot.querySelector('slot') : null;
  //   const childNodes = slot ? slot.assignedNodes({ flatten: true }) : null;
  //   children = childNodes
  //     ? Array.prototype.filter.call(
  //         childNodes,
  //         node => node.nodeType === Node.ELEMENT_NODE
  //       )
  //     : [];
  //   const getChildren = (element: any) => {
  //     const elementChildren = element.childNodes
  //     ? Array.prototype.filter.call(
  //         element.childNodes,
  //         node => node.nodeType === Node.ELEMENT_NODE
  //       )
  //     : [];
  //     if(elementChildren.length > 0){
  //       for(const child of element.childNodes){
  //         getChildren(child)
  //       }
  //     } else if (element.form){
  //       elements.push(element);
  //     }
  //   }
  //   for(const child of children){
  //     getChildren(child);
  //   }
  //   return elements;
  // }

  sections() {
    const currentNodes = this.shadowRoot.querySelectorAll('[skhemata]');
    return Array.from(currentNodes);
  }

  async firstUpdated(){
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
              for(const section of this.sections()){
                section['campaign'] = this.campaign?.data;
              }
              this.data['settings']?.forEach(setting => {
                this.settings[setting.name] = setting.value;
              });
              this.requestUpdate()
            // }).catch((e) => console.log(e));
          }
        // });
      // }  
    }  
    super.firstUpdated();

  }

  setCurrentStep(id: number) {
    this.currentStepId = id;
    this.currentStep = this.steps[id].name;
    this.requestUpdate();
  }

  saveAndNavigate() {
    if(this.saveCampaign()){
      const nextStepId = this.currentStepId + 1;
      this.setCurrentStep(nextStepId);
    }
  }

  render() {
    if(this.campaign){
      return html`
      <ul class="steps has-content-centered">
        ${ this.steps.map((step, i) => 
          html`
          <li class="steps-segment  ${i == this.currentStepId ? 'is-active' : ''}" @click=${() => this.setCurrentStep(i)}>
            <span class="steps-marker">${i+1}</span>
            <div class="steps-content">
              <p class="is-size-4">${step.text}</p>
            </div>
          </li>`
          )
        }
  
      </ul>
  
        <div class="block" id="scfm-container">
          <skhemata-crowdfunding-manager-basics id="basics" class="${this.steps[this.currentStepId].name == "basics" ? 'visible' : 'hidden'}" .campaign=${this.data} base="${this.api['base']}" .api=${this.api} skhemata></skhemata-crowdfunding-manager-basics>
          <skhemata-crowdfunding-manager-details id="details" class="${this.steps[this.currentStepId].name == "details" ? 'visible' : 'hidden'}" .campaign=${this.data} .api=${this.api} skhemata></skhemata-crowdfunding-manager-details>
          <skhemata-crowdfunding-manager-profile id="profile" class="${this.steps[this.currentStepId].name == "profile" ? 'visible' : 'hidden'}" .campaign=${this.data} .settings=${this.settings} skhemata></skhemata-crowdfunding-manager-profile>
          <skhemata-crowdfunding-manager-rewards id="rewards" class="${this.steps[this.currentStepId].name == "rewards" ? 'visible' : 'hidden'}" .campaign=${this.data} skhemata></skhemata-crowdfunding-manager-rewards>
        <div>
       
        <div class="block is-pulled-right">
          <button class="button is-success" @click=${this.saveCampaign}>Save</button>
          <button class="button is-info" @click=${this.saveAndNavigate}>Next Step</button>
        </div>
      `;
    } else {
      return null;
    }
    
  }
}
