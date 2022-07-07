const transpose = function (matrix) {
    let result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let newArr = [];
        for (let x = 0; x < matrix.length; x++) {

            newArr.push(matrix[x][i]);
        }
        result.push(newArr);
    }
    return result

};


const wordSearch = (letters, word) => {

    if (letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    let status = false;

    for (l of horizontalJoin) {
        if (l.includes(word)) {
            status = true;
        }
    }
    if (!status) {
        const verticalArr = transpose(letters);
        const verticalJoin = verticalArr.map(lsv => lsv.join(''))

        for (lv of verticalJoin) {
            if (lv.includes(word)) {
                status = true;
            }
        }
    }

    if (!status) {
        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < letters[j].length; k++) {
                let result = "";
                if (letters[j][k] === word[0]) {
                    result += letters[j][k];
                    let x = j;
                    let y = k;
                    while (x < letters.length - 1 && y < letters[j].length - 1) {
                        y++;
                        x++;
                        result += letters[x][y];
                    }
                    console.log(result);
                    if (result.includes(word))
                        status = true;
                }
            }
        }
    }


    if (!status) {
        let reverseLetters = [];
        letters.forEach(element => {
            reverseLetters.push(element.reverse());
        });
        const reverselJoin = reverseLetters.map(lsr => lsr.join(''))
        for (lr of reverselJoin) {
            if (lr.includes(word)) {
                status = true;
            }
        }
    }

    return status;

}

module.exports = wordSearch