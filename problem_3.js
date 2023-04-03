/**
 * Farmer John has built a new long barn, with N (2 <= N <= 100,000) stalls. 
 * The stalls are located along a straight line at positions x1 ... xN (0 <= xi <= 1,000,000,000).
 * His C (2 <= C <= N) cows don't like this barn layout and become aggressive towards each other once put into a stall. 
 * To prevent the cows from hurting each other, FJ wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. 
 * What is the largest minimum distance?
 */

/**
 * 
 * @param {number[]} arr array of distaces of stalls
 * @param {*} k number of cows to be placed
 */
function aggressiveCows(arr, k) {
    let lo = 1
    let hi = arr[arr.length - 1] - arr[0]
    let max = 1 // since in worst case n cows n stalls
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2)
        if (check(arr, k, mid)) {
            max = Math.max(max, mid)
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
    return max
}

function check(arr, k, m) {
    let placedCow = 1
    let lastPlaced = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - lastPlaced >= m) {
            placedCow++
            lastPlaced = arr[i]
        }
    }
    if (k <= placedCow) return true
    return false
}


aggressiveCows([1, 2, 4, 8, 9], 3)
/**
 * https://www.spoj.com/problems/AGGRCOW/
 */