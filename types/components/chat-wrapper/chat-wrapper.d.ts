import '../../stencil.core';
export declare class ChatWrapper {
    /**
     * Estado actual del widget. true = abierto, false = cerrado
     */
    opened: boolean;
    closeWelcomeMessage: boolean;
    el: HTMLElement;
    fontumiConfig: any;
    /**
     * Escuchar el evento "toggle" que dispara <bubble-button /> cuando es presionado
     */
    toggle(): void;
    hi(): void;
    componentWillLoad(): void;
    /**
     * Cuando carge el widget, esperar 5s para eliminar el widget de Hubspot (si existe) ;)
     */
    componentDidLoad(): void;
    render(): JSX.Element;
}
