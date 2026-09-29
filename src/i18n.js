import en from "./locales/en.json";
import es from "./locales/es.json";
import {createI18n} from "vue-i18n";

/**
 * Shared internationalization service used across presentation modules.
 *
 * @remarks
 * Configured with `legacy: false` to enable the Composition API mode of
 * vue-i18n, which is required for `useI18n()` to work inside `<script setup>`.
 */
const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: {en, es}
});

export default i18n;