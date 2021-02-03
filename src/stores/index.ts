import { writable } from 'svelte/store';

function createStories() {
  const { subscribe, set } = writable([]);

  return {
    subscribe,
    setData: (data: any[]) => set(data),
  };
}

function createFeatures() {
  const { subscribe, set } = writable([]);

  return {
    subscribe,
    setData: (data: any[]) => set(data),
  };
}

function createPlans() {
  const { subscribe, set } = writable([]);

  return {
    subscribe,
    setData: (data: any[]) => set(data),
  };
}

export const stories = createStories();
export const features = createFeatures();
export const plans = createPlans();
