import { useRouter } from 'next/router';

function NewsDetails() {
  const router = useRouter();
  return (
    <h1> The Details of the news - {router.query.newsId} here!</h1>
  );
}

export default NewsDetails;