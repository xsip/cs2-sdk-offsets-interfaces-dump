// generated - do not edit!

import {server_CTriggerOnce} from './CTriggerOnce';
// Class size: 0x910
// BaseClass: : public CS2::server::CTriggerOnce
export const server_CTriggerLook  = {
	...server_CTriggerOnce,
	m_hLookTarget: 2216n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flFieldOfView: 2220n, // float32 m_flFieldOfView; |  0x8ac | Schema_Builtin | Size: 0x4
	m_flLookTime: 2224n, // float32 m_flLookTime; |  0x8b0 | Schema_Builtin | Size: 0x4
	m_flLookTimeTotal: 2228n, // float32 m_flLookTimeTotal; |  0x8b4 | Schema_Builtin | Size: 0x4
	m_flLookTimeLast: 2232n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flTimeoutDuration: 2236n, // float32 m_flTimeoutDuration; |  0x8bc | Schema_Builtin | Size: 0x4
	m_bTimeoutFired: 2240n, // bool m_bTimeoutFired; |  0x8c0 | Schema_Builtin | Size: 0x1
	m_bIsLooking: 2241n, // bool m_bIsLooking; |  0x8c1 | Schema_Builtin | Size: 0x1
	m_b2DFOV: 2242n, // bool m_b2DFOV; |  0x8c2 | Schema_Builtin | Size: 0x1
	m_bUseVelocity: 2243n, // bool m_bUseVelocity; |  0x8c3 | Schema_Builtin | Size: 0x1
	m_bTestOcclusion: 2244n, // bool m_bTestOcclusion; |  0x8c4 | Schema_Builtin | Size: 0x1
	m_bTestAllVisibleOcclusion: 2245n, // bool m_bTestAllVisibleOcclusion; |  0x8c5 | Schema_Builtin | Size: 0x1
	m_OnTimeout: 2248n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnStartLook: 2272n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnEndLook: 2296n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
