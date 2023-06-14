//@ts-ignore
import umi from '../../umi'
import axios from 'axios'
export default async function login(username: string, password: string) {
    const url = `https://heavenz.site/api/login`
    const client_secret = `sUTWRz1kFtufC8RYkDQcapCY8inuavdQKzmZXwGE`
    const client_id = `994cfa2f-aca6-4e01-8bd5-bc063378d204`
    const payload = {
        data: {
            client_secret,
            client_id,
            username,
            password,
            grant_type: 'password'
        }
    }

    try {
        const { data } = await axios.post(url, payload.data)
        console.log(data)
    } catch (err: any) {
        console.log(err.response || err)
    }

}