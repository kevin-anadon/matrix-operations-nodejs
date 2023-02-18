const { determinant, adjoint, inverse, formatMatrix } = require("./utils/index")

let A
// 1A-0, 2A-0, 3A-480 ([number]Array-Result)
// TODO: Testing
// A = [[1,2], [3,4]]
// A = [[1,2,3], [4,5,6], [7,8,9]]
A = [[1,2,3,4], [3,6,7,8], [9,10,1,12], [13,14,15,16]]

const main = (matrix) => { 
    // Pre-req: Have to be a square matrix (NxN)
    // 2x2 Matrix for starting
    // rows = matrix[0].length
    // columns = matrix.length
    console.log(
        `${formatMatrix(matrix)} Determinant is: ${determinant(matrix)}`
    );
}

main(A)