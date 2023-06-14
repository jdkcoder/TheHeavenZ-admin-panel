//@ts-nocheck

function photosetThumbnail(studio: string, photoset: any) {
    return new Promise((resolve, reject) => {
        drb.filesGetThumbnail({ path: `/${studio}/${photoset.name}/thumb.jpg`, size: { ".tag": "w2048h1536" } }).then(res => {
            //@ts-ignore
            const { fileBlob } = res.result;
            const link = URL.createObjectURL(fileBlob);
            photoset['thumbnail'] = link;
            resolve(photoset);
        }).catch(error => {
            console.error(error);
            reject(error);
        });
    });
}