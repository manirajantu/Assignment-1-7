/*
    Study the function "createNotification". 

    createNotification() is a factory function where it instantiates an object based on the arguments passed to it. 

    In this case, this function will return either a SMS or EMAIL notification object. 

    Task 1: Implement case "EMAIL" 
    Task 2: Instantiate both SMS and EMAIL object and invoke send() function.
    Task 3: Code challenge! 
    - Create a class "Notification" with mandatory properties (type, to and content) and optional properties (cc and subject).
    - The function send() should be implemented in the class.
    - The class will implement send() function based on the value given to property "type".
    - The class should handle the case where "type" is not "sms" and "email".
*/

function createNotification(type, params) {
    switch (type.toUpperCase()) {
        case "SMS":
            {


                const smsNotification = {
                    to: params.to,
                    content: params.content
                };

                smsNotification.send = function() {
                    console.log(`Sent SMS to ${this.to} with content ${this.content}`);
                }

                return smsNotification;
            }

        case "EMAIL":
            {
               
                const emailNotification = {
                    emailAdd: params.emailAdd,
                    content: params.content
                };

                emailNotification.send = function() {
                    console.log(`Sent EMAIL to ${this.emailAdd} with content ${this.content}`);
                }

                return emailNotification;
            }

        default:
            return null;
    }
}

// Add code here to create one sms and one email object. Invoke function "send()" for both object.

const smsNotification = createNotification("SMS", {to: 12345678, content: "hello"});
smsNotification.send();
const emailNotification = createNotification("EMAIL", {emailAdd: 'mani@mail.com', content: "How are you"});
emailNotification.send();

