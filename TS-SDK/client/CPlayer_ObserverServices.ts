// generated - do not edit!

import {client_CPlayerPawnComponent} from './CPlayerPawnComponent';
// Class size: 0x60
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const client_CPlayer_ObserverServices  = {
	...client_CPlayerPawnComponent,
	m_iObserverMode: 72n, // uint8_t m_iObserverMode; |  0x48 | Schema_Builtin | Size: 0x1
	m_hObserverTarget: 76n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_iObserverLastMode: 80n, // client::ObserverMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_bForcedObserverMode: 84n, // bool m_bForcedObserverMode; |  0x54 | Schema_Builtin | Size: 0x1
	m_flObserverChaseDistance: 88n, // float32 m_flObserverChaseDistance; |  0x58 | Schema_Builtin | Size: 0x4
	m_flObserverChaseDistanceCalcTime: 92n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
