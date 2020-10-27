const random = {
    go : function(){
        let a  = 'go'
        console.log(a)
    },

    add : function(){
        let a = 44
        let b = 6
        return a + b
    },

    goGet : () => {
        fetch('https://reqres.in/users/')
    }
}

function moreRandomness(){
    console.log('hello this  is a random function')
}