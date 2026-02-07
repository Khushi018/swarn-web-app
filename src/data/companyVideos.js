// Company videos dataset
// Uses shared video data from sharedReelsExploreVideos.js
// Edit sharedReelsExploreVideos.js to change which videos appear here

import { raw, transformVideos } from './sharedReelsExploreVideos.js';

export const companyVideos = transformVideos(raw);


