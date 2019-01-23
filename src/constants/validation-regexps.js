const integers = '\\d';
const cyrillic = 'а-яА-ЯёЁіІїЇєЄӘҒҚҢӨҰҮҺәғқңөұүһ';
const latin = 'a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæŒœ';
const characters = cyrillic + latin;
const commonSpec = '\'"“”';
const specStart = '«„‘¿¡';
const specEnd = '»”’!?.…)';
const notDanger = '[^\\[\\]<>\\\\]';

const commonStartEndSymbols = `${integers}${characters}${commonSpec}`;

export const text = new RegExp(`^(?!-)(?!.*--)(?!.*\\s\\s)${notDanger}[${commonStartEndSymbols}${specStart}${specEnd}]*${notDanger}+$`); // eslint-disable-line
