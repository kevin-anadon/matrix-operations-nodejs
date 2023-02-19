// return a matrix that represents the inverse
const Fraction = require('@mathematics/fraction');

const adjoint = require("./adjoint");
const determinant = require("./determinant");

const calcInverse = (matrix = []) => { 
    // 1/det * Adj
    const det = determinant(matrix)
    const adj = adjoint(matrix)
    let inv = JSON.parse(JSON.stringify(matrix))
    adj.forEach((row, i) => {
        for (let j = 0; j < adj.length; j++) {
            const OPERATION = new Fraction(adj[i][j], det) || ((1/det) * adj[i][j]) // if npm packg is down
            inv[i][j] = OPERATION.toString()
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
