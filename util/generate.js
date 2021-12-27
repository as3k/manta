import generate from 'ultra-ignorant-aardvark'

const generated = ({ 
  adverb = false, 
  predicate = false, 
  cap_first = false, 
  number = false, 
  punctuation = false 
}) => generate({
  delimiter: '_',
  includeRandomAdverbs: adverb,
  includePredicate: predicate,
  capitalizeFirstWord: cap_first,
  capitalizeAllWords: false,
  numberOfRandomEndingNumbers: number ? 3 : 0,
  includeRandomEndingPunctuation: punctuation
})

export default generated
