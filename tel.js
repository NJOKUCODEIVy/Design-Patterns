class Telephone {
    constructor() {
      this.phoneNumbers = new Set();
      this.observers = [];
    }
  
    addPhoneNumber(number) {
      this.phoneNumbers.add(number);
    }
  
    removePhoneNumber(number) {
      this.phoneNumbers.delete(number);
    }
  
    dialPhoneNumber(number) {
      if (this.phoneNumbers.has(number)) {
        this.notifyObservers(number);
      }
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(number) {
      for (const observer of this.observers) {
        observer.notify(number);
      }
    }
  }
  
  class Observer {
    constructor(callback) {
      this.callback = callback;
    }
  
    notify(number) {
      this.callback(number);
    }
  }
  
  // Example usage
  const telephone = new Telephone();
  
  // Create observers
  const observer1 = new Observer((num) => console.log(num));
  const observer2 = new Observer((num) => console.log(`Now Dialling ${num}`));
  
  telephone.addObserver(observer1);
  telephone.addObserver(observer2);
  
  // Add and dial a phone number
  telephone.addPhoneNumber("2347023232");
  telephone.dialPhoneNumber("2347023232");