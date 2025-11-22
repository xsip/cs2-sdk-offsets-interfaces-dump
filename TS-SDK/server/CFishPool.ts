// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x548
// BaseClass: : public CS2::server::CBaseEntity
export const server_CFishPool  = {
	...server_CBaseEntity,
	m_fishCount: 1280n, // int32_t m_fishCount; |  0x500 | Schema_Builtin | Size: 0x4
	m_maxRange: 1284n, // float32 m_maxRange; |  0x504 | Schema_Builtin | Size: 0x4
	m_swimDepth: 1288n, // float32 m_swimDepth; |  0x508 | Schema_Builtin | Size: 0x4
	m_waterLevel: 1292n, // float32 m_waterLevel; |  0x50c | Schema_Builtin | Size: 0x4
	m_isDormant: 1296n, // bool m_isDormant; |  0x510 | Schema_Builtin | Size: 0x1
	m_fishes: 1304n, // server::CUtlVector<GlobalTypes::CHandle<server::CFish>>  | Schema_Atomic | Size: 0x18
	m_visTimer: 1328n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
}
