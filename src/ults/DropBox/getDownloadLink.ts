
function getInfoPhotoset(studio: string, photoset: any) {
    drb.filesDownload({ path: `/${studio}/${photoset.name}/info.txt` }).then(response => {
        //@ts-ignore
        const { fileBlob } = response.result;
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            //@ts-ignore
            photoset['info'] = JSON.parse(result)
        }
        reader.readAsText(fileBlob);
    }).catch(error => {
        console.error(error);
    });
}