const HKDF = require('./hkdf');

class HKDFv3 extends HKDF {
  getIterationStartOffset() {
    return 1;
  }
}
module.exports = HKDFv3;
