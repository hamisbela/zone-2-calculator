export interface HeartRateZone {
  lowerBound: number;
  upperBound: number;
}

export interface HeartRateResult {
  maxHeartRate: number;
  zone2Range: HeartRateZone;
  hrr?: {
    zone2Range: HeartRateZone;
  };
}

export function calculateMaxHeartRate(age: number): number {
  return 220 - age;
}

export function calculateZone2(maxHeartRate: number, restingHeartRate?: number): HeartRateResult {
  const result: HeartRateResult = {
    maxHeartRate,
    zone2Range: {
      lowerBound: Math.round(maxHeartRate * 0.6),
      upperBound: Math.round(maxHeartRate * 0.7)
    }
  };

  if (restingHeartRate) {
    const hrr = maxHeartRate - restingHeartRate;
    result.hrr = {
      zone2Range: {
        lowerBound: Math.round((hrr * 0.6) + restingHeartRate),
        upperBound: Math.round((hrr * 0.7) + restingHeartRate)
      }
    };
  }

  return result;
}