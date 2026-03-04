// generated - do not edit!

import {server_CBaseTrigger} from './CBaseTrigger';
// Class size: 0x950
// BaseClass: : public CS2::server::CBaseTrigger
export const server_CTriggerFan  = {
	...server_CBaseTrigger,
	m_vFanOriginOffset: 2192n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vDirection: 2204n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bPushTowardsInfoTarget: 2216n, // bool m_bPushTowardsInfoTarget; |  0x8a8 | Schema_Builtin | Size: 0x1
	m_bPushAwayFromInfoTarget: 2217n, // bool m_bPushAwayFromInfoTarget; |  0x8a9 | Schema_Builtin | Size: 0x1
	m_qNoiseDelta: 2224n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_hInfoFan: 2240n, // GlobalTypes::CHandle<server::CInfoFan>  | Schema_Atomic | Size: 0x4
	m_flForce: 2244n, // float32 m_flForce; |  0x8c4 | Schema_Builtin | Size: 0x4
	m_bFalloff: 2248n, // bool m_bFalloff; |  0x8c8 | Schema_Builtin | Size: 0x1
	m_RampTimer: 2256n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_vFanOriginWS: 2280n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_vFanOriginLS: 2292n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vFanEndLS: 2304n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vNoiseDirectionTarget: 2316n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_iszInfoFan: 2328n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flRopeForceScale: 2336n, // float32 m_flRopeForceScale; |  0x920 | Schema_Builtin | Size: 0x4
	m_flParticleForceScale: 2340n, // float32 m_flParticleForceScale; |  0x924 | Schema_Builtin | Size: 0x4
	m_flPlayerForce: 2344n, // float32 m_flPlayerForce; |  0x928 | Schema_Builtin | Size: 0x4
	m_bPlayerWindblock: 2348n, // bool m_bPlayerWindblock; |  0x92c | Schema_Builtin | Size: 0x1
	m_flNPCForce: 2352n, // float32 m_flNPCForce; |  0x930 | Schema_Builtin | Size: 0x4
	m_flRampTime: 2356n, // float32 m_flRampTime; |  0x934 | Schema_Builtin | Size: 0x4
	m_fNoiseDegrees: 2360n, // float32 m_fNoiseDegrees; |  0x938 | Schema_Builtin | Size: 0x4
	m_fNoiseSpeed: 2364n, // float32 m_fNoiseSpeed; |  0x93c | Schema_Builtin | Size: 0x4
	m_bPushPlayer: 2368n, // bool m_bPushPlayer; |  0x940 | Schema_Builtin | Size: 0x1
	m_bRampDown: 2369n, // bool m_bRampDown; |  0x941 | Schema_Builtin | Size: 0x1
	m_nManagerFanIdx: 2372n, // int32_t m_nManagerFanIdx; |  0x944 | Schema_Builtin | Size: 0x4
}
