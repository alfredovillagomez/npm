"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const format_message_1 = require("format-message");
const format_message_generate_id_1 = tslib_1.__importDefault(require("format-message-generate-id"));
const utils_1 = require("../utils");
exports.default = (dir) => {
    const locale = utils_1.getLocale(navigator);
    format_message_1.setup({
        generateId: format_message_generate_id_1.default.underscored_crc32,
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