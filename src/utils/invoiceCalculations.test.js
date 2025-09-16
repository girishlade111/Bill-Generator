import { calculateGrandTotal } from './invoiceCalculations.js';
import assert from 'assert';

function testCalculateGrandTotal() {
  const result = calculateGrandTotal('100.00', 10);
  const expected = '110.00';
  assert.strictEqual(result, expected, `Expected ${expected}, but got ${result}`);
  console.log('testCalculateGrandTotal passed.');
}

try {
  testCalculateGrandTotal();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
