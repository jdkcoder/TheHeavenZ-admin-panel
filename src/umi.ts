import { extend } from 'umi-request';

const umi = extend({
    prefix: 'https://api.heavenz.site',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});

export default umi