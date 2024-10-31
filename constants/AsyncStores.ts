/**
 * Async Storage Constants
 */

export enum AsyncStoreKeys {
  USER_THEME = 1,
  USER_CATS = 2
}

export const AsyncStoreMap: any = new Map([
  [AsyncStoreKeys.USER_THEME, "@user_theme"],
  [AsyncStoreKeys.USER_CATS, "@user_categories"]
]);
