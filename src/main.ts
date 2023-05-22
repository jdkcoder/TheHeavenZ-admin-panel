import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:uno.css'

import './assets/base.css'
import './assets/zeelios/css/colors.css'

import ZCard from './components/ZCard/ZCard.vue'
import ZAvatar from './components/ZAvatar/ZAvatar.vue'
import ZInput from './components/ZInput/ZInput.vue'
import ZCheckbox from './components/ZCheckbox/ZCheckbox.vue'
import ZRadio from './components/ZRadio/ZRadio.vue'
import ZTextarea from './components/ZTextarea/ZTextarea.vue'
import ZSwitch from './components/ZSwitch/ZSwitch.vue'
import ZFieldset from './components/ZFieldset/ZFieldset.vue'
import ZDivider from './components/ZDivider/ZDivider.vue'
import ZBadge from './components/ZBadge/ZBadge.vue'
import ZSelect from './components/ZSelect/ZSelect.vue'
import ZTable from './components/ZTable/ZTable.vue'
import ZPaginator from './components/ZPaginator/ZPaginator.vue'
import ZButton from './components/ZButton/ZButton.vue'
import ZModal from './components/ZModal/ZModal.vue'

const app = createApp(App)
app.component('ZCard', ZCard)
app.component('ZAvatar', ZAvatar)
app.component('ZInput', ZInput)
app.component('ZTextarea', ZTextarea)
app.component('ZCheckbox', ZCheckbox)
app.component('ZRadio', ZRadio)
app.component('ZSwitch', ZSwitch)
app.component('ZFieldset', ZFieldset)
app.component('ZDivider', ZDivider)
app.component('ZBadge', ZBadge)
app.component('ZSelect', ZSelect)
app.component('ZPaginator', ZPaginator)
app.component('ZTable', ZTable)
app.component('ZButton', ZButton)
app.component('ZModal', ZModal)

app.use(router)
app.mount('#app')
