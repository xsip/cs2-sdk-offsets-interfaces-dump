// generated - do not edit!

import {server_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0xBA0
// BaseClass: : public CS2::server::CBaseAnimGraph
export const server_CFish  = {
	...server_CBaseAnimGraph,
	m_pool: 2704n, // GlobalTypes::CHandle<server::CFishPool>  | Schema_Atomic | Size: 0x4
	m_id: 2708n, // uint32_t m_id; |  0xa94 | Schema_Builtin | Size: 0x4
	m_x: 2712n, // float32 m_x; |  0xa98 | Schema_Builtin | Size: 0x4
	m_y: 2716n, // float32 m_y; |  0xa9c | Schema_Builtin | Size: 0x4
	m_z: 2720n, // float32 m_z; |  0xaa0 | Schema_Builtin | Size: 0x4
	m_angle: 2724n, // float32 m_angle; |  0xaa4 | Schema_Builtin | Size: 0x4
	m_angleChange: 2728n, // float32 m_angleChange; |  0xaa8 | Schema_Builtin | Size: 0x4
	m_forward: 2732n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_perp: 2744n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_poolOrigin: 2756n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_waterLevel: 2768n, // float32 m_waterLevel; |  0xad0 | Schema_Builtin | Size: 0x4
	m_speed: 2772n, // float32 m_speed; |  0xad4 | Schema_Builtin | Size: 0x4
	m_desiredSpeed: 2776n, // float32 m_desiredSpeed; |  0xad8 | Schema_Builtin | Size: 0x4
	m_calmSpeed: 2780n, // float32 m_calmSpeed; |  0xadc | Schema_Builtin | Size: 0x4
	m_panicSpeed: 2784n, // float32 m_panicSpeed; |  0xae0 | Schema_Builtin | Size: 0x4
	m_avoidRange: 2788n, // float32 m_avoidRange; |  0xae4 | Schema_Builtin | Size: 0x4
	m_turnTimer: 2792n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_turnClockwise: 2816n, // bool m_turnClockwise; |  0xb00 | Schema_Builtin | Size: 0x1
	m_goTimer: 2824n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_moveTimer: 2848n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_panicTimer: 2872n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_disperseTimer: 2896n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_proximityTimer: 2920n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_visible: 2944n, // server::CUtlVector<server::CFish*>  | Schema_Atomic | Size: 0x18
}
