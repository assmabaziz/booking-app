import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router)
  const userToken = localStorage.getItem('userToken');
  const userRole  = localStorage.getItem('userRole')
if(typeof localStorage !== 'undefined') {
if(userToken && userRole === 'admin' )
  {
    return true
  } else
  {
    return false;
  }
} else {
  _Router.navigate(['/landing-page']);
  return false;
}
};
