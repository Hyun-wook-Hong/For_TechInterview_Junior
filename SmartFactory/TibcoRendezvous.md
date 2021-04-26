# TIBCO / Rendezvous란?
- Tibco / Rendezvous는 TIBCO 사에서 제공하는 UDP 방식의 데이터 전달과 TCP/IP 통신 기술이 결합된 Middleware이다.
- 각 시스템/Server 간 Subscribe/Broadcast 방식으로 통신을 하며, 각각 시스템/Server는 Subscribe 중인 모든 PC, 시스템, Server에 Broadcast 방식을 통해 패킷을 전송할 수 있다.
- 모든 Subscriber들은 Broadcast된 메세지 패킷을 수신 받을 수 있다.
- 시스템/Server 간 병렬처리를 위한 Distributed Queue Thread 트랜젝션 및 장애 발생 시 Fault Tolerance 기능을 지원한다.

- Java, C/C++, C# 등 스마트팩토리 프로젝트에 사용되는 다양한 Language를 위한 API를 제공한다. (구글링 해보니 Python도 있던데 이건 필자가 자세히 잘 모르겠다.) 
 
 MS Docs 공식 문서: https://docs.microsoft.com/ko-kr/biztalk/core/tibco-rendezvous-concepts
