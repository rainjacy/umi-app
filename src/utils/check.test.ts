import path from 'path';
import { checkSelfContained } from './check';

describe('checkSelfContained', () => {
  it('should return true for the Guide component', () => {
    const guidePath = path.resolve(__dirname, '../../src/components/Guide');
    const result = checkSelfContained(guidePath);
    expect(result).toBe(true);
  });

  it('should return false for a non-existent component', () => {
    const nonExistentPath = path.resolve(
      __dirname,
      '../../src/components/NonExistent',
    );
    const result = checkSelfContained(nonExistentPath);
    expect(result).toBe(false);
  });

  it('should return false for a path outside the components directory', () => {
    const outsidePath = path.resolve(__dirname, '../../src/utils');
    const result = checkSelfContained(outsidePath);
    expect(result).toBe(false);
  });

  it('should return false for the Case01 component', () => {
    const guidePath = path.resolve(__dirname, '../../src/components/Case01');
    const result = checkSelfContained(guidePath);
    expect(result).toBe(false);
  });

  it('should return true for the Case02 component', () => {
    const guidePath = path.resolve(__dirname, '../../src/components/Case02');
    const result = checkSelfContained(guidePath);
    expect(result).toBe(true);
  });
});
