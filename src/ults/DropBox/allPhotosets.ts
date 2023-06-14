//@ts-nocheck

async function allPhotosets() {
    try {
        for (const studio of studiosOnDropbox.value) {
            const res = await drb.filesListFolder({ path: `/${studio.label}` });
            const result = res.result.entries.filter(folder => folder['.tag'] === 'folder');

            const promise = result.map((photoset) => {
                const updatedPhotoset = {
                    thumbnail: '',
                    name: photoset.name,
                    slug: dash(photoset.name),
                    studio: studio.label,
                    models: [
                        {
                            avatar: '',
                            name: 'Saika',
                            country: 'Korea',
                        },
                    ]
                };

                return photosetThumbnail(studio.label, photoset).then(({ thumbnail }: any) => {
                    updatedPhotoset.thumbnail = thumbnail;
                    return updatedPhotoset;
                });
            });

            const photosetsData = await Promise.all(promise);
            photosets.value = [...photosetsData]
            console.log(photosets.value);
        }
    } catch (error) {
        //@ts-ignore
        console.error(error.error || error);
    }
}