import '../../stencil.core';
export declare class ChatCardCall {
    fontumiConfig: any;
    call: any;
    isInCall: boolean;
    makeCall(): Promise<void>;
    hangup(): Promise<void>;
    componentDidLoad(): Promise<void>;
    render(): JSX.Element;
}
