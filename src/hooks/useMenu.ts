import { useState } from "react";

export function useMenu() {
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => setMenuAberto(!menuAberto);
    const fecharMenu = () => setMenuAberto(false);

    return {
        menuAberto,
        alternarMenu,
        fecharMenu
    };
}