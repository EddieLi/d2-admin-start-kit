export default {
  methods: {
    onChangeLocale (command) {
      this.$i18n.locale = command
      let message = `${this.$t('GENERAL.CURR_LANGUAGE')} ${this.$t('_name')} [ ${this.$i18n.locale} ]`
      if (['TRAVIS', 'NETLIFY'].includes(process.env.VUE_APP_BUILD_MODE)) {
        message = [
          `${this.$t('GENERAL.CURR_LANGUAGE')} ${this.$t('_name')} [ ${this.$i18n.locale} ]`,
          ``
        ].join('<br/>')
      }
      this.$notify({
        title: `${this.$t('GENERAL.LOCALE_CHANGED')}`,
        dangerouslyUseHTMLString: true,
        message
      })
    }
  }
}
