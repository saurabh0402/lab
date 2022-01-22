fn main() {
    let message = "Hello World";
    let reply = print_welcome(message);
    print!("Reply - {}", reply);
}

fn print_welcome(text: &str) -> &str {
    println!("{}", text);
    // return "Hi, there";
    "Hi, there"
}