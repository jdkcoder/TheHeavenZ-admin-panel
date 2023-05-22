import * as orama from '@orama/orama';

let searchSchema: any
async function setSchema(schema: any) {
    if (schema) searchSchema = await orama.create({
        schema: schema
    });
}

async function insertSearchData(arr: any[]) {
    if (searchSchema) {
        if (arr && arr.length > 0) await arr.forEach((item) => {
            orama.insert(searchSchema, item)
        });
        else return console.error('Data is empty')
    } else return console.error('Search Schema have not set yet')
}

async function search(keyword: string) {
    return await orama.search(searchSchema, {
        term: keyword,
        properties: '*',
    })
}
export { setSchema, insertSearchData, search }
