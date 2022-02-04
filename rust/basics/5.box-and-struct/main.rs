// Rust does not have classes, it has struct
struct Person {
  name: String,
  last_name: String,
  age: u32,
}

impl Person {
  // "Kind of" a Constructor function - we can name it anything and can have multiple of these as well
  fn new(name: String, last_name: String, age: u32) -> Person {
    Person {
      name,
      last_name,
      age,
    }
  }

  // Associated function
  fn some_function() {
    println!("Creating something awesome");
  }

  fn display_age(&self) {
    println!("Age: {}", self.age);
  }

  fn change_age(&mut self, new_age: u32) {
    self.age = new_age;
  }
}

fn main() {
  // A primitive value like number is stored in stack
  let num = 32;
  // But if we want to store it in the heap, we can use Box
  let num_2 = Box::new(num);
  println!("{}", num_2);

  Person::some_function();

  let mut p = Person {
    name: String::from("Someone"),
    last_name: "Awesome".to_string(),
    age: 101
  };

  let p2 = Person::new(
    String::from("Someone"),
    "Awesome 2".to_string(),
    101
  );

  println!("{} {} - {}", p.name, p.last_name, p.age);
  println!("{} {} - {}", p2.name, p2.last_name, p2.age);
  p.change_age(150);
  p.display_age();
  println!("{} {} - {}", p.name, p.last_name, p.age);
}