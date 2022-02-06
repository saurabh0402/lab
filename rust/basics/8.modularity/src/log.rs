
pub mod logger {
  pub trait Log {
    fn display_info(&self);
    fn alert(&self) {
      println!("ALERT!");
    }
  }

  pub fn logger(val: impl Log) {
    println!("--------------------------");
    val.alert();
    val.display_info();
    println!("--------------------------");
  }
  
  pub fn logger_2(val: &dyn Log) {
    println!("--------------------------");
    val.alert();
    val.display_info();
    println!("--------------------------");
  }
}