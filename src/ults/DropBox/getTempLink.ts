//@ts-nocheck

function showImage(studio: string, photosetName: string, fileName: string) {
    drb.filesGetTemporaryLink({ path: `/${studio}/${photosetName}/${fileName}` }).then(response => {
        const link = response.result.link;
        src.value = link;
    }).catch(error => {
        console.error(error);
    });
}
