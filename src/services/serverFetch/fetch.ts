import { cookies } from 'next/headers';
import { redirect } from '@/i18n/routing';

interface ApiOptions extends RequestInit {
  hasAuth?: boolean;
}

const api = {
  fetch: async <T>(url: string, options: ApiOptions = {}): Promise<T> => {
    const { hasAuth = false, ...fetchOptions } = options;
    let authToken = null;

    // 서버 사이드에서만 cookies() 함수 사용
    if (typeof window === 'undefined' && hasAuth) {
      const cookieStore = cookies();
      authToken = cookieStore.get('auth_token')?.value;
    }

    const headers = new Headers(fetchOptions.headers || {});
    headers.set('Content-Type', 'application/json');

    // 인증이 필요한 요청일 경우, cookie에서 꺼낸 토큰 넣기
    if (hasAuth && authToken) {
      headers.set('Authorization', `Bearer ${authToken}`);
    }

    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      next: { revalidate: 60 }, // 필요에 따라 조정, 혹은 파라미터로 넘겨받게 수정하기
    });

    if (!response.ok) {
      if (response.status === 401) {
        // 서버 사이드에서의 처리
        if (typeof window === 'undefined') {
          // TODO: 인증기간 만료로 재로그인 하라는 알림 보내는 설정 해야함.
          redirect('/?isLogout=true');
        } else {
          // 클라이언트 사이드에서의 처리
          window.location.href = '/?isLogout=true';
        }
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  get: <T>(url: string, options: ApiOptions = {}) =>
    api.fetch<T>(url, { ...options, method: 'GET' }),

  post: <T, D>(url: string, data: D, options: ApiOptions = {}) =>
    api.fetch<T>(url, { ...options, method: 'POST', body: JSON.stringify(data) }),
};

export default api;
