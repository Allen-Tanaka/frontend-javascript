// ✅ Branded interfaces
interface MajorCredits {
  credits: number;
  __brand: 'Major';
}

interface MinorCredits {
  credits: number;
  __brand: 'Minor';
}

// ✅ Helper functions to create branded values
function createMajorCredits(credits: number): MajorCredits {
  return { credits, __brand: 'Major' };
}

function createMinorCredits(credits: number): MinorCredits {
  return { credits, __brand: 'Minor' };
}

// ✅ Sum functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return createMajorCredits(subject1.credits + subject2.credits);
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return createMinorCredits(subject1.credits + subject2.credits);
}

// ✅ Test cases
const math: MajorCredits = createMajorCredits(3);
const physics: MajorCredits = createMajorCredits(5);
const history: MinorCredits = createMinorCredits(2);
const music: MinorCredits = createMinorCredits(1);

console.log(sumMajorCredits(math, physics));   // { credits: 8, __brand: 'Major' }
console.log(sumMinorCredits(history, music)); // { credits: 3, __brand: 'Minor' }
