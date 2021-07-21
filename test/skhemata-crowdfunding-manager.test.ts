import { html, fixture, expect } from '@open-wc/testing';

import { SkhemataCrowdfundingManager } from '../src/SkhemataCrowdfundingManager.js';
import '../skhemata-crowdfunding-manager.js';

describe('SkhemataCrowdfundingManager', () => {
  it('can override the title via attribute', async () => {
    const el = await fixture<SkhemataCrowdfundingManager>(html`<skhemata-crowdfunding-manager title="attribute title"></skhemata-crowdfunding-manager>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<SkhemataCrowdfundingManager>(html`<skhemata-crowdfunding-manager></skhemata-crowdfunding-manager>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
