/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
function intersection(left, right) {

    return Array.from(new Set(left)).filter(element => right.includes(element));

}

console.log(intersection(
    [1, 2, 3, 4, 5,1,1,1],
    [2, 8, 3, 2]
));