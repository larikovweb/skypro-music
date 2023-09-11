import * as React from "react";
import {useLocation} from "react-router-dom";

function restoreScroll(): void {
    document.documentElement.scrollTo(0, 0);
}

export const ScrollTop: React.FC = () => {
    const {pathname} = useLocation();

    React.useLayoutEffect(restoreScroll, [pathname]);

    return null;
};
