import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  notFound(); // 이 페이지에 도달하면 항상 not-found 페이지를 표시
}
