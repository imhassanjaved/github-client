import axios from "axios";

export const api = async (url, method, body) => {
    try {
        let request = {};

        if (method === "POST" || method === "PUT") {
            request = { method, url, data: body };
        } else {
            request = { method, url, body };
        }

        const res = await axios(request);
        return res;

    } catch (err) {
        return err;
    }
};
