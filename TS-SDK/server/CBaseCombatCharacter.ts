// generated - do not edit!

import {server_CBaseFlex} from './CBaseFlex';
// Class size: 0xB70
// BaseClass: : public CS2::server::CBaseFlex
export const server_CBaseCombatCharacter  = {
	...server_CBaseFlex,
	m_bForceServerRagdoll: 2736n, // bool m_bForceServerRagdoll; |  0xab0 | Schema_Builtin | Size: 0x1
	m_hMyWearables: 2744n, // server::CNetworkUtlVectorBase<GlobalTypes::CHandle<server::CEconWearable>>  | Schema_Atomic | Size: 0x18
	m_impactEnergyScale: 2768n, // float32 m_impactEnergyScale; |  0xad0 | Schema_Builtin | Size: 0x4
	m_bApplyStressDamage: 2772n, // bool m_bApplyStressDamage; |  0xad4 | Schema_Builtin | Size: 0x1
	m_bDeathEventsDispatched: 2773n, // bool m_bDeathEventsDispatched; |  0xad5 | Schema_Builtin | Size: 0x1
	m_pVecRelationships: 2840n, // GlobalTypes::CUtlVector*  | Schema_Ptr | Size: 0x8
	m_strRelationships: 2848n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_eHull: 2856n, // client::Hull_t  | Schema_DeclaredEnum | Size: 0x4
	m_nNavHullIdx: 2860n, // uint32_t m_nNavHullIdx; |  0xb2c | Schema_Builtin | Size: 0x4
	m_movementStats: 2864n, // server::CMovementStatsProperty  | Schema_DeclaredClass | Size: 0x40
}
