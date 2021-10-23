/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn, currArgs = []) {
    if (currArgs.length === 0) {
        currArgs = new Array(fn.length);
        currArgs.fill(curry.placeholder);
    }

    if (
        currArgs.length >= fn.length &&
        !currArgs.slice(0, fn.length).some(arg => arg === curry.placeholder)
    ) {
        return fn(...currArgs);
    }

    return function(...args) {
        const newArgs = [...currArgs];
        let placeHolderIndex = newArgs.indexOf(curry.placeholder);

        for (const e of args) {
            if (e === curry.placeholder) {
                placeHolderIndex = newArgs.indexOf(curry.placeholder, placeHolderIndex + 1);
            } else {
                if (placeHolderIndex === -1) {
                    newArgs.push(e);
                } else {
                    newArgs[placeHolderIndex] = e;
                    placeHolderIndex = newArgs.indexOf(curry.placeholder, placeHolderIndex + 1);
                }
            }
        }

        return curry(fn, newArgs);
    }
}

curry.placeholder = Symbol();
  
if (require.main === module) {
    const join = (a, b, c) => {
        return `${a}_${b}_${c}`;
    }

    const _ = curry.placeholder;
    const curriedJoin = curry(join);

    console.log(curriedJoin(1,2,3));
    console.log(curriedJoin(_,2)(1,3));
    console.log(curriedJoin(_,_,_)(_,_,3)(1,2));
}
  