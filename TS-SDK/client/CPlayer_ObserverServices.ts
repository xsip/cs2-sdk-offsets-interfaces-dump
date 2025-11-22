// generated - do not edit!

import {client_CPlayerPawnComponent} from './CPlayerPawnComponent';
// Class size: 0x58
// BaseClass: : public CS2::client::CPlayerPawnComponent
export const client_CPlayer_ObserverServices  = {
	...client_CPlayerPawnComponent,
	m_iObserverMode: 64n, // uint8_t m_iObserverMode; |  0x40 | Schema_Builtin | Size: 0x1
	m_hObserverTarget: 68n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_iObserverLastMode: 72n, // client::ObserverMode_t  | Schema_DeclaredEnum | Size: 0x4
	m_bForcedObserverMode: 76n, // bool m_bForcedObserverMode; |  0x4c | Schema_Builtin | Size: 0x1
	m_flObserverChaseDistance: 80n, // float32 m_flObserverChaseDistance; |  0x50 | Schema_Builtin | Size: 0x4
	m_flObserverChaseDistanceCalcTime: 84n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
}
