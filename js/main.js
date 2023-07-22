"use strict"

const { createApp } = Vue

createApp({
    data() {
        return {
            idNumIndex: 3,

            newItem : {
                id: this.idNumIndex,
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
            const delIndex = this.todoList.findIndex((newItem) => newItem.id === indexId);
            this.todoList.splice(delIndex, 1);  
            console.log(indexId)         
        },

        //creo la funzione per inviare i dati al click del bottone / add event on enterkey
        onClickSend(){
            ++this.idNumIndex;
            this.newItem.id = this.idNumIndex;
            const cloneItem = {...this.newItem};   
            this.todoList.push(cloneItem);
            this.newItem.text = "";
            console.log(cloneItem)        
        },




    }
}).mount('#app')