export interface Zone2Result {
  isZone2: boolean;
  dilutionVolume: number;
  ventilationEffectiveness: number;
}

export function calculateZone2Requirements(
  releaseRate: number,
  ventilationRate: number,
  lowerFlammableLimit: number,
  roomVolume: number
): Zone2Result {
  // Calculate the required dilution volume
  const k = 0.25; // safety factor
  const dilutionVolume = (releaseRate / (k * lowerFlammableLimit)) * 1;

  // Calculate ventilation effectiveness
  const ventilationEffectiveness = ventilationRate / dilutionVolume;

  // Determine if Zone 2 classification is required
  // Zone 2 is required if the dilution volume is greater than room volume
  // or if ventilation effectiveness is less than 1
  const isZone2 = dilutionVolume > roomVolume || ventilationEffectiveness < 1;

  return {
    isZone2,
    dilutionVolume,
    ventilationEffectiveness,
  };
}