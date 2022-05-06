import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!this.getPath(route)) {
      return null;
    }
    // @ts-ignore
    return this.storedRoutes.get(this.getPath(route));
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.storedRoutes.get(this.getPath(route));
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  shouldReuseRoute(to: ActivatedRouteSnapshot, from: ActivatedRouteSnapshot): boolean {
    return to.routeConfig === from.routeConfig;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    if (route.routeConfig?.path && handle) {
      this.storedRoutes.set(route.routeConfig.path, handle);
    }
    console.log('store', route.routeConfig?.path, handle, this.storedRoutes);
  }

  private getPath(route: ActivatedRouteSnapshot): string {
    if (route.routeConfig !== null && route.routeConfig.path !== null) {
      return route.routeConfig?.path || '';
    }
    return '';
  }
}

