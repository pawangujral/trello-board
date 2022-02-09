/**
 * FC to remove browser storage
 * @param {string} type - local | session
 * @param {string} key - stoage value
 * @return {boolean | undefined} false | undefined
 */
export function removeStorageType(
    type: 'local'| 'session',
    key: string) {
  switch (type) {
    case 'local':
      localStorage.removeItem(key);
      break;
    case 'session':
      sessionStorage.removeItem(key);
      break;
    default:
      return false;
  }
}

/**
 * FC to retrive storage value
 * @param {string} type - local | session
 * @param {string} key - stoage value
 * @return {boolean | undefined} false | undefined
 */
export function getStorageType(
    type: 'local'| 'session',
    key: string) {
  switch (type) {
    case 'local':
      return localStorage.getItem(key);
      break;
    case 'session':
      return sessionStorage.getItem(key);
      break;
    default:
      return false;
  }
}

/**
 * FC to set storage value
 * @param {string} type - local | session
 * @param {string} key - stoage value
 * @param {object} data - stringify object with information
 * @return {boolean | undefined} false | undefined
 */
export function setStorageType(
    type: 'local'| 'session',
    key: string,
    data: string) {
  switch (type) {
    case 'local':
      localStorage.setItem(key, data);
      break;
    case 'session':
      sessionStorage.setItem(key, data);
      break;
    default:
      return false;
  }
}
