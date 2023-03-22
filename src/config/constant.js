export const API_URL = "https://dev.api.peacemakerapp.com/api";
export const KEY = "YW1Gb1lXNTZZV2xpTG1GemJHRnRMbTFsYUdGeVFHZHRZV2xzTG1OdmJUb3lZV2RoYVc0PQ==";

export const ENDPOINT = {
  register: `${API_URL}/register`,
  login: `${API_URL}/login`,
  explore_provider: {
    getProviders: `${API_URL}/get-providers`,
    searchProviders: `${API_URL}/search_provider`,
  },
  affirmation: {
    get_all: `${API_URL}/affirmations`,
  },
  habitTracker: {
    getAll: `${API_URL}/habits`,
    create: `${API_URL}/habits`,
    show: `${API_URL}/habits/`,
    delete: `${API_URL}/habits/`,
    storeRemarks: `${API_URL}/habits/store-remark/`,
  },
  journal: {
    get: `${API_URL}/journal`,
  },
};
