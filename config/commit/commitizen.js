'use strict';

module.exports = {
    types: [
        {
            value: 'build',
            name: 'build:     Сборка проекта или изменения внешних зависимостей',
        },
        { value: 'ci', name: 'ci:        Настройка CI и работа со скриптами' },
        { value: 'docs', name: 'docs:      Обновление документации' },
        { value: 'feat', name: 'feat:      Добавление нового функционала' },
        { value: 'fix', name: 'fix:       Исправление ошибок' },
        {
            value: 'perf',
            name: 'perf:      Изменения направленные на улучшение производительности',
        },
        {
            value: 'refactor',
            name: 'refactor:  Правки кода без исправления ошибок или добавления новых функций',
        },
        { value: 'revert', name: 'revert:    Откат на предыдущие коммиты' },
        {
            value: 'style',
            name: 'style:     Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
        },
        { value: 'test', name: 'test:      Добавление тестов' },
        {
            value: 'update',
            name: 'update:      Обновление пакетов или библиотек',
        },
    ],

    // Область. Она характеризует фрагмент кода, которую затронули изменения
    scopes: [
        { name: 'components' },
        { name: 'utils' },
        { name: 'git' },
        { name: 'hooks' },
        { name: 'storybook' },
        { name: 'assets' },
        { name: 'linters' },
        { name: 'pages' },
        { name: 'package' },
    ],
    messages: {
        type: 'Какие изменения вы вносите?',
        scope: '\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):',
        // Спросим если allowCustomScopes в true
        customScope: 'Укажите свою ОБЛАСТЬ:',
        subject: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n',
        body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
        breaking: 'Список BREAKING CHANGES (опционально):\n',
        footer: 'Место для мета данных (тикетов, ссылок и остального). Например: #23456, #24355\n',
        confirmCommit: 'Вас устраивает получившийся коммит?',
    },

    // Разрешим собственную ОБЛАСТЬ
    allowCustomScopes: true,

    // Запрет на Breaking Changes
    allowBreakingChanges: false,

    // Префикс для нижнего колонтитула
    footerPrefix: 'ref:',

    // limit subject length
    subjectLimit: 72,
};
