// generated - do not edit!

import {client_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0x1248
// BaseClass: : public CS2::client::CBaseAnimGraph
export const client_C_Fish  = {
	...client_CBaseAnimGraph,
	m_pos: 4440n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vel: 4452n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_angles: 4464n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_localLifeState: 4476n, // int32_t m_localLifeState; |  0x117c | Schema_Builtin | Size: 0x4
	m_deathDepth: 4480n, // float32 m_deathDepth; |  0x1180 | Schema_Builtin | Size: 0x4
	m_deathAngle: 4484n, // float32 m_deathAngle; |  0x1184 | Schema_Builtin | Size: 0x4
	m_buoyancy: 4488n, // float32 m_buoyancy; |  0x1188 | Schema_Builtin | Size: 0x4
	m_wiggleTimer: 4496n, // client::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_wigglePhase: 4520n, // float32 m_wigglePhase; |  0x11a8 | Schema_Builtin | Size: 0x4
	m_wiggleRate: 4524n, // float32 m_wiggleRate; |  0x11ac | Schema_Builtin | Size: 0x4
	m_actualPos: 4528n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_actualAngles: 4540n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_poolOrigin: 4552n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_waterLevel: 4564n, // float32 m_waterLevel; |  0x11d4 | Schema_Builtin | Size: 0x4
	m_gotUpdate: 4568n, // bool m_gotUpdate; |  0x11d8 | Schema_Builtin | Size: 0x1
	m_x: 4572n, // float32 m_x; |  0x11dc | Schema_Builtin | Size: 0x4
	m_y: 4576n, // float32 m_y; |  0x11e0 | Schema_Builtin | Size: 0x4
	m_z: 4580n, // float32 m_z; |  0x11e4 | Schema_Builtin | Size: 0x4
	m_angle: 4584n, // float32 m_angle; |  0x11e8 | Schema_Builtin | Size: 0x4
	m_errorHistory: 4588n, // float32 m_errorHistory[20]; |  0x11ec | Schema_FixedArray | Size: 0x50
	m_errorHistoryIndex: 4668n, // int32_t m_errorHistoryIndex; |  0x123c | Schema_Builtin | Size: 0x4
	m_errorHistoryCount: 4672n, // int32_t m_errorHistoryCount; |  0x1240 | Schema_Builtin | Size: 0x4
	m_averageError: 4676n, // float32 m_averageError; |  0x1244 | Schema_Builtin | Size: 0x4
}
