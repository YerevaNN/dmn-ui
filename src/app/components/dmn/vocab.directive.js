export function VocabDirective($parse) {
  'ngInject';

  return {
    restrict: 'A',
    require: '^ngModel',
    link(scope, elem, attrs, ngModel) {
      ngModel.$validators.inVocab = function (modelValue, viewValue) {
        if (ngModel.$isEmpty(modelValue)) {
          return true;
        }

        const vocab           = $parse(attrs.vocab)(scope);
        const wordsNotInVocab = $parse(attrs.notInVocab)(scope);

        const value = modelValue || viewValue;
        const words = value.toLowerCase().match(/[^\s!?,.]+/g);

        wordsNotInVocab.length = 0;

        for (let i = 0; i < words.length; i++) {
          if (!vocab.has(words[i])) {
            wordsNotInVocab.push(words[i]);
          }
        }

        return !wordsNotInVocab.length;
      };
    }
  }
}
