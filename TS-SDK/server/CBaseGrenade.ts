// generated - do not edit!

import {server_CBaseFlex} from './CBaseFlex';
// Class size: 0xBD0
// BaseClass: : public CS2::server::CBaseFlex
export const server_CBaseGrenade  = {
	...server_CBaseFlex,
	m_OnPlayerPickup: 2856n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnExplode: 2896n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_bHasWarnedAI: 2936n, // bool m_bHasWarnedAI; |  0xb78 | Schema_Builtin | Size: 0x1
	m_bIsSmokeGrenade: 2937n, // bool m_bIsSmokeGrenade; |  0xb79 | Schema_Builtin | Size: 0x1
	m_bIsLive: 2938n, // bool m_bIsLive; |  0xb7a | Schema_Builtin | Size: 0x1
	m_DmgRadius: 2940n, // float32 m_DmgRadius; |  0xb7c | Schema_Builtin | Size: 0x4
	m_flDetonateTime: 2944n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flWarnAITime: 2948n, // float32 m_flWarnAITime; |  0xb84 | Schema_Builtin | Size: 0x4
	m_flDamage: 2952n, // float32 m_flDamage; |  0xb88 | Schema_Builtin | Size: 0x4
	m_iszBounceSound: 2960n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_ExplosionSound: 2968n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_hThrower: 2980n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flNextAttack: 3004n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hOriginalThrower: 3008n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
}
