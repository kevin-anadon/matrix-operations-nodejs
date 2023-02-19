// return a matrix that represents the inverse

const adjoint = require("./adjoint");
const determinant = require("./determinant");

const calcInverse = (matrix = []) => { 
    // 1/det * Adj
    const det = determinant(matrix)
    const adj = adjoint(matrix)
    let inv = JSON.parse(JSON.stringify(matrix))
    matrix.forEach((row, i) => {
        for (let j = 0; j < matrix.length; j++) {
            inv[i][j] = (1/det) * matrix[i][j]
        }
    })
    return inv
}

const inverse = (matrix) => {
    // TODO:
    if (!matrix) { 
        console.log('The array can not be empty')
        return
    }
    if (determinant(matrix) === 0) {
        console.log('Matrix not invertible (Det = 0)')
        return
    }
    const inv = calcInverse(matrix)
    return inv
}

module.exports = inverse;
