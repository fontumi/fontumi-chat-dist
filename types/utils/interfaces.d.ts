export interface Message {
    name: string;
    message: Array<any>;
    isUser: boolean;
}
/**
 * Imágen
 * @imageUri URL de la imágen
 */
export interface MessageImage {
    imageUri: string;
}
/**
 * Carta
 * @imageUri URL de la imágen de la tarjeta
 * @title Título de la tarjeta
 * @subtitle Subtitulo de la tarjeta
 * @buttons Vector de botones de la tarjeta
 */
export interface MessageCard {
    imageUri: string;
    title: string;
    subtitle: string;
    buttons: Array<{
        text: string;
        postback: string;
    }>;
}
/**
 * Respuesta rápidas
 * @quickReplies Vector con las respuesta rápidas
 */
export interface MessageQuickReplies {
    quickReplies: Array<string>;
}
