use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    println!("Guess the Number!");

    let secret_number: u32 = rand::thread_rng().gen_range(1..101);

    loop {
        println!("Enter a number: ");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Unable to read the guess");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Oops, not a number");
                continue;
            },
        };

        println!("User's guess: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => {
                println!("Too Small!");
            },
            Ordering::Greater => {
                println!("Too Big");
            },
            Ordering::Equal => {
                println!("You Win!!");
                break;
            }
        }
    }
}
