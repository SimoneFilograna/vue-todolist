"use strict"

const { createApp } = Vue

createApp({
    data() {
        return {
            idNumIndex: 4,

            newItem : {
                text: "",
                done: false
            },

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

        //cancello gli item quando clicco sul cestino
        onClickDelete(indexId){
            const delIndex = this.todoList.findIndex((singleItem) => singleItem.id === indexId);
            this.todoList.splice(delIndex, 1);           
        },

        //creo la funzione per inviare i dati al click del bottone
        onClickSend(){
            const cloneItem = {...this.newItem};   
            this.todoList.push(cloneItem)            
        },

    }
}).mount('#app')