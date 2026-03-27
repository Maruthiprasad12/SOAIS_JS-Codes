// str1="Silent"
// str2="Listen"
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let a = str1.split('').sort().join()
    let b = str2.split('').sort().join()
    if (a == b) {
        return "Given strings are Anagram"
    } else {
        return "Given strings are not Anagrams"
    }
}

console.log(isAnagram("Silent", "Listen"))