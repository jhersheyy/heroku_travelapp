import { initPage } from './js/app'

import './styles/resets.scss'
import './styles/style.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'

import jhlogo from './media/jh.png'
document.getElementById('jhlogo').setAttribute('src',jhlogo);
import mainimg from './media/travel.png'
document.querySelector('.mainimg').setAttribute('src', mainimg);
import pixlogo from './media/pixabay.png'
document.getElementById('pixlogo').setAttribute('src', pixlogo);
// Call init on DOMContentLoaded event.
window.addEventListener('DOMContentLoaded', initPage);


export {
    initPage
}