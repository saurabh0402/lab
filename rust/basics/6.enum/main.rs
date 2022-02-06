enum Identity {
  Passport(u32),
  Aadhaar(String),
}

impl std::fmt::Display for Identity {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    match self {
      Identity::Passport(id) => {
        write!(f, "Passport ID - {}", id);
      },
      Identity::Aadhaar(id) => {
        write!(f, "Aadhaar ID - {}", id);
      }
    }

    write!(f, "Not Found!")
  }
}

struct Person {
  name: String,
  last_name: String,
  age: u32,
  id: Identity,
}

struct Animal (String, u32);

impl Person {
  fn print(&self) {
    println!("{} {} - {} - {}", self.name, self.last_name, self.age, self.id);
  }
}

fn  check_identity(id: Identity) {
  if let Identity::Passport(passport_id) = id {
    println!("User gave passport with ID - {}", passport_id);
  } else {
    println!("User does not have a passport");
  }

  match id {
    Identity::Aadhaar(val) => {
      println!("Aadhaar No. - {}", val);
    },
    Identity::Passport(val) => {
      println!("Passport ID - {}", val);
    }
  }
}

fn main() {
  let p = Person {
    name: String::from("Someone"),
    last_name: String::from("Awesome"),
    age: 201,
    id: Identity::Passport(9863748),
  };

  let p2 = Person {
    name: String::from("Someone"),
    last_name: String::from("Awesome 2"),
    age: 201,
    id: Identity::Aadhaar("YoYoYo".to_string()),
  };

  p.print();
  p2.print();
  println!("------------------------");

  check_identity(p.id);
  println!("------------------------");

  check_identity(p2.id);
  println!("------------------------");

  let a = Animal("Dog".to_string(), 10);
  println!("{} - {}", a.0, a.1);
  println!("------------------------");

  let Animal(animal_name, _) = a;
  println!("{}", animal_name);
}