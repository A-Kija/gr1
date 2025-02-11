import { useCallback, useState } from 'react';

export default function useReload() {

    const [time, setTime] = useState(Date.now());

    const reload = useCallback(_ => {
        setTime(Date.now());
    }, []);

    return { reloadTime: time, reload };
}