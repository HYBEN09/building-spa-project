import { MainHeader } from '../components/MainHeader';

function ErrorPage() {
  return (
    <>
      <MainHeader />
      <main>
        <h1> 🚫 에러가 발생했습니다. </h1>
        <p>이 페이지를 찾을 수 없습니다 🥲</p>
      </main>
    </>
  );
}

export default ErrorPage;
