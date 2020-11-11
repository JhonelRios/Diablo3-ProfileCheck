import classes from '../utils/heroClasses';

export function useHeroName(classSlug) {
  return classes[classSlug];
}
