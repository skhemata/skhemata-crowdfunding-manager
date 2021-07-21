import { html, LitElement, property } from 'lit-element';
import { Bulma } from 'skhemata-css';
import { Skhemata } from 'skhemata-api-client';
import { Campaign } from 'skhemata-api-client/dist/src/Campaign';

export class SkhemataCrowdfundingManager extends LitElement {

  @property({ type: Number }) campaignId?: number

  @property({ type: String }) api?: string

  @property({ type: Campaign }) campaign?: Campaign;

  @property({ type: Boolean}) error = false;

  @property({ type: Skhemata }) skhemata?: Skhemata;

  static styles = [
    Bulma
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

  firstUpdated(){
    if(this.api){
      this.skhemata = new Skhemata(this.api);
      this.skhemata.init()
      .then(() => {
        if(this.campaignId){
          this.skhemata?.getCampaign(this.campaignId)
          .then((campaign: Campaign ) => {
            this.campaign = campaign;
            console.log(campaign)
            for(const section of this.sections){
              section.campaign = this.campaign?.data;
            }
          }).catch((e) => console.log(e));
        }
      });
    }
  }

  render() {
    return html`
      <div class="block">
        <slot></slot>
      </div>
      <div class="block is-pulled-right">
        <button class="button is-primary" @click=${this.saveCampaign}>Save</button>
      </div>
    `;
  }
}
