/**
*
* Asynchronously loads the component for NewHomePage
*
*/

import { lazyLoad } from 'utils/loadable';

export const NewHomePage = lazyLoad(() => import('./index'), module => module.NewHomePage);