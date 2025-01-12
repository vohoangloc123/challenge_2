// Hàm kiểm tra nếu mảng có số trùng lặp
function hasDuplicates(arr) {
    const uniqueArr = new Set(arr);
    return uniqueArr.size !== arr.length;
}

// Hàm tìm số bị thiếu
function findMissingNumber(arr) {
    // Kiểm tra nếu mảng có số trùng lặp
    if (hasDuplicates(arr)) {
        throw new Error("Mảng chứa các phần tử trùng lặp");
    }

    const n = arr.length + 1; // mảng có n số, nhưng thiếu một số từ 1 đến n+1
    const totalSum = (n * (n + 1)) / 2; // Tổng của dãy từ 1 đến n+1
    const arrSum = arr.reduce((sum, num) => sum + num, 0); // Tổng của các phần tử trong mảng
    return totalSum - arrSum; // Số bị thiếu
}

// Test với ví dụ
const inputArray = [3, 7, 1, 2, 6, 4]; // n = 6

try {
    const missingNumber = findMissingNumber(inputArray);
    console.log("Mảng:", inputArray);
    console.log("Số bị thiếu là:", missingNumber); // Kết quả sẽ là 5
} catch (error) {
    console.error(error.message);
}
