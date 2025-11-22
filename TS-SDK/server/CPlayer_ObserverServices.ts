// generated - do not edit!

import {client_CPlayerPawnComponent} from '../client/CPlayerPawnComponent';
// Class size: 0x50
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const server_CPlayer_ObserverServices  = {
	...client_CPlayerPawnComponent,
	m_iObserverMode: 64n, // uint8_t m_iObserverMode; |  0x40 | Schema_Builtin | Size: 0x1
	m_hObserverTarget: 68n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iObserverLastMode: 72n, // client::ObserverMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_bForcedObserverMode: 76n, // bool m_bForcedObserverMode; |  0x4c | Schema_Builtin | Size: 0x1
}
