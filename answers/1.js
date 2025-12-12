/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or
‘systemAnalytics’.
**/


/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this
array and print it out.
**/

function sortUserName(user) {
  user.sort((a, b) => {
    const nameA = (a.firstName + a.lastName + a.customerID).toLowerCase();
    const nameB = (b.firstName + b.lastName + b.customerID).toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  return user;
}
console.log(sortUserName(users));

// Q2. Please sort by ‘profession’ to follow the principle.
// (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)

function sortByType(user) {
  const professionOrder = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  };
  user.sort((a, b) => {
    return professionOrder[b.profession] - professionOrder[a.profession];
  });
  return user;
}

console.log(sortByType(users));