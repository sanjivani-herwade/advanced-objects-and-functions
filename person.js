 const Person = function (countryName, countryState, countryPopulation) {
    this.countryName = countryName
    this.countryState = countryState
    this.countryPopulation = countryPopulation
 }

    //Person.prototype.getMethod = function () {
        //return '${this.countryName} is ${ this.countryState}.'

    //}
        Person.prototype.city = 'sangli'


    const name = new Person('India', 'Maharashtra', 1111)
        name.getMethod = function () {
            return 'I like u'
        }
        console.log(name.getMethod())
            
    


    const person1 = new Person('Japan', 'Spane', 2233)
       Person.prototype.getMethod = function () {
           return 'sanjivani herwade'
       }
       console.log(person1.getMethod())


