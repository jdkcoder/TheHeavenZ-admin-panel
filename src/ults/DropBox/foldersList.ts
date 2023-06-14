async function allStudiosOnDropbox() {
    await drb.filesListFolder({ path: '' }).then((res) => {
        let result = res.result.entries.filter(folder => folder['.tag'] === 'folder')
        studiosOnDropbox.value = result.map(studio => ({
            label: studio.name,
            value: studio.name
        }))
        cursor.value = res.result.cursor
    }).catch((err) => {
        console.error(err.error || err);
    });
}
