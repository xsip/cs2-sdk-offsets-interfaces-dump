// generated - do not edit!

import {server_CSoundOpvarSetPointBase} from './CSoundOpvarSetPointBase';
// Class size: 0x640
// BaseClass: : public CS2::server::CSoundOpvarSetPointBase
export const server_CSoundOpvarSetPointEntity  = {
	...server_CSoundOpvarSetPointBase,
	m_OnEnter: 1360n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnExit: 1384n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_bAutoDisable: 1408n, // bool m_bAutoDisable; |  0x580 | Schema_Builtin | Size: 0x1
	m_flDistanceMin: 1476n, // float32 m_flDistanceMin; |  0x5c4 | Schema_Builtin | Size: 0x4
	m_flDistanceMax: 1480n, // float32 m_flDistanceMax; |  0x5c8 | Schema_Builtin | Size: 0x4
	m_flDistanceMapMin: 1484n, // float32 m_flDistanceMapMin; |  0x5cc | Schema_Builtin | Size: 0x4
	m_flDistanceMapMax: 1488n, // float32 m_flDistanceMapMax; |  0x5d0 | Schema_Builtin | Size: 0x4
	m_flOcclusionRadius: 1492n, // float32 m_flOcclusionRadius; |  0x5d4 | Schema_Builtin | Size: 0x4
	m_flOcclusionMin: 1496n, // float32 m_flOcclusionMin; |  0x5d8 | Schema_Builtin | Size: 0x4
	m_flOcclusionMax: 1500n, // float32 m_flOcclusionMax; |  0x5dc | Schema_Builtin | Size: 0x4
	m_flValSetOnDisable: 1504n, // float32 m_flValSetOnDisable; |  0x5e0 | Schema_Builtin | Size: 0x4
	m_bSetValueOnDisable: 1508n, // bool m_bSetValueOnDisable; |  0x5e4 | Schema_Builtin | Size: 0x1
	m_bReloading: 1509n, // bool m_bReloading; |  0x5e5 | Schema_Builtin | Size: 0x1
	m_nSimulationMode: 1512n, // int32_t m_nSimulationMode; |  0x5e8 | Schema_Builtin | Size: 0x4
	m_nVisibilitySamples: 1516n, // int32_t m_nVisibilitySamples; |  0x5ec | Schema_Builtin | Size: 0x4
	m_vDynamicProxyPoint: 1520n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_flDynamicMaximumOcclusion: 1532n, // float32 m_flDynamicMaximumOcclusion; |  0x5fc | Schema_Builtin | Size: 0x4
	m_hDynamicEntity: 1536n, // GlobalTypes::CEntityHandle  | Schema_Atomic | Size: 0x4
	m_iszDynamicEntityName: 1544n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flPathingDistanceNormFactor: 1552n, // float32 m_flPathingDistanceNormFactor; |  0x610 | Schema_Builtin | Size: 0x4
	m_vPathingSourcePos: 1556n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPathingListenerPos: 1568n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vPathingDirection: 1580n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nPathingSourceIndex: 1592n, // int32_t m_nPathingSourceIndex; |  0x638 | Schema_Builtin | Size: 0x4
}
