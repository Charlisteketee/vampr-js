class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    //climb up the tree (using iteration), counting nodes, until not more vampires are found
    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    // use numberOfVampiresFromOriginal to return the vampire with the smaller 'numberOfVampiresFromOriginal'
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }

    // Returns the vampire object with that name, or null if no vampire exists with that name
    vampireWithName(name) {

    }
  
    // Returns the total number of vampires that exist
    get totalDescendents() {
  
    }
  
    // Returns an array of all the vampires that were converted after 1980
    get allMillennialVampires() {
  
    }
};

const original = new Vampire("Original", 1000);

const ansel = new Vampire("Ansel", 2000);
const bart = new Vampire("Bart", 2000);

const elgort = new Vampire("Elgort", 3000);
const sarah = new Vampire("Sarah", 3000);

const andrew = new Vampire("Andrew", 4000);

ansel.addOffspring(original);
bart.addOffspring(original);
elgort.addOffspring(ansel);
sarah.addOffspring(ansel);
andrew.addOffspring(elgort);

module.exports = Vampire;

