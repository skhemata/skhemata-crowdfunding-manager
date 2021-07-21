import { SkhemataCrowdfundingManager } from './src/SkhemataCrowdfundingManager';
import { SkhemataCrowdfundingManagerBasics } from './src/sections/SkhemataCrowdfundingManagerBasics';
import { SkhemataCrowdfundingManagerDetails } from './src/sections/SkhemataCrowdfundingManagerDetails';

window.customElements.define('skhemata-crowdfunding-manager', SkhemataCrowdfundingManager);
window.customElements.define('skhemata-crowdfunding-manager-basics', SkhemataCrowdfundingManagerBasics);
window.customElements.define('skhemata-crowdfunding-manager-details', SkhemataCrowdfundingManagerDetails);
