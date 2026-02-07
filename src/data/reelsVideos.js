// Reels page videos dataset
// Uses shared video data from sharedReelsExploreVideos.js
// Edit sharedReelsExploreVideos.js to change which videos appear in Reels

import { raw, transformVideos } from './sharedReelsExploreVideos.js';

export const reelsVideos = transformVideos(raw);
