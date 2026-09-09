import { createClient, type ClientConfig } from '@sanity/sveltekit';

const config: ClientConfig = {
    projectId: "kejs3hpb",
    dataset: "production",
    useCdn: true,
    apiVersion: '2026-08-09',
}

const sanityClient = createClient(config);
export default sanityClient;


