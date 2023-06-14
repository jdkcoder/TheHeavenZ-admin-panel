
import { Dropbox } from 'dropbox'

const drb = new Dropbox({ clientId: 'xynoc7cyyezc3zn', clientSecret: '4py399m1tngwj49' });

const drbAuthURL = `https://www.dropbox.com/oauth2/authorize?client_id=${appKey}&response_type=code`
const appKey = 'xynoc7cyyezc3zn'
