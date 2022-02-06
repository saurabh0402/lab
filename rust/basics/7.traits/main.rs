
trait Log {
  fn display_info(&self);
  fn alert(&self) {
    println!("ALERT!");
  }
}

struct Animal(String, u32);

impl Log for Animal {
  fn display_info(&self) {
    println!("{} - {}", self.0, self.1);
  }
}

fn main() {
  let a = Animal("Dog".to_string(), 10);
  a.display_info();
  a.alert();

  logger_2(&a);
  logger(a);
}

fn logger(val: impl Log) {
  println!("--------------------------");
  val.alert();
  val.display_info();
  println!("--------------------------");
}

fn logger_2(val: &dyn Log) {
  println!("--------------------------");
  val.alert();
  val.display_info();
  println!("--------------------------");
}