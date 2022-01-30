fn main() {
    // ------ Integers ------
    let print_msg = true;
    let n1: i32 = 10;
    let n2: u8 = 255;
    println!("Print Msg - {}, N1 - {}, N2 - {}", print_msg, n1, n2);

    // ------ Size ------
    let n3: isize = -52;
    let n4: usize = 55;
    println!("N3 - {}, N4 - {}", n3, n4);

    // ------ Various interger representation ------
    let custom_num = 10_000;
    let hex_num = 0x1f;
    let bin_num = 0b1_1;
    let byte_num = b'A';

    println!("Custom Num - {}", custom_num);
    println!("Hex Num - {}", hex_num);
    println!("Bin Num - {}", bin_num);
    println!("Byte Num - {}", byte_num);

    // ------ Floats ------
    let f1: f32 = 10.12;
    println!("Float: {}", f1);

    // ------ Tuples ------
    let tup: (i32, f32, i64) = (10, 10.2, 120);
    println!("({}, {}, {})", tup.0, tup.1, tup.2);

    let (a, b, c) = tup;
    println!("a - {}, b - {}, c - {}", a, b, c);

    // ------ Arrays ------
    let x: [i32; 4] = [1,2,3,4];
    println!("[{}, {}, {}, {}]", x[0], x[1], x[2], x[3]);

    let y = [2; 4]; // [2,2,2,2]
    println!("[{}, {}, {}, {}]", y[0], y[1], y[2], y[3]);
}