class Key {
  constructor(private signature: number) {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  public abstract OpenDoor(key: Key): boolean;
}
class MyHouse extends House {
  public OpenDoor(key: Key): boolean {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      return true;
    }
    return false;
  }
}

const key = new Key(3);

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
