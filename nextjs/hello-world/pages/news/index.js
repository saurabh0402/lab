import Link from 'next/link';

function News() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/news/news-1"> News 1 </Link>
        </li>
        <li>
          <Link href="/news/news-2"> News 2 </Link>
        </li>
      </ul>
    </div>
  );
}

export default News;