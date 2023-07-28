import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            myName:'ditto',
            myAge:20,
        }
    },
    mutations: {
        changeName(state,payload){
            state.myName = payload;
        },
        plusAge(state){
            state.myAge++;
        },
    },
    actions: {

    }
})

export default store