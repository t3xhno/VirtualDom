import createELement from './vdom/createElement';

const VApp = createELement("div", {
    attrs: {
        id: "app",
    },
    children: [],
});

console.log(VApp);