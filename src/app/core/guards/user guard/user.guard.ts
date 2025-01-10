import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  const _PLATFORM_ID = inject(PLATFORM_ID);

  if (isPlatformBrowser(_PLATFORM_ID)) {
    if (
      localStorage.getItem('userToken')!== null  &&
      localStorage.getItem('userRole') == 'user'
    ) {
      return true
    } else { 
      _Router.navigate(['/landing-page/home']);
      return false;
    }
  } else {
    return false;
  }
};
