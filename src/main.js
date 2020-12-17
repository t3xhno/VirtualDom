import createELement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';

const createVApp = (count) => createELement("div", {
    attrs: {
        id: "app",
        dataCount: count
    },
    children: [
        String(count),
        createELement("img", {
            attrs: {
                src: "https://media.giphy.com/media/JpwS1kUPG0mpimj9fz/giphy.gif"
            },
        })
    ],
});

let count = 0;
const vApp = createVApp(count);

const $app = render(vApp);

let $rootEl = mount($app, document.getElementById("app"));

setInterval(() => {
    count++;
    $rootEl = mount(render(createVApp(count)), $rootEl);
}, 1000);

console.log($app);