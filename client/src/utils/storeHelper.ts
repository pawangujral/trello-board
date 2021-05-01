export function removeStorageType(type: "local"| "session", key: string) {
    switch(type) {
        case "local": 
            localStorage.removeItem(key);
            break;
        case "session": 
            sessionStorage.removeItem(key);
            break;
        default:
            return false;
    }

}

export function getStorageType(type: "local"| "session", key: string) {
    switch(type) {
        case "local": 
            return localStorage.getItem(key);
            break;
        case "session": 
            return sessionStorage.getItem(key);
            break;
        default:
            return false;
    }
}

export function setStorageType(type: "local"| "session", key: string, data: string) {
    switch(type) {
        case "local": 
            localStorage.setItem(key, data);
            break;
        case "session": 
            sessionStorage.setItem(key, data);
            break;
        default:
            break;
    }
} 