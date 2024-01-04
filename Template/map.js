// 하나의 key 여러개의 values 가지는 map 만들기
map.get(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);