let pronoun = ['the', 'our', 'the'];
let adj = ['great', 'big', 'last'];
let noun = ['jogger', 'racoon', 'ofus'];
let terminacion = ['com', 'net', 'us', 'io', 'es']

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < terminacion.length; l++) {
                let dominio = pronoun[i]+adj[j]+noun[k]
                if (dominio.endsWith(terminacion[l])) {
                    console.log(dominio.slice(0,(dominio.length - terminacion[l].length)) + "." + terminacion[l])
                } else {
                    console.log(dominio + "." + terminacion[l])
                }
            }
        }
    }
}
