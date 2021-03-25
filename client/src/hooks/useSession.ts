import useSWR from 'swr';

import { endpoint } from '@services/mvc';

const fetcher = (url: string) => {
    return window.fetch(url).then((res) => res.json());
};

export const useSession = () => {
    const { data, error } = useSWR(`${endpoint}auth/session`, fetcher);
    return {
        user: data,
        isLoading: !error && !data,
        error,
    };
};