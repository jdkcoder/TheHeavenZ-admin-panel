function setPhotosetInfo(studio: string, photosetName: string) {
    const fileName = 'info.txt';
    const content = JSON.stringify({
        photosetName: photosetName,
        models: models.value,
        studio: studio,
        downloadLink: downloadLink.value
    });
    const file = new File([content], fileName, { type: 'text/plain' });

    drb.filesUpload({
        path: `/${studio}/${photosetName}/${fileName}`,
        contents: file,
        mode: { '.tag': 'overwrite' },
    }).then(() => {
        console.log(`Created info successfully for ${photosetName}`);
    }).catch((err) => {
        console.error(err.error || err);
    });
}

async function uploadImages(studio: string, photosetName: string, images: File[]) {
    await setPhotosetInfo(studio, photosetName);

    const maxFilesPerBatch = 5;
    const batches = Math.ceil(images.length / maxFilesPerBatch);

    for (let i = 0; i < batches; i++) {
        const startIdx = i * maxFilesPerBatch;
        const endIdx = Math.min(startIdx + maxFilesPerBatch, images.length);
        const batchImages = images.slice(startIdx, endIdx);

        await uploadBatch(batchImages, studio, photosetName);
    }
}

async function uploadBatch(images: File[], studio: string, photosetName: string) {
    const uploadPromises = images.map(image => {
        return drb.filesUpload({
            path: `/${studio}/${photosetName}/${image?.name?.trim()}`,
            contents: image,
            mode: { '.tag': 'overwrite' },
        });
    });

    try {
        const results = await Promise.all(uploadPromises);
        results.forEach((_, index) => {
            console.log(`File ${images[index]?.name} has been uploaded successfully to ${photosetName}`);
        });
    } catch (err) {
        console.error(err);
    }
}