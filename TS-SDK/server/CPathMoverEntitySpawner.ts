// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x508
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CPathMoverEntitySpawner  = {
	...server_CLogicalEntity,
	m_szSpawnTemplates: 1192n, // GlobalTypes::CUtlSymbolLarge[4]  | Schema_FixedArray | Size: 0x20
	m_nSpawnIndex: 1224n, // int32_t m_nSpawnIndex; |  0x4c8 | Schema_Builtin | Size: 0x4
	m_hPathMover: 1228n, // GlobalTypes::CHandle<server::CPathMover>  | Schema_Atomic | Size: 0x4
	m_flSpawnFrequencySeconds: 1232n, // float32 m_flSpawnFrequencySeconds; |  0x4d0 | Schema_Builtin | Size: 0x4
	m_flSpawnFrequencyDistToNearestMover: 1236n, // float32 m_flSpawnFrequencyDistToNearestMover; |  0x4d4 | Schema_Builtin | Size: 0x4
	m_mapSpawnedMoverTemplates: 1240n, // server::CUtlHashtable  | Schema_Atomic | Size: 0x20
	m_nMaxActive: 1272n, // int32_t m_nMaxActive; |  0x4f8 | Schema_Builtin | Size: 0x4
	m_flLastSpawnTime: 1276n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bEnabled: 1280n, // bool m_bEnabled; |  0x500 | Schema_Builtin | Size: 0x1
}
