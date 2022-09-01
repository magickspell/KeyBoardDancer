/*
Функция возвращает роут.
code - страничка до которой нужно вернуть роут.
Функция вызывается в App компоненте (главный роутер) и в других компонентах.
Позволяет менять значения в только текущем документе, не думая о других местах в коде.
*/
interface funcProps {
    code: string,
}

export const RedirectFunc = (obj: funcProps): string => {
    switch (obj.code) {

        case '':
            return '/';

        case 'main':
            return '/';

        case 'info':
            return '/info';

        case 'leaderboard':
            return '/leaderboard';

        case 'game':
            return '/game';

        case 'auth':
            return '/auth';

        //DEFAULTS
        default:
            return '/404';
    }
    //return 'ok' //void
}