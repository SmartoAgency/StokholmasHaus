import axios from 'axios';
import { mockPlannings, mockPlanningsByFloor } from './mock';

const isDev = window.location.href.match('localhost');

const baseUrl = '/wp-admin/admin-ajax.php';

export let flatsData = null;

export const getPlanningsList = () => {
    if (isDev) {
        return Promise.resolve({ data: mockPlannings });
    } else {
        const fd = new FormData();
        fd.append('action', 'getFlats');
        return axios.post(baseUrl, fd);
        // return axios.post(baseUrl, { action: 'getFlats' });
    }
};
// data-build
// data-section

export function getPlanningsListByFloor({ build, section, floor }) {
    if (isDev) {
        return Promise.resolve({ data: mockPlanningsByFloor });
    } else {
        const fd = new FormData();
        fd.append('build', build);
        fd.append('section', section);
        fd.append('floor', floor);
        fd.append('action', 'getFloor');
        return axios.post(baseUrl, fd);
    }
}

export async function getAllFlats() {
    const flatsData = await getPlanningsList();
    return flatsData.data;
    // localStorage.setItem('flats', JSON.stringify(flatsData.data));
}
