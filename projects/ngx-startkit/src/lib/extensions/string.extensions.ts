declare global {
  interface String {
    toInt(radix?: number): number;
    toFloat(): number;
    toDate(): Date;
    toURL(base: string): string;
  }
}

String.prototype.toInt = function(radix) {
  return parseInt(this, radix);
};
String.prototype.toFloat = function() {
  return parseFloat(this);
};
String.prototype.toDate = function() {
  return new Date(this);
};
String.prototype.toURL = function(base) {
  if (base) {
    return new URL(this, base).href;
  }
  throw new TypeError('Invalid base URL');
};

export { };
