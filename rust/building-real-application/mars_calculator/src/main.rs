fn main() {
    // 느낌표가 붙어있는 이 코드는 매크로(메타 프로그래밍)라고 한다. 더 많은 코드를 작성하는 방법 중 하나이다. 변수와 다수의 매개변수 그리고 매번 다른 유형으로 처리될 수 있다. 매크로의 단점은 함수를 정의하는 것보다 더 복잡하다는 것이다.
    // println!("Number: {}, String: {}", 100, "김동규");

    println!("Weight on Mars: {}kg", calculate_weight_on_mars(100.0));

    // main 함수에서는 값을 반환하지 않으므로 세미콜론을 붙여야 한다.
    // calculate_weight_on_mars(100.0);
}

fn calculate_weight_on_mars(weight: f32) -> f32 {
    (weight / 9.81) * 3.711
}
