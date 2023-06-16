// const HOST = "/web/src";
const HOST = "/src";

export const request = async (path, options = {}) => {
    try {
        const uri = `${HOST}/${path}`;
        const response = await fetch(uri, options);

        if (response.ok !== true) {
            throw new Error("API failed");
        }

        const json = await response.json();
        return json;
    } catch (e) {
        alert(e.message);
    }
};



