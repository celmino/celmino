
export const useGetSubdomain = (url = window.location.host) => {  
    const names = url.split('.');
    if (names.length === 3) {
        return names[0];
    } else {
        return null;
    }
};