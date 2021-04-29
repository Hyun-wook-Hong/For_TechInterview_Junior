# 컴포넌트(Component)의 생명 주기
## Mounting
> 리액트가 실행되고 DOM에 인스턴스가 insert 될 때의 일련의 과정을 의미 
- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()  
## Updating
> 사용자가 컨텐츠를 업데이트할 때, rendering 되는 일련의 과정을 의미
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()   
## Unmounting
> 컴포넌트가 종료될 때의 일련의 과정
- componentWillUnmount()
