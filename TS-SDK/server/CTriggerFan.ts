// generated - do not edit!

import {server_CBaseTrigger} from './CBaseTrigger';
// Class size: 0xA70
// BaseClass: : public CS2::server::CBaseTrigger
export const server_CTriggerFan  = {
	...server_CBaseTrigger,
	m_vFanOriginOffset: 2472n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vDirection: 2484n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bPushTowardsInfoTarget: 2496n, // bool m_bPushTowardsInfoTarget; |  0x9c0 | Schema_Builtin | Size: 0x1
	m_bPushAwayFromInfoTarget: 2497n, // bool m_bPushAwayFromInfoTarget; |  0x9c1 | Schema_Builtin | Size: 0x1
	m_qNoiseDelta: 2512n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_hInfoFan: 2528n, // GlobalTypes::CHandle<server::CInfoFan>  | Schema_Atomic | Size: 0x4
	m_flForce: 2532n, // float32 m_flForce; |  0x9e4 | Schema_Builtin | Size: 0x4
	m_bFalloff: 2536n, // bool m_bFalloff; |  0x9e8 | Schema_Builtin | Size: 0x1
	m_RampTimer: 2544n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_vFanOriginWS: 2568n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_vFanOriginLS: 2580n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vFanEndLS: 2592n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vNoiseDirectionTarget: 2604n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_iszInfoFan: 2616n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flRopeForceScale: 2624n, // float32 m_flRopeForceScale; |  0xa40 | Schema_Builtin | Size: 0x4
	m_flParticleForceScale: 2628n, // float32 m_flParticleForceScale; |  0xa44 | Schema_Builtin | Size: 0x4
	m_flPlayerForce: 2632n, // float32 m_flPlayerForce; |  0xa48 | Schema_Builtin | Size: 0x4
	m_bPlayerWindblock: 2636n, // bool m_bPlayerWindblock; |  0xa4c | Schema_Builtin | Size: 0x1
	m_flNPCForce: 2640n, // float32 m_flNPCForce; |  0xa50 | Schema_Builtin | Size: 0x4
	m_flRampTime: 2644n, // float32 m_flRampTime; |  0xa54 | Schema_Builtin | Size: 0x4
	m_fNoiseDegrees: 2648n, // float32 m_fNoiseDegrees; |  0xa58 | Schema_Builtin | Size: 0x4
	m_fNoiseSpeed: 2652n, // float32 m_fNoiseSpeed; |  0xa5c | Schema_Builtin | Size: 0x4
	m_bPushPlayer: 2656n, // bool m_bPushPlayer; |  0xa60 | Schema_Builtin | Size: 0x1
	m_bRampDown: 2657n, // bool m_bRampDown; |  0xa61 | Schema_Builtin | Size: 0x1
	m_nManagerFanIdx: 2660n, // int32_t m_nManagerFanIdx; |  0xa64 | Schema_Builtin | Size: 0x4
}
