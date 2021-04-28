let emails=["hello-lizzie@gmail.com", "hello-john@gmail.com", "hello-alice@gmail.com", "hello-harry@gmail.com"]

//ask user for email
let userEmail= prompt("What is your email?")

//iterate through array and compare
for (email in emails){
    if (emails[email]==userEmail){
        console.log("Access!")
    }
}