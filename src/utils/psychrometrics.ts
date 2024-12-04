// Constants for psychrometric calculations
const ATMOSPHERIC_PRESSURE = 101.325; // kPa at sea level

export interface PsychrometricResult {
  dryBulbTemp: number;
  wetBulbTemp: number;
  relativeHumidity: number;
  absoluteHumidity: number;
  dewPoint: number;
  enthalpy: number;
  specificVolume: number;
}

export function calculateSaturationPressure(temperature: number): number {
  const T = temperature + 273.15; // Convert to Kelvin
  return Math.exp(23.196 - 3816.44 / (T - 46.13));
}

export function calculateRelativeHumidity(
  dryBulb: number,
  wetBulb: number,
  pressure: number = ATMOSPHERIC_PRESSURE
): number {
  const es = calculateSaturationPressure(dryBulb);
  const ews = calculateSaturationPressure(wetBulb);
  const A = 6.66e-4 * pressure;
  return ((ews - A * (dryBulb - wetBulb)) / es) * 100;
}

export function calculateDewPoint(dryBulb: number, relativeHumidity: number): number {
  const a = 17.271;
  const b = 237.7;
  const rh = relativeHumidity / 100;
  const term1 = (a * dryBulb) / (b + dryBulb);
  const term2 = Math.log(rh);
  return (b * (term2 + term1)) / (a - term2 - term1);
}

export function calculateEnthalpy(dryBulb: number, relativeHumidity: number): number {
  const pw = (relativeHumidity / 100) * calculateSaturationPressure(dryBulb);
  const W = 0.622 * (pw / (ATMOSPHERIC_PRESSURE - pw));
  return 1.006 * dryBulb + W * (2501 + 1.86 * dryBulb);
}

export function calculateAbsoluteHumidity(dryBulb: number, relativeHumidity: number): number {
  const pw = (relativeHumidity / 100) * calculateSaturationPressure(dryBulb);
  return 0.622 * (pw / (ATMOSPHERIC_PRESSURE - pw)) * 1000; // g/kg
}

export function calculateSpecificVolume(
  dryBulb: number,
  relativeHumidity: number,
  pressure: number = ATMOSPHERIC_PRESSURE
): number {
  const Ra = 287.058; // Gas constant for air in J/(kg·K)
  const T = dryBulb + 273.15; // Convert to Kelvin
  const pw = (relativeHumidity / 100) * calculateSaturationPressure(dryBulb);
  const W = 0.622 * (pw / (pressure - pw));
  return (Ra * T * (1 + 1.6078 * W)) / (pressure * 1000); // m³/kg
}

export function calculatePsychrometricProperties(
  dryBulb: number,
  wetBulb: number
): PsychrometricResult {
  const relativeHumidity = calculateRelativeHumidity(dryBulb, wetBulb);
  const dewPoint = calculateDewPoint(dryBulb, relativeHumidity);
  const enthalpy = calculateEnthalpy(dryBulb, relativeHumidity);
  const absoluteHumidity = calculateAbsoluteHumidity(dryBulb, relativeHumidity);
  const specificVolume = calculateSpecificVolume(dryBulb, relativeHumidity);

  return {
    dryBulbTemp: dryBulb,
    wetBulbTemp: wetBulb,
    relativeHumidity,
    absoluteHumidity,
    dewPoint,
    enthalpy,
    specificVolume,
  };
}