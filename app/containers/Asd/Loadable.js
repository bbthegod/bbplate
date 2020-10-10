/**
 *
 * Asynchronously loads the component for Asd
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
