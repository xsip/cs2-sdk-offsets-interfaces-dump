// generated - do not edit!

import {server_CBaseFlex} from './CBaseFlex';
// Class size: 0xB40
// BaseClass: : public CS2::server::CBaseFlex
export const server_CBaseGrenade  = {
	...server_CBaseFlex,
	m_OnPlayerPickup: 2744n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnExplode: 2768n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bHasWarnedAI: 2792n, // bool m_bHasWarnedAI; |  0xae8 | Schema_Builtin | Size: 0x1
	m_bIsSmokeGrenade: 2793n, // bool m_bIsSmokeGrenade; |  0xae9 | Schema_Builtin | Size: 0x1
	m_bIsLive: 2794n, // bool m_bIsLive; |  0xaea | Schema_Builtin | Size: 0x1
	m_DmgRadius: 2796n, // float32 m_DmgRadius; |  0xaec | Schema_Builtin | Size: 0x4
	m_flDetonateTime: 2800n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flWarnAITime: 2804n, // float32 m_flWarnAITime; |  0xaf4 | Schema_Builtin | Size: 0x4
	m_flDamage: 2808n, // float32 m_flDamage; |  0xaf8 | Schema_Builtin | Size: 0x4
	m_iszBounceSound: 2816n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_ExplosionSound: 2824n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_hThrower: 2836n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flNextAttack: 2860n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hOriginalThrower: 2864n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
}
