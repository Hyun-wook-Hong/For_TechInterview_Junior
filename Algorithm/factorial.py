# 팩토리얼 구현 예제 - 컨텐츠는 이것이 코딩 테스트다 강의 참조
'''
 N! = N x (N-1) x (N-2) x ... x 3 x 2 x 1
'''

# 반복문을 사용하여 구현
def factorial_iterative(N):
    result = 1
    for i in range(1, N+1):
        result *= i
    return result

# 재귀적으로 구현
def factorial_recursive(N):
    # 1. 1이하의 수가 오면 팩토리얼을 구할 필요가 없음
    # 2. 반복 재귀 실행되다가 N이 1이되면 그때 종료됨
    # 0!은 1임
    if N <= 1:
        return 1
    # return N * (N-1)!
    return N * factorial_recursive(N-1)

if __name__ == '__main__':
    print("Iterative factorial: ", factorial_iterative(10))
    print("Recursive factorial: ", factorial_recursive(10))