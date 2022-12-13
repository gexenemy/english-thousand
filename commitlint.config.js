module.exports = {
    rules: {
        // Тело коммита должно начинаться с пустой строки
        'body-leading-blank': [2, 'always'],

        // Нижний колонтитул коммита должен начинаться с пустой строки
        'footer-leading-blank': [2, 'always'],

        // Максимальная длина заголовка 72 символа
        'header-max-length': [2, 'always', 72],

        // Область всегда только в нижнем регистре
        'scope-case': [2, 'always', 'lower-case'],

        // Описание не может быть пустым
        'subject-empty': [2, 'never'],

        // Описание не должно заканчиваться '.'
        'subject-full-stop': [2, 'never', '.'],

        // Тип всегда только в нижнем регистре
        'type-case': [2, 'always', 'lower-case'],

        // Тип не может быть пустым
        'type-empty': [2, 'never'],

        // Перечислим все возможные варианты коммитов
        'type-enum': [2, 'always', ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'update']],
        // 'trailer-exists': [2, 'always', 'ref:'],
    },
    prompt: {
        questions: {
            type: {
                description: 'Выберите тип изменения, которое вы фиксируете',
                enum: {
                    feat: {
                        description: 'Добавление нового функционала',
                        title: 'Новый функционал',
                        emoji: '✨',
                    },
                    fix: {
                        description: 'Исправление ошибок',
                        title: 'Исправление ошибок',
                        emoji: '🐛',
                    },
                    docs: {
                        description: 'Обновление документации',
                        title: 'Документация',
                        emoji: '📚',
                    },
                    style: {
                        description: 'Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
                        title: 'Стили',
                        emoji: '💎',
                    },
                    refactor: {
                        description: 'Правки кода без исправления ошибок или добавления новых функций',
                        title: 'Правки кода',
                        emoji: '📦',
                    },
                    perf: {
                        description: 'Изменения направленные на улучшение производительности',
                        title: 'Улучшение производительности',
                        emoji: '🚀',
                    },
                    test: {
                        description: 'Добавление тестов или изменение существующих',
                        title: 'Тесты',
                        emoji: '🚨',
                    },
                    build: {
                        description: 'Сборка проекта или изменения внешних зависимостей',
                        title: 'Сборка',
                        emoji: '🛠',
                    },
                    ci: {
                        description: 'Изменения в наших файлах конфигурации и сценариях CI (примеры: Travis, Circle, BrowserStack, SauceLabs)',
                        title: 'Непрерывная интеграция',
                        emoji: '⚙️',
                    },
                    update: {
                        description: 'Обновление пакетов или библиотек',
                        title: 'Обновление',
                        emoji: '♻️',
                    },
                    revert: {
                        description: 'Откат на предыдущие коммиты',
                        title: 'Откат',
                        emoji: '🗑',
                    },
                },
            },
            scope: {
                description: 'Какова область действия этого изменения (например, компонент или имя файла)',
            },
            subject: {
                description: 'Напишите краткое описание изменения в повелительном наклонении',
            },
            body: {
                description: 'Предоставьте более подробное описание изменения',
            },
            isBreaking: {
                description: 'Есть ли критические изменения?',
            },
            breakingBody: {
                description: 'Для коммита BREAKING CHANGE требуется тело. Пожалуйста, введите более подробное описание самой фиксации',
            },
            breaking: {
                description: 'Опишите критические изменения',
            },
            isIssueAffected: {
                description: 'Влияет ли это изменение на какие-либо открытые проблемы?',
            },
            issuesBody: {
                description: 'Если проблема закрыта, для коммита требуется тело. Пожалуйста, введите более подробное описание самой фиксации',
            },
            issues: {
                description: 'Добавьте ссылки на проблему (task, bug, user-story ...) (например: "ref #22314".)',
            },
        },
    },
};
