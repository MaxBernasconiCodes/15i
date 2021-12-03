function inicial (){
    return <h1>{calcularRandom()}</h1>;
}

let textoEste = 'este texto';

function calcularRandom()
{
    let res = 0;
    res = Math.floor((Math.random()*100 ));
    return res;
}

export default inicial;