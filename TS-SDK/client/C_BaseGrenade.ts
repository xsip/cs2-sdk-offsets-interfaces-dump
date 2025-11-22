// generated - do not edit!

import {client_C_BaseFlex} from './C_BaseFlex';
// Class size: 0x13B8
// BaseClass: : public CS2::client::C_BaseFlex
export const client_C_BaseGrenade  = {
	...client_C_BaseFlex,
	m_bHasWarnedAI: 4968n, // bool m_bHasWarnedAI; |  0x1368 | Schema_Builtin | Size: 0x1
	m_bIsSmokeGrenade: 4969n, // bool m_bIsSmokeGrenade; |  0x1369 | Schema_Builtin | Size: 0x1
	m_bIsLive: 4970n, // bool m_bIsLive; |  0x136a | Schema_Builtin | Size: 0x1
	m_DmgRadius: 4972n, // float32 m_DmgRadius; |  0x136c | Schema_Builtin | Size: 0x4
	m_flDetonateTime: 4976n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flWarnAITime: 4980n, // float32 m_flWarnAITime; |  0x1374 | Schema_Builtin | Size: 0x4
	m_flDamage: 4984n, // float32 m_flDamage; |  0x1378 | Schema_Builtin | Size: 0x4
	m_iszBounceSound: 4992n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_ExplosionSound: 5000n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_hThrower: 5012n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flNextAttack: 5036n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hOriginalThrower: 5040n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
}
