# TIBCO / Rendezvous란?
- TibcoRendezvous는 TIBCO 사에서 제공하는 UDP 방식의 데이터 전달과 TCP/IP 통신 기술이 결합된 Middleware이다.
- List, Json 등의 가공의 Data에 대해 100% 무결성을 보장하며, 필요 시 설정여부에 한해 PC에 Log로 남겨주기도 한다. 
- 현재 국내 많은 MES 구축 및 확산 프로젝트 진행 시 통신 Middleware로 채택되어 사용 되고 있는걸로 알고 있음. (새로운 사실 발견하면 수정 요망)
- ~구축 비용이 아주 비쌈~
- 각 시스템/Server 간 Subscribe/Broadcast 방식으로 통신을 하며, 각각 시스템/Server는 Subscribe 중인 모든 PC, 시스템, Server에 Broadcast 방식을 통해 패킷을 전송할 수 있다.
- 모든 Subscriber들은 Broadcast된 메세지 패킷을 수신 받을 수 있다.
- 시스템/Server 간 병렬처리를 위한 Distributed Queue Thread 트랜젝션 처리 및 장애 발생 시 Fault Tolerance 기능을 지원한다.

- Java, C/C++, C# 등 스마트팩토리 프로젝트에 사용되는 다양한 Language를 위한 API를 제공한다. (구글링 해보니 Python도 API가 있던데 이건 필자가 현업에서 써본적이 없어서 자세히 잘 모르겠다.) 
 
 MS Docs 공식 문서: https://docs.microsoft.com/ko-kr/biztalk/core/tibco-rendezvous-concepts
