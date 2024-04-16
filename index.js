// 1. Create a variable to store the singleton instance of the bank branch.
let bankBranchInstance = null;

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
  // 3. In the `BankBranch` class:
  // - Create a private constructor that takes `branchInfo` as a parameter.
  constructor(branchInfo) {
    this.branchInfo = branchInfo;
  }

  // 4. Add a static method called `getInstance` to handle the creation of the singleton instance.
  static getInstance(branchInfo) {
    // - Inside the `getInstance` method, check if the `bankBranchInstance` variable is null (indicating no instance exists).
    if (bankBranchInstance === null) {
      // - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
      bankBranchInstance = new BankBranch(branchInfo);
    }
    // - Return the `bankBranchInstance` whether it's newly created or existing.
    return bankBranchInstance;
  }

  // 5. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.
  getBranchInfo() {
    return this.branchInfo;
  }
}

// 6. In the usage section:
// - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information using the `getInstance` method.
const branchInfo1 = { name: "Branch A", address: "123 Main St." };
const branchA = BankBranch.getInstance(branchInfo1);
const branchInfo2 = { name: "Branch B", address: "456 Oak St." };
const branchB = BankBranch.getInstance(branchInfo2);

// - Use the `getBranchInfo` method to retrieve branch information from the instances.
console.log(branchA.getBranchInfo()); // Output: { name: 'Branch A', address: '123 Main St.' }
console.log(branchB.getBranchInfo()); // Output: { name: 'Branch A', address: '456 Oak St.' }

// - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.
console.log(branchA === branchB); // Output: true
