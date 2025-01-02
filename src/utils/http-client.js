import { API_BASE_URL } from '@/config';
import { AuthHeader } from './auth.utils';
import axios from 'axios';
const baseURL = API_BASE_URL;

export const GetApiData = async (endpoint, method, payload, secured) => {
    let headers = AuthHeader();
    let apiOptions = { url: baseURL + endpoint }
    if (method !== '') apiOptions.method = method
    if (payload != null) apiOptions.data = payload
    if (secured !== false) apiOptions.headers = headers
    return await axios(apiOptions);
}

