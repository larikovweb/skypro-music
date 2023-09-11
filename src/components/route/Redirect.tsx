import * as React from "react";
import {useNavigate} from "react-router-dom";

export const Redirect: React.FC<{uri: string; replace?: boolean}> = ({uri, replace}) => {
    const navigate = useNavigate();

    React.useEffect(() => navigate(uri, {replace}), []);

    return null;
};
