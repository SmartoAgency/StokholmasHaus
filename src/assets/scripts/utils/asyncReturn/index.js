import { getPlanningsListByFloor } from '../../api';
import { createSvg } from '../createSvg';

export async function asyncReturn(build, section, floor) {
    try {
        const { data } = await getPlanningsListByFloor({ build, section, floor });
        const element = await createSvg(data.url, data.size[0], data.size[1], data, data.flatsIds);
        return element;
    } catch (e) {
        console.log(e);
    }
}
