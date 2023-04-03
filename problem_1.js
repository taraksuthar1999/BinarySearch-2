/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
 * The returned integer should be non-negative as well.
 * @param {number} n 
 * @returns {number}
 */

function squareRoot(n) {
    let i = 0
    let j = Math.floor(n / 2)
    let max = Number.MIN_SAFE_INTEGER
    if (n == 1) return 1
    while (i <= j) {
        let mid = Math.floor((i + j) / 2)
        if ((mid * mid) <= n) {
            max = mid
            i = mid + 1
        } else {
            j = mid - 1
        }
    }
    return max
}

squareRoot(1)


//https://leetcode.com/problems/sqrtx/