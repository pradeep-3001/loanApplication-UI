import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const loanInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('✅ Interceptor hit for:', req.method, req.url);

  const org_id: string | null = localStorage.getItem('org_id');
  const token = localStorage.getItem('token') || '';

  let modifiedUrl = req.url;

  // Always append organization_id if available
  if (org_id) {
    modifiedUrl = addQueryParam(modifiedUrl, 'organization_id', org_id);
  }

  // Clone request with headers and possibly modified URL
  const modifiedReq = req.clone({
    url: modifiedUrl,
    setHeaders: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  return next(modifiedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('🚨 Error Intercepted:', error);

      if (error.status === 401) {
        window.location.href = '/login';
      } else if (error.status === 403) {
        alert('You do not have permission to perform this action.');
      } else if (error.status === 500) {
        console.error('🔥 Server Error! Please try again later.');
      }

      return throwError(() => new Error(error.message || 'Something went wrong!'));
    })
  );
};

// Helper function
function addQueryParam(url: string, key: string, value: string): string {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${key}=${encodeURIComponent(value)}`;
}
