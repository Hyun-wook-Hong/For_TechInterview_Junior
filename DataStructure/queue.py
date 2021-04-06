# 큐 구현을 위해 덱 모듈 import하여 사용 (list로 구현하는것 보다 5배정도 빠름)
# 데이터 선입선출(First in First Out) 자료구조로, 줄 서기와 같다.

from collections import deque
queue = deque()

queue.append(5)
queue.append(2)
queue.append(3)
queue.append(7)
queue.popleft()
queue.append(1)
queue.append(4)
queue.popleft()

print(queue)    #먼저 들어온 순서대로 출력하기
queue.reverse() #역순으로