use std::io;

fn main() {
    let mut input = String::new();
    let s1 = &mut input; // 가변 차용을 했으면 다른 차용은 할 수 없다. s2를 가변 차용으로 바꿔도 안된다. Rust는 단일 가변 차용만 되거나 원하는 만큼의 불변 차용만 가능하기 때문이다.
    let s2 = &input;

    // println!("s1: {} s2: {}", s1, s2);

    // some_fn(&mut input);
    io::stdin().read_line(&mut input).unwrap();

    println!("Input: {}", input);

    // 느낌표가 붙어있는 이 코드는 매크로(메타 프로그래밍)라고 한다. 더 많은 코드를 작성하는 방법 중 하나이다. 변수와 다수의 매개변수 그리고 매번 다른 유형으로 처리될 수 있다. 매크로의 단점은 함수를 정의하는 것보다 더 복잡하다는 것이다.
    // println!("Number: {}, String: {}", 100, "김동규");

    // 변수의 유형은 명시할 필요가 없다. 러스트 컴파일러가 자동 추론을 해준다.
    // mut은 가변 변수일 경우 선언한다. rust에서 변수 선언은 기본적으로 불변형이다.
    let mut mars_weight = calculate_weight_on_mars(100.0);
    mars_weight = mars_weight * 1000.0;
    println!("Weight on Mars: {}kg", mars_weight);

    // main 함수에서는 값을 반환하지 않으므로 세미콜론을 붙여야 한다.
    // calculate_weight_on_mars(100.0);
}

fn calculate_weight_on_mars(weight: f32) -> f32 {
    (weight / 9.81) * 3.711
}

fn some_fn(s: &mut String) {
    s.push_str("a"); // &String 기본 참조일 때는 값을 바꾸지 못한다
}

/*
    소유권(Ownership)

    Rust에는 3가지 소유권 규칙이 있다.

    1. 각각의 값은 변수가 소유한다.
    2. 소유자가 범위를 벗어나면 그 값은 해제된다.
    3. 특정 시점에 값의 소유자는 단 하나이다.

*/
