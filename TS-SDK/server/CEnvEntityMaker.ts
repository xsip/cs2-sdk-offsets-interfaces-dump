// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x590
// BaseClass: : public CS2::server::CPointEntity
export const server_CEnvEntityMaker  = {
	...server_CPointEntity,
	m_vecEntityMins: 1264n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecEntityMaxs: 1276n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hCurrentInstance: 1288n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hCurrentBlocker: 1292n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_vecBlockerOrigin: 1296n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angPostSpawnDirection: 1308n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flPostSpawnDirectionVariance: 1320n, // float32 m_flPostSpawnDirectionVariance; |  0x528 | Schema_Builtin | Size: 0x4
	m_flPostSpawnSpeed: 1324n, // float32 m_flPostSpawnSpeed; |  0x52c | Schema_Builtin | Size: 0x4
	m_bPostSpawnUseAngles: 1328n, // bool m_bPostSpawnUseAngles; |  0x530 | Schema_Builtin | Size: 0x1
	m_iszTemplate: 1336n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_pOutputOnSpawned: 1344n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_pOutputOnFailedSpawn: 1384n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
