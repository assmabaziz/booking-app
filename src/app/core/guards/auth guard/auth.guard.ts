import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router)
    const userToken = localStorage.getItem('userToken');
  if(typeof localStorage !== 'undefined') {
  if(userToken)
    {
      return true
    } else
    {
      return false;
    }
  } else {
    _Router.navigate(['/auth']);
    return false;
  }
};
