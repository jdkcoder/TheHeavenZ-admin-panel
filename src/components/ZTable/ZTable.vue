<template>
    <div class="z-table" ref="tableEl">
        <!-- TABLE HEADER -->
        <div class="z-table-header">
            <header ref="tableHeader">
                <button @click="toggleActionsForSelected" class="actions-for-selected">
                    <Vertical3DotsIcon />
                </button>
                <div class="table-utilities">
                    <ZInput v-model="keyword" type="search" label="Type then Enter" @keyup.enter="runSearch(keyword)" />
                    <!-- <button @click="toggleActionsForSelected" class="actions-for-selected">
                        <Vertical3DotsIcon />
                    </button>
                    <button @click="toggleActionsForSelected" class="actions-for-selected">
                        <Vertical3DotsIcon />
                    </button>  -->
                </div>
            </header>
        </div>
        <!-- END TABLE HEADER -->


        <!-- COLUMN NAMES -->
        <div class="z-column-names" v-if='!$slots[`header`]'>
            <div class="th-cell" v-if='$slots[`checkboxRow`]'></div>
            <div class="th-cell" v-for="(column, index) in (props.columns || columns)" :key="index">
                <span v-if='$slots[`${column}Header`]'> <!-- slot #columnHeader activated => change the header name-->
                    <slot :name="`${column}Header`" />
                </span>
                <span v-if='!$slots[`${column}Header`]'>{{ column }}</span><!-- slot #columnHeader unactivated => not change the header name-->
            </div>
            <div class="th-cell" v-if='$slots[`rowActions`]'>
                <span>Actions</span>
            </div>
        </div>
        <div class="z-column-names" v-if='$slots[`header`]'>
            <slot name="header" />
        </div>
        <!-- END COLUMN NAMES -->


        <!-- TABLE DATA -->
        <slot name="row" v-bind="props.data" />
        <div v-if='!$slots.row' class="table-row" :class="props.rowClass" v-for="(item, index) in props.data" :key="index">
            <div class="td-cell" v-if='$slots[`checkboxRow`]'>
                <slot name="checkboxRow" v-bind="item" />
            </div>
            <div class="td-cell" v-for="column in (props.columns || columns)">
                <slot :name="column" v-bind="item" />
                <span v-if='!$slots[column]'>{{ item[column] }}</span>
            </div>
            <div class="td-cell" v-if='$slots[`rowActions`]'>
                <slot name="rowActions" v-bind="item" />
            </div>
        </div>
        <!-- END TABLE DATA -->


        <!-- TABLE FOOTER -->
        <div class="z-table-footer">
            <footer ref="tableFooter">
                <p class="record-stats">Showing 1 to {{ props.perPage }} of {{ props.data.length }} records</p>
                <div class="number-of-results">
                    <ZSelect v-model="perPage" :options="[10, 20, 30]" @select="onChangePerPage" />
                    <span>per page</span>
                </div>
                <div class="paginate">
                    <ZPaginator @onPage="onPaginate" totalPages="10" />
                </div>
            </footer>
        </div>
        <!-- END TABLE FOOTER -->
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { setSchema, insertSearchData, search } from './ults/search'
import Vertical3DotsIcon from './icons/vertical-3-dots.svg'
const tableHeader = ref<HTMLElement>()
const tableFooter = ref<HTMLElement>()
const tableEl = ref<HTMLDivElement>()
const keyword = ref<string>('')
const props = defineProps<{
    columns?: any[]
    data: any[]
    perPage: number | string
    searchSchema?: any
    rowClass?: string
}>()
const columns = ref<any[]>()
const perPage = ref<number>(Number(props.perPage))
function onPaginate(e: MouseEvent) {
    console.log(e)
}
function toggleActionsForSelected() {

}
function onChangePerPage(perPage: number) {
    alert(perPage)
}

async function runSearch(keyword: string) {
    const results = await search(keyword)
    console.log(results)
}

onMounted(async () => {
    if (props.searchSchema) await setSchema(props.searchSchema)
    if (props.data.length > 0) await insertSearchData(props.data)

    //set width for table header & footer
    let tableWidth
    if (tableEl.value) tableWidth = tableEl.value.scrollWidth
    if (tableHeader.value) tableHeader.value.style.width = `${tableWidth}px`
    if (tableFooter.value) tableFooter.value.style.width = `${tableWidth}px`

    //set dynamic columns by passed data via props
    if (!props.columns) columns.value = Object.keys(props.data[0])
    else columns.value = props.columns

})
</script>

<style lang='sass?intendedSyntax'>
@import './z-table'
</style>