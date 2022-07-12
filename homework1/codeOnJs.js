function binarySearchInArr(num, arr, minlen = 0, maxlen = arr.length - 1) {
    if (minlen > maxlen) {
        return false;
    }
    let middle = Math.floor((minlen + maxlen) / 2);
    if (num == arr[middle]) {
        return middle;
    }
    if (num < arr[middle]) {
        return binarySearchInArr(num, arr, minlen, middle - 1)
    }
    if (num > arr[middle]) {
        return binarySearchInArr(num, arr, middle + 1, maxlen);
    }
}

function reverse(string) {
    return string.split('').reverse().join('');
}

function binSearch(num, arr) {
    let minlen = 0;
    let maxlen = arr.length - 1;
    let mid = Math.floor(arr.length / 2);
    while (num !== arr[mid]) {
        mid = Math.floor((minlen + maxlen) / 2);
        if (num < arr[mid]) {
            maxlen = mid;
        } else if (num > arr[mid]) {
            minlen = mid;
        }
    }
    return mid;
}