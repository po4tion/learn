fn main() {
    let a = 2;
    let result = stack_only(a);

    dbg!(result);
}

// i32 : 정수형 32비트
fn stack_only(b: i32) -> i32 {
    let c = 3;

    return b + c + stack_and_heap();
}

fn stack_and_heap() -> i32 {
    let d = 5;
    // Box는 rust의 스마트 포인터 타입
    let e = Box::new(7);

    return d + *e;
}
