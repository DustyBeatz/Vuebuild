const vm = new Vue({

    el : "#app",

    data : {
        welcomeMessage : "HERE WE GO!",

        anotherMessage : "WOWOWOWOW haz vue!",

        targetURL : "https://www.vuejs.org",

        anchorOff : true,

        hazVue : true,

        deliciousFruit : [
            { name : "apple", flavour: "Tasty!"},
            { name : "orange", flavour: "Tangy!"},
            { name : "pear", flavour: "Sweet!"}
        ]
    },

    methods : {

        logFruit(e) {

            console.log(e.currentTarget);
        },
    }
});

const vm2 = new Vue({

    el : "#footer",

    data : {
        footerMessage : "HERE'S THE FOOTER MESSAGE",
    }
})