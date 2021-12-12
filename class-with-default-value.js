/*
    Define a class "MedicalRecord". It should contain the following properties and functions:

    Properties:
    - lastName (string)
    - firstName (string)
    - yearOfBirth (number)
    - isAdult (to be determined by year of birth)
    - allergy (defaults to null)
    - noOfVisit (number, defaults to 0)
    - inClinic (boolean, defaults to false)

    The constructor of the class shall takes in the following arguments:
    - lastName
    - firstName
    - yearOfBirth
    - allergy

    Functions:
    - checkOut() will increment property "noOfVisit" and set inClinic to false
    - checkIn() will set inClinic to true
*/

class MedicalRecord {
    constructor(lastName,firstName,yearOfBirth,allergy,noOfVisit,inClinic){
        this.name = lastName + " " + firstName;
        this.isAdult = yearOfBirth;
        this.allergy = null;
        this.noOfVisit = 0;
        this.inClinic = false;
        this.isAdult = false;

        function checkOut(){
            if(inClinic === false) {
                console.log(`NO. of visit ${noOfVisit ++}`)
                console.log(`In Clinic: ${inClinic}`)
            }
        }
        function checkIn(){
            if(inClinic === true){
                console.log(`No. of visit ${noOfVisit}`)
                console.log(`In Clinic: ${inClinic}`)
            }
            checkIn();
            checkOut();
        }


        function yearOfBirth() {
            if (yearOfBirth <= 2000) {
                this.isAdult = true
            }
            else
                this.isAdult = false
            
        }


        console.log(`Name: ${this.name}`);
        console.log(`Allergy: ${this.allergy}`);
        console.log(`Adult Status: ${this.isAdult}`);
        console.log(`Check in status: ${this.inClinic}`);


}
}


const person1 = new MedicalRecord("Raja", "Mani", 1966);
const person2 = new MedicalRecord("Mike", "Scott", 1980);
const person3 = new MedicalRecord("Kwan", "Young", 2002);

