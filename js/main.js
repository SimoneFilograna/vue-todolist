"use strict"

const { createApp } = Vue

createApp({
    data() {
        return {
            todoList:[
                {
                    id: 0,
                    text: "Comprare arachidi affettate da un pipistrello AUSTRALIANO",
                    done: false,       
                }, 
                {
                    id: 1,
                    text: "Gaurdare Netflix per trovare errori",
                    done: true,       
                }, 
                {
                    id: 2,
                    text: "Creare una mail di protesta contro la casa produttrice",
                    done: false,       
                }, 
                {
                    id: 3,
                    text: "Bere una coca-zero per festeggiare quanto fatto",
                    done: true,       
                } 
            ],
            //creato array di oggetti manualmente
        }
    },
    methods: {
        onClickDelete(){
            console.log("funziono");
            
        }
    }
}).mount('#app')