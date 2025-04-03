import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone/index.mjs';
import resizeObserver from 'resize-observer-polyfill';

global.ResizeObserver = resizeObserver;

setupZoneTestEnv();
