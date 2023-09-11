import {cloneElement, FC} from "react";

import {useClickLink} from ".";

type Props = {
    to: string;
    onNavigate?: () => void;
    children: React.ReactElement;
};

export const NavigateClick: FC<Props> = ({children, to, onNavigate}) => {
    const onClick = useClickLink(to, onNavigate);

    return <>{cloneElement(children, {onClick})}</>;
};
