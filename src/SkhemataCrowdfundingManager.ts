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
  files = {};
  @property({ type: Object})
  links = {};

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

  saveCampaign = async () => {
    const newData: any = {};

    const section = this.shadowRoot.querySelector(`#${this.currentStep}[skhemata]`);
    if(this.validateCampaign()){
      let companyInfo = {
        person_id: this.data['managers'][0]['id'],
      };

      // for(const section of this.sections()){
        Object.entries(section['form'].data).forEach(([name, value]) => {
          // based on the names of the data, do specialty parsing
          if(name === 'featured_image'){
            this.uploadImage(3, value);
          } else if(name === 'top_header_image'){
            this.uploadImage(5, value);
          } else if(name === 'profile_type_view_id' || name === 'toggle_profile_type_view_advance') {
          
          } else if(name === 'company_name'){
            companyInfo['name'] = value;
          } else if(name === 'company_description'){
            companyInfo['description'] = value;
          } else if(name === 'campaign_links') {
            let links = {};
            let url = '';
            let body = {};
            let requestQueue = [];

            // Check if there has been a changed value for campaign links
            if(Array.isArray(value)){

              this.data['links']?.forEach(link => {
                if(link.region_id == 2) {
                  links[link.id] = link;
                }
              });

              // Determine what action to perform based on value content
              value.forEach( link => {
                // Check if ID key exists inside our incoming value
                // if it doesn't exist, post it.
                // otherwise, update it
                if(!('id' in link)) {
                  url = `${this.api.url}/campaign/${this.campaignId}/resource/link`;
                  body = {
                    ...link,
                    "resource": link['uri'],
                    "label": link['uri_text'],
                    "resource_content_type": "generic",
                    "region_id": 2,
                    "resource_type": "link"
                  }

                  requestQueue.push(this.sendRequest(url, 'post', JSON.stringify(body)));
                } else {
                  // Check if there are changes in the object
                  if(links[link.id]['uri_text'] != link.uri_text || links[link.id]['uri'] != link.uri) {
                    url = `${this.api.url}/campaign/${this.campaignId}/resource/link/${link.id}`;
                    body = {
                      ...link,
                      "resource": link['uri'],
                      "label": link['uri_text'],
                      "default_protocol": "http://",
                    };

                    requestQueue.push(this.sendRequest(url, 'put', JSON.stringify(body)));

                  }
                }
              })

              // Delete link, if current links don't contain previous ones
              Object.keys(links).forEach(key => {
                let deletable = true;
                for(let i = 0; i < value.length; i++ ) {
                  if(value[i].id == key) {
                    deletable = false;
                  }
                }
                
                if(deletable) {
                  url = `${this.api.url}/campaign/${this.campaignId}/resource/link/${key}`;
                  requestQueue.push(this.sendRequest(url, 'delete', JSON.stringify({id: key})));

                }
              })           

              if(requestQueue.length > 0) {
                Promise.all(requestQueue).then(async () => {
                  await this.getCampaignData();
                }).then(() => {
                  section['form'].data['campaign_links'] = this.links['2'];
                  console.log(section['form'].data['campaign_links']);
                });
              }

            }

          } else if(name === 'personal_links') {
            let links = {};
            let url = '';
            let body = {};
            let requestQueue = [];

            // Check if there has been a changed value for campaign links
            if(Array.isArray(value)){
              this.data?.['managers']?.[0]?.person_websites?.forEach(link => {
                links[link.id] = link;
              });

              // Determine what action to perform based on value content
              value.forEach( link => {
                // Check if ID key exists inside our incoming value
                // if it doesn't exist, post it.
                // otherwise, update it
                if(!('id' in link)) {
                  url = `${this.api.url}/account/website`;
                  body = {
                    ...link,
                    "resource": link['uri'],
                    "label": link['uri_text'],
                    "person_id": this.data['managers'][0]['id']
                  }
                  requestQueue.push(this.sendRequest(url, 'post', JSON.stringify(body)));
                } else {
                  // Check if there are changes in the object
                  console.log(links);
                  console.log(link);
                  if(links[link.id]['uri_text'] != link.uri_text || links[link.id]['uri'] != link.uri) {
                    url = `${this.api.url}/account/website/${link.id}`;
                    requestQueue.push(this.sendRequest(url, 'put', JSON.stringify({...link, 'id': link.id})));

                  }
                }
              })

              //after typing one time, it breaks and input is not tracked anympre
              // Delete link, if current links don't contain previous ones
              Object.keys(links).forEach(key => {
                let deletable = true;
                for(let i = 0; i < value.length; i++ ) {
                  if(value[i].id == key) {
                    deletable = false;
                  }
                }
                
                if(deletable) {
                  url = `${this.api.url}/account/website/${key}`;
                  requestQueue.push(this.sendRequest(url, 'delete', JSON.stringify({id: key})));

                }
              })           

              if(requestQueue.length > 0) {
                Promise.all(requestQueue).then(async () => {
                  await this.getCampaignData();
                }).then(() => {
                  section['form'].data['personal_links'] = this.links['personal'];
                  console.log(section['form'].data['personal_links']);
                });
              }

            }
          
          } else if(name === 'individual_profile_image'){

            const formData = new FormData();
            formData.append('resource_content_type', 'image');
            formData.append('person_id', this.data['managers'][0]['id']);
            formData.append('resource', <any>value);
            let method = 'post';
            let url = `${this.api.url}/account/resource/file/`;
            if(this.data['managers'][0]['person_files']) {
              for(let i = 0; i< this.data['managers'][0]['person_files'].length; i++){
                if(!value) {
                  url = `${this.api.url}/account/resource/file/${this.data['managers'][0]['person_files'][i].id}`
                  method = 'delete'
                } else {
                  url = `${this.api.url}/account/resource/file/${this.data['managers'][0]['person_files'][i].id}`
                  method = 'put';
                }
        
              }
            }
            this.sendRequest(url, method, formData);
          
          } else if(name === 'company_profile_image'){
            const formData = new FormData();
            formData.append('resource_content_type', 'image');
            formData.append('business_organization_id', this.data['business_organizations'][0]['id']);
            formData.append('resource', <any>value);
            let method = 'post';
            let url = `${this.api.url}/account/resource/file/`;
            if(this.data['business_organizations'][0]['business_files']) {
              for(let i = 0; i< this.data['business_organizations'][0]['business_files'].length; i++){
                if(!value) {
                  url = `${this.api.url}/account/resource/file/${this.data['business_organizations'][0]['business_files'][i].id}`
                  method = 'delete'
                } else {
                  url = `${this.api.url}/account/resource/file/${this.data['business_organizations'][0]['business_files'][i].id}`
                  method = 'put';
                }
        
              }
            }
            this.sendRequest(url, method, formData);
          } else {
            newData[name] = value
          }
        })

        if(section['form'].data['profile_type_id'] == 2) {
          console.log(section['form'].data['profile_type_id'])
          if(this.data['business_organizations'] == null) {
            console.log(this.data['business_organizations'])

            await this.sendRequest(`${this.api.url}/account/business`, 'post', JSON.stringify(companyInfo));
            await this.getCampaignData();
          } else {
            console.log(companyInfo)
            this.sendRequest(`${this.api.url}/account/business/${this.data['business_organizations'][0].business_organization_id}`, 'put', JSON.stringify(companyInfo));
          }
        }

        if(section['form'].data['business_websites']){
            let value = section['form'].data['business_websites'];
            let links = {};
            let url = '';
            let body = {};
            let requestQueue = [];
            // Have to create business organization first if its null
            
            // Check if there has been a changed value for campaign links
            if(Array.isArray(value)){
              this.data['business_organizations'][0].business_websites?.forEach(link => {
                links[link.id] = link;
              });

              const organizationId = this.data['business_organizations'][0].business_organization_id;
              // Determine what action to perform based on value content
              value.forEach( link => {
                // Check if ID key exists inside our incoming value
                // if it doesn't exist, post it.
                // otherwise, update it
                if(!('id' in link)) {
                  url = `${this.api.url}/account/website`;
                  body = {
                    ...link,
                    "business_organization_id": organizationId
                  }
                  requestQueue.push(this.sendRequest(url, 'post', JSON.stringify(body)));
                } else {
                  // Check if there are changes in the object
                  console.log(links);
                  console.log(link);
                  if(links[link.id]['uri_text'] != link.uri_text || links[link.id]['uri'] != link.uri) {
                    url = `${this.api.url}/account/website/${link.id}`;
                    body = {
                      ...link,
                      "profile_link_default_protocol": "http://",
                      "business_organization_id": organizationId,
                      "uri_id": link.id
                    }
                    requestQueue.push(this.sendRequest(url, 'put', JSON.stringify(body)));
                  }
                }
              })

              // Delete link, if current links don't contain previous ones
              Object.keys(links).forEach(key => {
                let deletable = true;
                for(let i = 0; i < value.length; i++ ) {
                  if(value[i].id == key) {
                    deletable = false;
                  }
                }
                
                if(deletable) {
                  url = `${this.api.url}/account/website/${key}?business_organization_id=${organizationId}`;
                  requestQueue.push(this.sendRequest(url, 'delete', JSON.stringify({})));

                }
              })           

              if(requestQueue.length > 0) {
                Promise.all(requestQueue).then(async () => {
                  await this.getCampaignData();
                }).then(() => {
                  section['form'].data['business_websites'] = this.links['business'];
                  console.log(section['form'].data['business_websites']);
                });
              }

            }
        }
        
        if(section['form'].data['end_date'] && section['form'].data['end_time'] ) {
          newData['ends'] = `${section['form'].data['end_date']} ${section['form'].data['end_time']}`;
        } else if(section['form'].data['end_date']) {
          newData['ends'] = section['form'].data['end_date']+ this.campaign.data['ends_date_time'].substring(10);
        } else if(section['form'].data['end_time']) {
          newData['ends'] = this.campaign.data['ends_date_time'].substring(0,10) + section['form'].data['end_time'];
        }

        if(section['form'].data['start_date'] && section['form'].data['start_time'] ) {
          newData['starts'] = `${section['form'].data['start_date']} ${section['form'].data['start_time']}`;
        } else if(section['form'].data['start_date']) {
          newData['starts'] = section['form'].data['start_date']+ this.campaign.data['starts_date_time'].substring(10);
        } else if(section['form'].data['start_time']) {
          newData['starts'] = this.campaign.data['starts_date_time'].substring(0,10) + section['form'].data['start_time'];
        }
      this.campaign?.save(newData);
      return true;
    } else {
      return false;
    }
  }
  // /api/service/restv1/account/resource/file/
  // https://coral.thrinacia.com/api/service/restv1/account/resource/file/1
  uploadImage(region_id, value) {
    const formData = new FormData();
    formData.append('resource_content_type', 'image');
    formData.append('region_id', region_id);
    formData.append('resource', <any>value);
    let method = 'post';
    let url = `${this.api.url}/campaign/${this.campaignId}/resource/file/`;
    if(this.data['files']) {
      for(let i = 0; i< this.data['files'].length; i++){
        if(!value) {
          url = `${this.api.url}/campaign/${this.campaignId}/resource/file/${this.data['files'][i].id}`
          method = 'delete'
        } else if(this.data['files'][i].region_id == region_id) {
          url = `${this.api.url}/campaign/${this.campaignId}/resource/file/${this.data['files'][i].id}`
          method = 'put';
        }

      }
    }
    
    this.sendRequest(url, method, formData)
  }

  async sendRequest(url, method, formData) {
    await fetch(url, {
      method: method,
      headers: {
        'x-auth-token': this.campaign?.api.authToken
      },
      body: formData
    })

    // if(method == 'put' || method == 'post' || method =='delete') {
    //   await this.getCampaignData();
    // }
  }

  async updateValues(data, request, ) {
    await request;
    await this.getCampaignData();

    data['campaign_links'] = this.links['2'];

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

  sections() {
    const currentNodes = this.shadowRoot.querySelectorAll('[skhemata]');
    return Array.from(currentNodes);
  }

  async firstUpdated(){
    if(!this.campaign && this.api){
        this.skhemata = new Skhemata(this.api.url);
        await this.skhemata.init()

        this.getCampaignData();
    }  
    super.firstUpdated();
  }

  async getCampaignData() {
    if(this.campaignId){
      const campaign = await this.skhemata?.getCampaign(this.campaignId)
      this.campaign = campaign;
      this.data = {...campaign.data};
      
      console.log(this.data)

      for(const section of this.sections()){
        section['campaign'] = this.data;
      }

      this.data['settings']?.forEach(setting => {
        this.settings[setting.name] = setting.value;
      });

      this.files = {}
      this.data['files']?.forEach(file => {
        if(file.region_id == 3) {
          this.files[`${file.region_id}`] = this.api['base'] + '/image/campaign_detail_large/' + file.path_external
        } else if (file.region_id == 5) {
          this.files[`${file.region_id}`] = this.api['base'] + '/image/campaign_top_header_image/' + file.path_external
        }
      });

      this.links = {};
      this.data['links']?.forEach(link => {
        if(link.region_id == 2) {
          if(!this.links[`${link.region_id}`]) {
            this.links[`${link.region_id}`] = [];
          }
          this.links[`${link.region_id}`].push({...link});
        }
      });

      this.data?.['managers']?.[0]?.person_websites?.forEach(link => {
        if(!this.links['personal']) {
          this.links['personal'] = [];
        }
        this.links['personal'].push({...link});
      });

      this.data['business_organizations'][0].business_websites?.forEach(link => {
        if(!this.links['business']) {
          this.links['business'] = [];
        }
        this.links['business'].push({...link})
      });

      console.log(this.links);
      // console.log(this.files);
      this.requestUpdate();
    }

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
          <skhemata-crowdfunding-manager-basics id="basics" class="${this.steps[this.currentStepId].name == "basics" ? 'visible' : 'hidden'}" .campaign=${this.data} .files=${this.files} .api=${this.api} skhemata></skhemata-crowdfunding-manager-basics>
          <skhemata-crowdfunding-manager-details id="details" class="${this.steps[this.currentStepId].name == "details" ? 'visible' : 'hidden'}" .campaign=${this.data} .links=${this.links} .api=${this.api} skhemata></skhemata-crowdfunding-manager-details>
          <skhemata-crowdfunding-manager-profile id="profile" class="${this.steps[this.currentStepId].name == "profile" ? 'visible' : 'hidden'}" .campaign=${this.data} .links=${this.links} .settings=${this.settings} .api=${this.api} skhemata></skhemata-crowdfunding-manager-profile>
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
