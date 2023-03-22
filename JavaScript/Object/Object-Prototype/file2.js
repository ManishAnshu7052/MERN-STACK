//Nested object

var user = {
    id :101,
    email : "abc@gmail.com",
    personalInfo : {
        name : "abc",
        address : {
            street : "fcfgas",
            city : "Allahabad",
            country : "India",
        }
    }
}
console.log(user);
console.log(user.personalInfo);
console.log(user.personalInfo.address);