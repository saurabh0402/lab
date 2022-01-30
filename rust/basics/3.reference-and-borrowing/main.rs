fn main() {
  let mut message = String::from("Hello World");
  let message_2 = &mut message;
  // message_2 is borrowing a mutable reference to message
  
  message_2.push_str("!");
  (*message_2).push_str(" How are you?");
  // * is called the dereferencing operator and takes us to the value in the reference
  // On line 6, we can see that Rust adds it implicitly

  println!("{}", message_2);
  println!("{}", message);
  // We can not reverse the order of println! here
  // This is because we can not do an immutable borrow while doing mutable borrow at the same time

  let a = 10;
  let b = &a;

  println!("{}", a);
  println!("{}", b);
  println!("{:p}", b); // Print pointer address
  
  let c = &&100;
  println!("{:p}", c);
}