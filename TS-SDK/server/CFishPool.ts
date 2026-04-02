// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x500
// BaseClass: : public CS2::server::CBaseEntity
export const server_CFishPool  = {
	...server_CBaseEntity,
	m_fishCount: 1208n, // int32_t m_fishCount; |  0x4b8 | Schema_Builtin | Size: 0x4
	m_maxRange: 1212n, // float32 m_maxRange; |  0x4bc | Schema_Builtin | Size: 0x4
	m_swimDepth: 1216n, // float32 m_swimDepth; |  0x4c0 | Schema_Builtin | Size: 0x4
	m_waterLevel: 1220n, // float32 m_waterLevel; |  0x4c4 | Schema_Builtin | Size: 0x4
	m_isDormant: 1224n, // bool m_isDormant; |  0x4c8 | Schema_Builtin | Size: 0x1
	m_fishes: 1232n, // GlobalTypes::CUtlVector<GlobalTypes::CHandle<server::CFish>>  | Schema_Atomic | Size: 0x18
	m_visTimer: 1256n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
}
