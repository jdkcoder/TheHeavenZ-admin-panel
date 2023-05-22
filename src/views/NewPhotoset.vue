<template>
    <form>
        <input type="file" name="file" multiple tabindex="1" @change="onFilesChange($event)" />
        <button @click="upload">upload</button>
    </form>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue'
import Resumable from 'resumablejs'
let r = $ref<any>()
let files = $ref<any[]>([])
// let formData = new FormData()

function onFilesChange(e: any) {
    files = [...e.target.files]

    files.forEach(file => {
        console.log('Single File: ')
        console.log(file)
        r.addFile(file)
    })
}

function upload(e: Event) {
    e.preventDefault()
    const formData = new FormData()
    files.forEach(file => formData.append('file', file));
    r.upload(formData)
}

onMounted(() => {
    r = new Resumable({
        target: 'http://localhost:60562/api/media/upload',
        chunkSize: 2 * 1024 * 1024, // 2MB Chunk
        simultaneousUploads: 4,
        testChunks: false,
        forceChunkSize: true,
        query: (file: any) => {
            console.log('Query: ' + typeof file.file)
            console.log(file.file)
            return {
                file: file.file,
                album: "99267b92-9e67-44cb-8fd2-6d20f40f30ce",
                star: 1
            }
        },
        headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },

    });

    r.on('fileAdded', (file: File) => {
        console.log('fileAdded: ', file);
    });

    r.on('fileSuccess', (file: File, message: string) => {
        console.log('fileSuccess', file, message);
    });

    r.on('fileError', (file: File, message: string) => {
        console.log('fileError', file, message);
    });

    r.on('progress', () => {
        console.log('progress', r.progress());
    });
})
</script>