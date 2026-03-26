const employees = ["Mahesh Babu", "Rohit Sharma", "Mahesh Babu", "Prabhas", "Rohit Sharma", "Mahesh Babu", "Prabhas", "Rohit Sharma", "Prabhas", "Rohit Sharma"];
 
const freq = employees.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
}, {});
 
const sorted = Object.entries(freq)
    .sort((a, b) => b[1] - a[1]);
 
console.log(sorted)