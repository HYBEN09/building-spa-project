// Challenge / Exercise

// 3.모든 페이지 구성 요소 위에 <MainNavigation> 구성 요소를 추가하는 루트 레이아웃 추가
// 4. MainNavigation에 올바르게 작동하는 링크 추가
// 5. EMainNavigation의 링크가 활성 상태일 때 "활성" 클래스를 받도록 합니다.
// 6. 더미 이벤트 목록을 EventsPage에 출력
//    모든 목록 항목에는 해당 EventDetailPage에 대한 링크가 포함되어야 합니다.
// 7. EventDetailPage에 선택한 이벤트의 ID 출력
// BONUS:모든 /events... 페이지 구성 요소 위에 <EventNavigation> 구성 요소를 추가하는 다른(중첩된) 레이아웃 경로를 추가합니다.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditEventPage from './pages/EditEvent';
import EventPage from './pages/Event';
import EventDetailPage from './pages/EventDetail';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // 상대 경로로 변환
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventPage /> },
      { path: 'events/:eventId', element: <EventDetailPage /> },
      { path: 'events/new', element: <NewEventPage /> },
      { path: 'events/:eventId/edit', element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
