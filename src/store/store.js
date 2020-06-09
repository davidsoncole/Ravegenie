import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";
import Router from 'vue-router'

Vue.use(Vuex, axios, Router);

export const store = new Vuex.Store({
    plugins: [createPersistedState()],

    state: {
        
        user: [],

    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
    },
    mutations: {
        


    },
    actions: {

        //post
        register_advertiser(context, data) {

            return new Promise((resolve, reject) => {
                axios.post('/accounts/sign-up/', {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    password: data.password,
                })
                .then(({status}) => {
                    if (status === true) {
                        resolve(true)
                    }
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

        Publisher_form(context, data) {

            return new Promise((resolve, reject) => {
                axios.post('/accounts/sign-up/', {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    password: data.password,
                })
                .then(({status}) => {
                    if (status === true) {
                        resolve(true)
                    }
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },




        //get
        retrievePublisher(context) {
      
            axios.get('publisher/ping')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
            console.log(error)
            })
        },

        retrieveAdvertiser(context) {
      
            axios.get('business/ping')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
            console.log(error)
            })
        },


        
    }
})
