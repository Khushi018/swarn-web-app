// Explore page videos dataset
// Uses shared video data from sharedReelsExploreVideos.js
// Edit sharedReelsExploreVideos.js to change which videos appear in Explore

import { raw, transformVideos } from './sharedReelsExploreVideos.js';

export const exploreVideos = transformVideos(raw);
