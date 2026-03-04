// generated - do not edit!

import {client_C_BaseFlex} from './C_BaseFlex';
// Class size: 0x13A0
// BaseClass: : public CS2::client::C_BaseFlex
export const client_C_BaseGrenade  = {
	...client_C_BaseFlex,
	m_bHasWarnedAI: 4944n, // bool m_bHasWarnedAI; |  0x1350 | Schema_Builtin | Size: 0x1
	m_bIsSmokeGrenade: 4945n, // bool m_bIsSmokeGrenade; |  0x1351 | Schema_Builtin | Size: 0x1
	m_bIsLive: 4946n, // bool m_bIsLive; |  0x1352 | Schema_Builtin | Size: 0x1
	m_DmgRadius: 4948n, // float32 m_DmgRadius; |  0x1354 | Schema_Builtin | Size: 0x4
	m_flDetonateTime: 4952n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flWarnAITime: 4956n, // float32 m_flWarnAITime; |  0x135c | Schema_Builtin | Size: 0x4
	m_flDamage: 4960n, // float32 m_flDamage; |  0x1360 | Schema_Builtin | Size: 0x4
	m_iszBounceSound: 4968n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_ExplosionSound: 4976n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_hThrower: 4988n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flNextAttack: 5012n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hOriginalThrower: 5016n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
}
