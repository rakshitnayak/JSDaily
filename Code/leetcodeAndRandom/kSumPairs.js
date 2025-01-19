var maxOperations = function (nums, k) {
    let map = new Map();
    let operations = 0;


    for (const num of nums) {
        console.log(map);
        compliment = k - num;
        if (map.get(compliment) > 0) {
            operations++;
            map.set(compliment, map.get(compliment) - 1)
        } else {
            map.set(num, (map.get(num) || 0) + 1)
        }
    }

    return operations;
};


console.log(maxOperations([1,2,3,4], 5));