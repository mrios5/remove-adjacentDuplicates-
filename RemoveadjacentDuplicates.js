function ChasquidoDeThanos(Universo){
    let flagUniverso = []
    let UniversoSize = Universo.length

    for(let i = UniversoSize-1; i>=0; i--)

        if(flagUniverso.indexOf(Universo[i]) === -1){
            flagUniverso.push(Universo[i])
        }
        return flagUniverso;
}
let Universo = [1,2,3,12,4,5,14,56,61,2,45,67,1,2]
let Universo = [1,2,3,12,4,5,14,56,61,2,45,67,1,2]
console.log("universo con valores duplicados: ")
console.log(Universo)
console.log("Universo sin valores duplicados: ")
console.log(ChasquidoDeThanos(Universo))
