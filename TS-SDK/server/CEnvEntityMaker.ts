// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x528
// BaseClass: : public CS2::server::CPointEntity
export const server_CEnvEntityMaker  = {
	...server_CPointEntity,
	m_vecEntityMins: 1192n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecEntityMaxs: 1204n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hCurrentInstance: 1216n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hCurrentBlocker: 1220n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_vecBlockerOrigin: 1224n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angPostSpawnDirection: 1236n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_flPostSpawnDirectionVariance: 1248n, // float32 m_flPostSpawnDirectionVariance; |  0x4e0 | Schema_Builtin | Size: 0x4
	m_flPostSpawnSpeed: 1252n, // float32 m_flPostSpawnSpeed; |  0x4e4 | Schema_Builtin | Size: 0x4
	m_bPostSpawnUseAngles: 1256n, // bool m_bPostSpawnUseAngles; |  0x4e8 | Schema_Builtin | Size: 0x1
	m_iszTemplate: 1264n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_pOutputOnSpawned: 1272n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_pOutputOnFailedSpawn: 1296n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
}
