# 재귀 함수 (Recursive Function)
# 특정 조건을 만족하기 전까지는 계속 마지막에 자기 자신을 호출하는 함수
# DFS 알고리즘에서 사용 

# **아래처럼 종료 조건을 제대로 명시하지 않으면 함수가 무한히 호출될 수 있다.

def recursive_func(a):
    if a == 100:
        print(a, '번째에서 종료됩니다.')
        return
    print(a, '번째 재귀 함수가', a+1, '번째 재귀 함수를 호출합니다.')
    recursive_func(a + 1)

recursive_func(1)
