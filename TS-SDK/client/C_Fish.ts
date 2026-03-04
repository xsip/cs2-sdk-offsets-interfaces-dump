// generated - do not edit!

import {client_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0x1258
// BaseClass: : public CS2::client::CBaseAnimGraph
export const client_C_Fish  = {
	...client_CBaseAnimGraph,
	m_pos: 4456n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vel: 4468n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angles: 4480n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_localLifeState: 4492n, // int32_t m_localLifeState; |  0x118c | Schema_Builtin | Size: 0x4
	m_deathDepth: 4496n, // float32 m_deathDepth; |  0x1190 | Schema_Builtin | Size: 0x4
	m_deathAngle: 4500n, // float32 m_deathAngle; |  0x1194 | Schema_Builtin | Size: 0x4
	m_buoyancy: 4504n, // float32 m_buoyancy; |  0x1198 | Schema_Builtin | Size: 0x4
	m_wiggleTimer: 4512n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_wigglePhase: 4536n, // float32 m_wigglePhase; |  0x11b8 | Schema_Builtin | Size: 0x4
	m_wiggleRate: 4540n, // float32 m_wiggleRate; |  0x11bc | Schema_Builtin | Size: 0x4
	m_actualPos: 4544n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_actualAngles: 4556n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_poolOrigin: 4568n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_waterLevel: 4580n, // float32 m_waterLevel; |  0x11e4 | Schema_Builtin | Size: 0x4
	m_gotUpdate: 4584n, // bool m_gotUpdate; |  0x11e8 | Schema_Builtin | Size: 0x1
	m_x: 4588n, // float32 m_x; |  0x11ec | Schema_Builtin | Size: 0x4
	m_y: 4592n, // float32 m_y; |  0x11f0 | Schema_Builtin | Size: 0x4
	m_z: 4596n, // float32 m_z; |  0x11f4 | Schema_Builtin | Size: 0x4
	m_angle: 4600n, // float32 m_angle; |  0x11f8 | Schema_Builtin | Size: 0x4
	m_errorHistory: 4604n, // float32 m_errorHistory[20]; |  0x11fc | Schema_FixedArray | Size: 0x50
	m_errorHistoryIndex: 4684n, // int32_t m_errorHistoryIndex; |  0x124c | Schema_Builtin | Size: 0x4
	m_errorHistoryCount: 4688n, // int32_t m_errorHistoryCount; |  0x1250 | Schema_Builtin | Size: 0x4
	m_averageError: 4692n, // float32 m_averageError; |  0x1254 | Schema_Builtin | Size: 0x4
}
