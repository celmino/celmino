import { IProtocol } from '../protocols/IProtocol';
export declare const BrokerProviderContext: any;
export declare const useBroker: <Protocol extends IProtocol>(brokerToken: any) => Protocol;
