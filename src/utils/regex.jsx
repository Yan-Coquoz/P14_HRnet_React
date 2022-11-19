export const onlyTextRegex = /(^[A-Zéèîïë]{0,18})\D$/gim;
export const addressRegex = /^[0-9A-Zéèîïë\s,'-]*$/gim;
export const zipCodeRegex = /^[0-9]{5}(-[0-9]{4})?$/;
export const capitalizeRegex = /(?:^|\s+)\w/g;
export const camelCaseRegex = /[-_\s]+(.)?/g;
