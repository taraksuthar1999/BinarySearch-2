/**
 * A positive integer is magical if it is divisible by either a or b.
 * Given the three integers n, a, and b, return the nth magical number.
 * Since the answer may be very large, return it modulo 109 + 7.
 * 
 * Input: n = 4, a = 2, b = 3
 * Output: 6
 */

function nthMagicalNumber(n, a, b) {
    /**
     * considering the worst case e.g. n = 5, a=2, b = 100, nth integer will be less then eq to n * min(a,b)
     * 
     * Example: n = 4, a = 2, b = 3
     * count number of integers either multiple of a or b 
     * let x = all multiples of a = integer division(N/a)
     * let y = all multiples of b = integer division(N/b)
     * let z = all multiples of LCM of a&b
     * 
     * number of integers in range N
     * = x + y - z
     * 
     * we know as the range increases the number of Magical Numbers also increase, thus its monotonus
     * thus applying binary search
     * 
     */
    let lo = 1
    let hi = n * Math.min(a, b)
    const LCM = (a * b) / GCD(a, b)
    const mod = 1000000007
    let min = Number.MAX_SAFE_INTEGER
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2)
        let x = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / LCM)
        if (x >= n) {
            min = Math.min(mid, min)
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return min % mod

}

function GCD(A, B) {
    if (B == 0) return A
    return GCD(B, A % B)
}

console.log(nthMagicalNumber(4, 2, 3))

//https://leetcode.com/problems/nth-magical-number/