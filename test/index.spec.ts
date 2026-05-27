import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import IndexPage from '~/pages/index.vue';

describe('pages/index.vue', () => {
  it('renders the page heading', async () => {
    const wrapper = await mountSuspended(IndexPage);
    expect(wrapper.find('h1').text()).toContain('Dice');
  });

  it('renders the API URL link', async () => {
    const wrapper = await mountSuspended(IndexPage);
    const link = wrapper.find('a[href="https://dice-api.genzouw.com/v1/dice"]');
    expect(link.exists()).toBe(true);
  });
});
