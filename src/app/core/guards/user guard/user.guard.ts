import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  //   const _Router = inject(Router)
  //   const userToken = localStorage.getItem('userToken');
  //   const userRole  = localStorage.getItem('userRole')
  // if(typeof localStorage !== 'undefined') {
  // if(userToken && userRole === 'user' )
  //   {
  //     return true
  //   } else
  //   {
  //     return false;
  //   }
  // } else {
  //   _Router.navigate(['/landing-page']);
  //   return false;
  // }

  const _Router = inject(Router);
  const _PLATFORM_ID = inject(PLATFORM_ID);

  if (isPlatformBrowser(_PLATFORM_ID)) {
    if (
      localStorage.getItem('userToken') &&
      localStorage.getItem('userRole') == 'admin'
    ) {
      _Router.navigate(['/auth']);
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
