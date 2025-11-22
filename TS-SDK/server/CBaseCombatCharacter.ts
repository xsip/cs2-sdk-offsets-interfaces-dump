// generated - do not edit!

import {server_CBaseFlex} from './CBaseFlex';
// Class size: 0xBE0
// BaseClass: : public CS2::server::CBaseFlex
export const server_CBaseCombatCharacter  = {
	...server_CBaseFlex,
	m_bForceServerRagdoll: 2848n, // bool m_bForceServerRagdoll; |  0xb20 | Schema_Builtin | Size: 0x1
	m_hMyWearables: 2856n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CEconWearable>>  | Schema_Atomic | Size: 0x18
	m_impactEnergyScale: 2880n, // float32 m_impactEnergyScale; |  0xb40 | Schema_Builtin | Size: 0x4
	m_bApplyStressDamage: 2884n, // bool m_bApplyStressDamage; |  0xb44 | Schema_Builtin | Size: 0x1
	m_bDeathEventsDispatched: 2885n, // bool m_bDeathEventsDispatched; |  0xb45 | Schema_Builtin | Size: 0x1
	m_pVecRelationships: 2952n, // GlobalTypes::CUtlVector*  | Schema_Ptr | Size: 0x8
	m_strRelationships: 2960n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_eHull: 2968n, // client::Hull_t  | Schema_DeclaredEnum | Size: 0x4
	m_nNavHullIdx: 2972n, // uint32_t m_nNavHullIdx; |  0xb9c | Schema_Builtin | Size: 0x4
	m_movementStats: 2976n, // server::CMovementStatsProperty  | Schema_DeclaredClass | Size: 0x40
}
