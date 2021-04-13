// Helper functions

// Determine if a variable is set and is not NULL
export function isDefinedAndNotNull(variable: any): boolean {
  return variable !== undefined && variable !== null;
}

// It will create a set of query params by removing null & undefined value
export function sanitizeParams(params: { [key: string]: string | number }): {} {
  const newParam = Object.entries(params).map(param => {
    if (isDefinedAndNotNull(param['1'])) {
      return param.join('=');
    }
  });
  return newParam.filter(p => p !== undefined).join('&');
}
