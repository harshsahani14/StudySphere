export const setItemWithExpiry = (key, value, ttl)=>{

    const now = new Date();

    // `ttl` is the time-to-live in milliseconds
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };

    localStorage.setItem(key, JSON.stringify(item));

}

export const getItemWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);

    // If the item doesn't exist, return null
    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    
    // Check if the item is expired
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
} 