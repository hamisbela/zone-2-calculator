export const CM_TO_INCHES = 0.393701;
export const INCHES_TO_CM = 2.54;

export function convertCmToInches(cm: number): number {
  return cm * CM_TO_INCHES;
}

export function convertInchesToCm(inches: number): number {
  return inches * INCHES_TO_CM;
}

export function calculateDrawLength(wingspan: number, unit: 'cm' | 'inches'): number {
  const wingspanInInches = unit === 'cm' ? convertCmToInches(wingspan) : wingspan;
  return wingspanInInches / 2.5;
}