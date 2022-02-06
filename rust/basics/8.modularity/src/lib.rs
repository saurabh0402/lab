pub mod log;

pub mod animal {
  pub struct Animal(pub String, pub u32);

  impl super::log::logger::Log for Animal {
    fn display_info(&self) {
      println!("{} - {}", self.0, self.1);
    }
  }
}
