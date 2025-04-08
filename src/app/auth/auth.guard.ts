
// src/app/guards/auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requiredRole = route.data?.['role'];
  const userRole = authService.getUserRole();

  if (authService.isLoggedIn() && userRole === requiredRole) {
    return true;
  }

  // Unauthorized access
  localStorage.clear();
  return router.parseUrl('/login');
};






// import { CanActivateFn, Router } from '@angular/router';
// import { inject } from '@angular/core';
// import { jwtDecode } from 'jwt-decode';

// export const authGuard: CanActivateFn = (route, state) => {
//   const router = inject(Router);

//   const token = localStorage.getItem('token');
//   console.log(token)
//   if (token) {
//     try {
//       const decoded: any = jwtDecode(token);
//       const userRole = decoded.role;

//       if (userRole === 'admin') {
//         return true;
//       }
//     } catch (e) {
//       console.error('Invalid token:', e);
//     }
//   }

//   // Not authorized, redirect to login
//   localStorage.clear();
//   return router.parseUrl('/login');
// };
