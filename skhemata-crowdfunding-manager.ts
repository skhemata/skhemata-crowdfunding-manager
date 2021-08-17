import { SkhemataCrowdfundingManager } from './src/SkhemataCrowdfundingManager';
import { SkhemataCrowdfundingManagerBasics } from './src/sections/SkhemataCrowdfundingManagerBasics';
import { SkhemataCrowdfundingManagerDetails } from './src/sections/SkhemataCrowdfundingManagerDetails';
import { SkhemataCrowdfundingManagerRewards } from './src/sections/SkhemataCrowdfundingManagerRewards';
import { SkhemataCrowdfundingManagerProfile } from './src/sections/SkhemataCrowdfundingManagerProfile';

window.customElements.define('skhemata-crowdfunding-manager', SkhemataCrowdfundingManager);
window.customElements.define('skhemata-crowdfunding-manager-basics', SkhemataCrowdfundingManagerBasics);
window.customElements.define('skhemata-crowdfunding-manager-details', SkhemataCrowdfundingManagerDetails);
window.customElements.define('skhemata-crowdfunding-manager-rewards', SkhemataCrowdfundingManagerRewards);
window.customElements.define('skhemata-crowdfunding-manager-profile', SkhemataCrowdfundingManagerProfile);


