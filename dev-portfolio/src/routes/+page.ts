import sanityClient from "../lib/utils/sanity";
import type { PageLoad } from './$types';
import type { DevExpo } from '../lib/types/sanity.d.ts';

export const load: PageLoad = async () => {
    const devExperience: DevExpo[] = await sanityClient.fetch(`*[_type == 'devExpo']`);

    return {
        devExperience,
    }
};