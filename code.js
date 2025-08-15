
function syt(first, second) {
    var largerNumber = first
    var smallerNumber = second
    var finalNumber = -1
    while(finalNumber == -1) {
        let nextLarge = Math.floor(largerNumber/smallerNumber)
        let remainder = largerNumber - (divider * smallerNumber)

        if remainder != 0 {
            largerNumber = nextLarge
            smallerNumber = remainder
        } else {
            finalNumber = smallerNumber
        }
    }

    return finalNumber
}