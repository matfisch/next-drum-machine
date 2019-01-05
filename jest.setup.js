/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { setConfig } from 'next/config';

require('dotenv').config({ path: `${__dirname}/.env.test` });

configure({ adapter: new Adapter() });

// Mock next.config.js
setConfig({
  publicRuntimeConfig: {},
});
