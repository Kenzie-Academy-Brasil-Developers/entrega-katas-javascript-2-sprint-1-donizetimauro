// comece a criar a sua função add na linha abaixo
function add(a, b){
    return a+b;
}

// descomente a linha seguinte para testar sua função
// console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){
    let result = 0;
    let i = 0;
    while(i<a){
        result = add(result, b);
        i++
    }
    return result;
}

// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(a,b){
    let resultado = 1;
    let i = 0;
    while(i<b){
        resultado = multiply(resultado, a)
        i++
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (a){
    let result = 1
    for(let i = 1; i<=a; i++){
        result = multiply(result,i)
    }
    return result
}
// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n){
    let num1 = 0;
    let num2 = 1;
    let next;
    for(let i = 1; i <= n-1; i++){
        next = num1 + num2;
        num1 = num2;
        num2 = next;

    }
    return next;
}

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
