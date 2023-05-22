<template>
    <form>
        <input type="file" name="file" multiple tabindex="1" @change="onFilesChange($event)" />
<<<<<<< HEAD
        <button @click="upload">upload</button>
=======
        <button type="button" @click="upload">upload</button>
>>>>>>> parent of e973990 (update)
    </form>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue'
import Resumable from 'resumablejs'
<<<<<<< HEAD

=======
import axios from 'axios'
>>>>>>> parent of e973990 (update)
let r = $ref<any>()
let files = $ref<any[]>([])
// let formData = new FormData()

function onFilesChange(e: any) {
    files = [...e.target.files]

<<<<<<< HEAD
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
=======
    // files.forEach(file => {
    //     console.log('Single File: ')
    //     console.log(file)
    //     r.addFile(file)
    // })
}

async function upload() {
    await axios.post(`http://localhost/api/media/upload`, {
        file: files[0],
        album: "992c37ff-1dd2-44f0-98b1-473e79635c33",
        star: 1,
    },
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            let data = res.data
            console.log(data)

        }).catch((err) => {
            console.log(err.response)
        })
}

onMounted(() => {
    // r = new Resumable({
    //     target: 'http://localhost/api/media/upload',
    //     chunkSize: 2 * 1024 * 1024, // 2MB Chunk
    //     simultaneousUploads: 4,
    //     // testChunks: true,
    //     forceChunkSize: true,
    //     query: (file: any) => {
    //         console.log('Query: ' + typeof file.file)
    //         console.log(file.file)
    //         return {
    //             file: file.file,
    //             album: "992c37ff-1dd2-44f0-98b1-473e79635c33",
    //             star: 1
    //         }
    //     },
    //     headers: {
    //         "Content-Type": "multipart/form-data",
    //         "Accept": "application/json",
    //         'Authorization': `Bearer ${localStorage.getItem('token')}`
    //     },

    // });

    // r.on('fileAdded', (file: File) => {
    //     console.log('fileAdded: ', file);
    // });

    // r.on('fileSuccess', (file: File, message: string) => {
    //     console.log('fileSuccess', file, message);
    // });

    // r.on('fileError', (file: File, message: string) => {
    //     console.log('fileError', file, message);
    // });

    // r.on('progress', () => {
    //     console.log('progress', r.progress());
    // });
>>>>>>> parent of e973990 (update)
})
</script>