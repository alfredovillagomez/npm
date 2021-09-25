import { setup } from 'format-message';
import generate from 'format-message-generate-id';
import { getLocale } from '../utils';
export default (dir) => {
    const locale = getLocale(navigator);
    setup({
        generateId: generate.underscored_crc32,
        locale,
        missingTranslation: 'ignore',
        translations: { [locale]: require(`${dir}/${locale}.json`) },
        missingReplacement: (_pattern, id, _missingLocale) => {
            const node = require(`${dir}/es.json`)[id] || {};
            return node.message || 'Text not translated';
        },
    });
};
//# sourceMappingURL=setup.js.map