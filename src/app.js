const { determinant, adjoint, inverse, formatMatrix } = require("./utils/index")

let A
// 1A-(-2), 2A-0, 3A-480 ([number]Array-Result)
// TODO: Testing
// A = [[1,2], [3,4]]
// A = [[1,2,3], [4,5,6], [7,8,9]]
A = [[1,2,3,4], [3,6,7,8], [9,10,1,12], [13,14,15,16]]

const main = (matrix) => { 
    // Pre-req: Have to be a square matrix (NxN)
    // rows = matrix[0].length
    // columns = matrix.length
    console.log(
        `${formatMatrix(matrix)}\r\n\r\n(*) Determinant is: ${determinant(matrix)}\r\n`
    );
    console.log(`(*) Adjoint is : \r\n${formatMatrix(adjoint(matrix))}\r\n`);
    console.log(`(*) Inverse is : \r\n${formatMatrix(inverse(matrix))}`);
}

main(A)