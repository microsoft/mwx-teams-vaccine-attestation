import { IPersonaProps } from '@fluentui/react/lib/Persona';

export function getUserInitials(displayName:string):string {
  const names = displayName.split(' ');
  if (names.length === 0)
    return '?';

  else if (names.length === 1)     
      return displayName[0];          

  return `${names[0][0]}${names[names.length - 1][0]}`;      
}

export function isStringNullUndefinedBlank(value:string|undefined|null):boolean {
  return ((value === undefined) || (value === null) || (value.trim().length === 0));
}

export function isDateNullUndefinedInFuture(value:Date|undefined|null):boolean {
  return ((value === undefined) || (value === null) || (value > new Date()));
}

export function isNumberNullUndefined(value:number|undefined|null):boolean {
  return ((value === undefined) || (value === null));
}

export function isPeronaPropsNullUndefined(value:IPersonaProps|undefined|null):boolean {
  return ((value === undefined) || (value === null));
}

export function formatDateTime(value:Date) {
  return `${value.toLocaleDateString()} ${value.toLocaleTimeString()}`
}