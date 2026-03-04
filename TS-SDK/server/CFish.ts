// generated - do not edit!

import {server_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0xB30
// BaseClass: : public CS2::server::CBaseAnimGraph
export const server_CFish  = {
	...server_CBaseAnimGraph,
	m_pool: 2592n, // GlobalTypes::CHandle<server::CFishPool>  | Schema_Atomic | Size: 0x4
	m_id: 2596n, // uint32_t m_id; |  0xa24 | Schema_Builtin | Size: 0x4
	m_x: 2600n, // float32 m_x; |  0xa28 | Schema_Builtin | Size: 0x4
	m_y: 2604n, // float32 m_y; |  0xa2c | Schema_Builtin | Size: 0x4
	m_z: 2608n, // float32 m_z; |  0xa30 | Schema_Builtin | Size: 0x4
	m_angle: 2612n, // float32 m_angle; |  0xa34 | Schema_Builtin | Size: 0x4
	m_angleChange: 2616n, // float32 m_angleChange; |  0xa38 | Schema_Builtin | Size: 0x4
	m_forward: 2620n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_perp: 2632n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_poolOrigin: 2644n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_waterLevel: 2656n, // float32 m_waterLevel; |  0xa60 | Schema_Builtin | Size: 0x4
	m_speed: 2660n, // float32 m_speed; |  0xa64 | Schema_Builtin | Size: 0x4
	m_desiredSpeed: 2664n, // float32 m_desiredSpeed; |  0xa68 | Schema_Builtin | Size: 0x4
	m_calmSpeed: 2668n, // float32 m_calmSpeed; |  0xa6c | Schema_Builtin | Size: 0x4
	m_panicSpeed: 2672n, // float32 m_panicSpeed; |  0xa70 | Schema_Builtin | Size: 0x4
	m_avoidRange: 2676n, // float32 m_avoidRange; |  0xa74 | Schema_Builtin | Size: 0x4
	m_turnTimer: 2680n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_turnClockwise: 2704n, // bool m_turnClockwise; |  0xa90 | Schema_Builtin | Size: 0x1
	m_goTimer: 2712n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_moveTimer: 2736n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_panicTimer: 2760n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_disperseTimer: 2784n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_proximityTimer: 2808n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_visible: 2832n, // server::CUtlVector<server::CFish*>  | Schema_Atomic | Size: 0x18
}
