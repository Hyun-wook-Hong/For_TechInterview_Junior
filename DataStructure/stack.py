# 프링글스 박스에 과자를 하나씩 쌓는것과 같다.
# list로 구현 가능 (똑같음)
stack = []

stack.append(5)
stack.append(2)
stack.append(3)
stack.append(7)
stack.pop()
stack.append(1)
stack.append(4)
stack.pop()

# 최상단 원소부터 출력
print(stack[::-1])
# 최하단 원소부터 출력
print(stack)