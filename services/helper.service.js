export class Helper {
  average(arr) {
    let len = arr.length,
        sum = 0;
    for (let i = 0; i < len; i++) {
        sum += parseFloat(arr[i].price);
    }
    return sum / len;
  }
}
 