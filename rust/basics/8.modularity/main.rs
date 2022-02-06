use modularity::log::logger::{
  logger, logger_2, Log
};

use modularity::animal::Animal;

fn main() {
  let a = Animal("Dog".to_string(), 10);
  a.display_info();
  a.alert();

  logger_2(&a);
  logger(a);
}
