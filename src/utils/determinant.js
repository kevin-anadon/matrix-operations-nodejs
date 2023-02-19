const formatMatrix = require("./formatMatrix");

// returns a scalar

const deleteColumnElem = (col, matrix = []) => {
    matrix.forEach((row) => {
        row.splice(col, 1)
    })
}

const detGreaterThan3 = (matrix = []) => {
    let det = 0
    for (let i = 0; i < matrix[0].length; i++) {
        let elemFirstRow = matrix[0][i];
        const sizeTwoMatrix = JSON.parse(JSON.stringify(matrix))
        sizeTwoMatrix.shift()
        deleteColumnElem(i, sizeTwoMatrix)
        // if (sizeTwoMatrix.length > 2) { detGreaterThan3(matrix) }
        if ((i + 1) % 2 == 0 ) { elemFirstRow = -elemFirstRow } // if is even it`s the opposite
        det += elemFirstRow * determinant(sizeTwoMatrix)
    }
    return det
}

const twoSizeMatrixesCalc = (matrix) => { 
    return ((matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]))    
}

const determinant = (matrix) => {
    // Work for NxN matrixes
    if (!matrix) { 
        console.log('The array can not be empty')
        return
    }
    const det = (matrix.length === 2) 
        ? twoSizeMatrixesCalc(matrix) 
        : detGreaterThan3(matrix)
    return det
}

module.exports = determinant;

