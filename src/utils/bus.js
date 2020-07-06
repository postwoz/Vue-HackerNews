import Vue from 'vue';



/* default 와 그냥 선언의 차이 */
// default 는 어디서든 원하는 이름으로 선언해서 사용할 수 있다.

// bus.js
export default new Vue();
// App.vue
// import Bus from './bus.js';


// bus.js
// export const bus = new Vue();
// App.uve
// import { bus } from './bus.js';