import { cookies } from 'next/headers';
import { redirect } from '@/i18n/routing';

interface ApiOptions extends RequestInit {
  hasAuth?: boolean;
  cacheStrategy?: 'no-store' | 'force-cache' | number;
}

const api = {
  fetch: async <T>(url: string, options: ApiOptions = {}): Promise<T> => {
    const { hasAuth = false, cacheStrategy = 'no-store', ...fetchOptions } = options;
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

    // 캐시 옵션 설정하기
    let cacheOptions = {};
    if (cacheStrategy === 'no-store') {
      // 'no-store': 캐시를 사용하지 않고 항상 네트워크에서 새로운 데이터를 가져옴
      // - 매 요청마다 서버에 새로운 데이터를 요청함
      // - 항상 최신 데이터를 보장하지만, 응답 시간이 길어질 수 있고 서버 부하가 증가할 수 있음
      // - 실시간 데이터나 매우 자주 변경되는 데이터에 적합
      cacheOptions = { cache: 'no-store' };
    } else if (cacheStrategy === 'force-cache') {
      // 'force-cache': 가능한 한 캐시를 최대한 사용
      // - 캐시된 응답이 있으면 항상 그것을 사용하며, 만료 여부를 확인하지 않음
      // - 캐시된 응답이 없는 경우에만 네트워크 요청을 수행
      // - 응답 속도가 매우 빠르지만, 데이터가 오래된 상태일 수 있음
      // - 거의 변경되지 않는 정적 데이터에 적합
      cacheOptions = { cache: 'force-cache' };
    } else if (typeof cacheStrategy === 'number') {
      // 숫자 값(초 단위): 지정된 시간 동안 캐시를 유지하는 재검증 전략
      // - 캐시된 데이터를 지정된 시간(초) 동안 유지함
      // - 시간이 지나면 백그라운드에서 새 데이터를 가져오고, 그동안 캐시된 데이터를 제공
      // - 데이터의 신선도와 성능 사이의 균형을 제공
      // - 주기적으로 업데이트되는 데이터에 적합
      cacheOptions = { next: { revalidate: cacheStrategy } };
    }

    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      ...cacheOptions,
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
