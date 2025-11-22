// generated - do not edit!

import {server_CTriggerOnce} from './CTriggerOnce';
// Class size: 0xA68
// BaseClass: : public CS2::server::CTriggerOnce
export const server_CTriggerLook  = {
	...server_CTriggerOnce,
	m_hLookTarget: 2512n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flFieldOfView: 2516n, // float32 m_flFieldOfView; |  0x9d4 | Schema_Builtin | Size: 0x4
	m_flLookTime: 2520n, // float32 m_flLookTime; |  0x9d8 | Schema_Builtin | Size: 0x4
	m_flLookTimeTotal: 2524n, // float32 m_flLookTimeTotal; |  0x9dc | Schema_Builtin | Size: 0x4
	m_flLookTimeLast: 2528n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flTimeoutDuration: 2532n, // float32 m_flTimeoutDuration; |  0x9e4 | Schema_Builtin | Size: 0x4
	m_bTimeoutFired: 2536n, // bool m_bTimeoutFired; |  0x9e8 | Schema_Builtin | Size: 0x1
	m_bIsLooking: 2537n, // bool m_bIsLooking; |  0x9e9 | Schema_Builtin | Size: 0x1
	m_b2DFOV: 2538n, // bool m_b2DFOV; |  0x9ea | Schema_Builtin | Size: 0x1
	m_bUseVelocity: 2539n, // bool m_bUseVelocity; |  0x9eb | Schema_Builtin | Size: 0x1
	m_bTestOcclusion: 2540n, // bool m_bTestOcclusion; |  0x9ec | Schema_Builtin | Size: 0x1
	m_bTestAllVisibleOcclusion: 2541n, // bool m_bTestAllVisibleOcclusion; |  0x9ed | Schema_Builtin | Size: 0x1
	m_OnTimeout: 2544n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnStartLook: 2584n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnEndLook: 2624n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
