fn main() {
  let mut message = String::from("Hello");
  let name = "Saurabh";

  // String is stored in heap and contains pointer, size, capacity
  message.push_str(" World");

  // &str is stored in a read only memory and contains only pointer and size
  // name.push_str(" Kumar");
  println!("{}", name);

  let slice = &message[2..4];
  let slice2 = &message[2..=4];
  println!("{} -> {}", slice.len(), slice);
  println!("{} -> {}", slice2.len(), slice2);

  let mut message_2 = String::from("Hello");
  let message_3 = message_2.clone();
  message_2.clear();

  println!("{} / {}", message_2, message_3)
}